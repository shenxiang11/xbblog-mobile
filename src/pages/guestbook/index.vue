<template>
  <div class="guestbook">
    <site-header />
    <div class="wrapper">
      <cube-scroll
        ref="scroll"
        :data="guestbooks"
        :options="options"
        @pulling-up="onPullingUp"
        class="horizontal-scroll-list-wrap">
        <div class="message" v-for="item in guestbooks" :key="item._id">
          <a
            v-if="item.user"
            href="javascript:;"
            target="_blank"
            class="user">
            <img
              v-if="item.user.portrait"
              :src="item.user.portrait"
              class="avatar" />
            <span class="name">{{item.user.nickname || item.user.mail}}</span>
          </a>
          <div class="content">{{item.message}}</div>
          <div class="meta">
            <time class="time">{{item.create_at | datetime}}</time>
          </div>
        </div>
      </cube-scroll>
    </div>
    <site-footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'

export default {
  name: 'Guestbook',
  data () {
    return {
      options: {
        pullUpLoad: true
      },
      guestbooks: [],
      pagination: null
    }
  },
  mounted () {
    this.fetchGuestbooks()
  },
  methods: {
    onPullingUp () {
      const totalPage = parseInt(this.pagination.total / this.pagination.pageSize) + 1
      if (this.pagination.currentPage < totalPage) {
        this.fetchGuestbooks()
      } else {
        this.$refs.scroll.forceUpdate()
      }
    },
    async fetchGuestbooks () {
      const { data: { result: { list, pagination } } } = await axios.get('/api/guestbook/list', {
        params: {
          currentPage: this.pagination ? this.pagination.currentPage + 1 : 1
        }
      })

      this.guestbooks = this.guestbooks.concat(list)
      this.pagination = pagination
    }
  },
  components: {
    SiteHeader: Header,
    SiteFooter: Footer
  }
}
</script>

<style scoped lang="stylus">
.wrapper {
  position: absolute;
  top: 48Px;
  bottom: 48Px;
  left: 0;
  right: 0;
}

.message {
  display: block;
  box-sizing: border-box;
  padding: 16px;
  margin: 10px;
  background-color: hsla(0,0%,100%,0.8);
  box-shadow: 0 0 14px 2px #ebebeb;
  border-radius: 2px;
  .user {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    text-decoration: none;
    .avatar {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      margin-right: 12px;
      object-fit: cover;
    }
    .name {
      color: #222;
      font-size: 12px;
    }
  }
  .content {
    font-size: 14px;
    line-height: 1.4;
    margin: 12px 0;
    color: rgba(0,0,0,0.85);
    word-break: break-all;
  }
  .meta {
    text-align: right;
    font-size: 12px;
    color: rgba(0,0,0,0.43);
  }
}
</style>
