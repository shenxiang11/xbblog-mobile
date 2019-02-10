<template>
  <div class="article-list">
    <router-link tag="article" :to="`/article/detail/${item._id}`" v-for="item in articles" class="article" :key="item._id">
      <h3 class="title">{{item.title}}</h3>
      <p class="description">{{item.description}}</p>
      <div class="meta">
        <div class="meta-items">
          <div class="meta-item">
            <i class="iconfont icon-mulu" />
            <span class="meta-text">{{item.category | category}}</span>
          </div>
          <div class="meta-item">
            <i class="iconfont icon-eye" />
            <span class="meta-text">{{item.view}}</span>
          </div>
        </div>
        <time class="time">{{item.create_at | time}}</time>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    articles: {
      types: Array,
      default: []
    }
  }
}
</script>

<style scoped lang="stylus">
.article-list {
  margin: 10px 0;
  .article {
    box-sizing: border-box;
    position: relative;
    padding: 12px;
    background-color: hsla(0,0%,100%,0.8);
    &:not(:last-of-type):after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 12px;
      right: 12px;
      border-top: 1Px dashed #e6e6e6;
    }
    .title {
      font-size: 16px;
      color: #222;
      font-weight: bold;
      white-space: normal;
      line-height: 1.4;
      margin: 0 0 12px 0;
    }
    .description {
      font-size: 12px;
      line-height: 1.4;
      margin: 12px 0;
      white-space: normal;
      color: rgba(0, 0, 0, 0.43);
    }
    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.43);
      .meta-items {
        display flex;
        align-items: center;
        .meta-item {
          display: flex;
          align-items: center;
          margin-right: 10px;
          .iconfont {
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
