<template>
  <div class="">
    <site-header />
    <div class="article">
      <h2 class="title">{{ article.title }}</h2>
      <div class="meta">
        <div class="meta-item category">
          <i class="iconfont icon-mulu"/>{{ article.category | category }}
        </div>
        <div class="meta-item pvs">
          {{ article.view }}次阅读
        </div>
      </div>
      <div
        v-if="article.thumb"
        class="thumb">
        <img
          :src="article.thumb"
          alt="">
      </div>
      <p
        v-if="article.description"
        class="description">{{ article.description }}</p>
      <div
        class="markdown-body"
        v-html="article.content" />
      <div class="article-info">
        <div class="created-at">发布时间：{{ article.create_at | datetime }}</div>
        <div class="updated-at">更新时间：{{ article.update_at | datetime }}</div>
        <div class="copyright">版权声明：自由转载-署名-非商业性使用<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a
            href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh"
            target="_blank">CC BY-NC 3.0 CN</a>
        </div>
      </div>
      <div
        v-if="article.tag && article.tag.length"
        class="tags">
        <span
          v-for="tag in article.tag"
          :key="tag._id"
          class="tag">{{ tag.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import axios from 'axios'
import marked from 'marked'

export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.handleShare()
    this.fetchArticleDetail()
  },
  methods: {
    async handleShare () {
      const { data: { result } } = await axios.get(`/api/wechat/params?url=${encodeURIComponent(location.href)}`)
      const _this = this

      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: result.appId, // 必填，公众号的唯一标识
        timestamp: result.timestamp, // 必填，生成签名的时间戳
        nonceStr: result.noncestr, // 必填，生成签名的随机串
        signature: result.signature,// 必填，签名
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
      })

      wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
          title: _this.article.title, // 分享标题
          desc: _this.article.description,
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _this.article.thumb // 分享图标
        })
        wx.updateTimelineShareData({
          title: _this.article.title, // 分享标题
          desc: _this.article.description,
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _this.article.thumb // 分享图标
        })
      })
    },
    async fetchArticleDetail () {
      const { data: { result } } = await axios.get(`/api/article/client/${this.$route.params._id}`)

      result.content = marked(result.content)

      this.article = result
    }
  },
  components: {
    SiteHeader: Header
  }
}
</script>

<style scoped lang="stylus">
.article {
  padding: 16px;
  box-sizing: border-box;
  line-height: 1.4;
  background-color: hsla(0,0%,100%,0.8);
  .title {
    margin: 16px 0;
    font-size: 20px;
    text-align: center;
    color: rgba(0,0,0,0.65);
  }
  .meta {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin: 12px 0 16px;
    color: rgba(0,0,0,0.43);
    font-size: 12px;
    .meta-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      position: relative;
      margin-right: 12px;
      &:not(:first-of-type):before {
        content: "";
        display: block;
        width: 2px;
        height: 2px;
        box-sizing: border-box;
        margin-right: 4px;
        border: 1px solid rgba(0,0,0,0.43);
        border-radius: 1px;
      }
      .iconfont {
        margin-right: 8px;
      }
      &.category {
        color: rgba(0,0,0,0.65);
      }
    }
  }
  .thumb {
    width: 100%;
    img {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 16px;
      border: 6px solid #e6e6e6;
    }
  }
  .description {
    font-size: 16px;
    color: rgba(0,0,0,0.85);
    font-weight: 300;
  }
  .markdown-body {
    font-size: 16px;
    font-weight: 300;
    color: rgba(0,0,0,0.85);
    user-select: text;
  }
  .article-info {
    font-size: 14px;
    margin-top: 8px;
    padding: 8px;
    line-height: 2;
    background-color: #f2f2f2;
    border-left: 4px solid rgba(48,46,49,0.2);
    font-weight: 300;
    a {
      color: rgba(0,0,0,0.65);
    }
  }
  .tags {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px dashed #e6e6e6;
    text-align: center;
    .tag {
      display: inline-block;
      margin: 0 8px 8px 0;
      padding: 4px 8px;
      border: 1px solid #e6e6e6;
      font-size: 12px;
      border-radius: 4px;
      transition: all .3s ease;
    }
  }
}
</style>
