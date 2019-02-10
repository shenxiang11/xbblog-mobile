<template>
  <div class="">
    <site-header />
    <div class="wrapper">
      <cube-tab-bar
        v-model="selectedLabel"
        show-slider
        :use-transition="disabled"
        ref="tabNav"
        :data="tabLabels">
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- tab1 -->
          <cube-slide-item>
            <cube-scroll @pulling-up="onPullingUp('code')" :data="article.code" :options="scrollOptions">
              <article-list :articles="article.code" />
            </cube-scroll>
          </cube-slide-item>
          <!-- tab2 -->
          <cube-slide-item>
            <cube-scroll @pulling-up="onPullingUp('think')" :data="article.think" :options="scrollOptions">
              <article-list :articles="article.think" />
            </cube-scroll>
          </cube-slide-item>
          <!-- tab3 -->
          <cube-slide-item>
            <cube-scroll @pulling-up="onPullingUp('fitness')" :data="article.fitness" :options="scrollOptions">
              <article-list :articles="article.fitness" />
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import ArticleList from '@/components/article-list'
import axios from 'axios'

function findIndex (ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

export default {
  name: 'Article',
  data () {
    return {
      article: {
        code: [],
        fitness: [],
        think: []
      },
      pagination: {
        code: null,
        fitness: null,
        think: null
      },
      selectedLabel: '代码',
      disabled: false,
      tabLabels: [{
        label: '代码'
      }, {
        label: '思考'
      }, {
        label: '健身'
      }],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0,
        pullUpLoad: true
      }
    }
  },
  mounted () {
    this.fetchArticle('code')
    this.fetchArticle('think')
    this.fetchArticle('fitness')
  },
  methods: {
    onPullingUp (category) {
      this.fetchArticle(category)
    },
    async fetchArticle (category) {
      const { data: { result: { list, pagination } } } = await axios.get('/api/article/list/client', {
        params: {
          category,
          currentPage: this.pagination[category] ? this.pagination[category].currentPage + 1 : 1
        }
      })

      this.article[category] = this.article[category].concat(list)
      this.pagination[category] = pagination
    },
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    },
    resolveTitle (item) {
      return `${item.name}关注了问题 · ${item.postTime} 小时前`
    },
    resolveQuestionFollowers (item) {
      return `${item.answers} 赞同 · ${item.followers} 评论`
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
      return index
    }
  },
  components: {
    SiteHeader: Header,
    SiteFooter: Footer,
    ArticleList
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

.tab-slide-container {
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0;
  right: 0;
}

.cube-tab-bar {
  position: sticky;
  z-index: 10;
  top: 48Px;
  height: 30px;
  background-color: #fff;
  font-size: 14Px;
}
</style>
