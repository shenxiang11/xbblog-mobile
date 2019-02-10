import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Article = () => import('@/pages/article')
const Guestbook = () => import('@/pages/guestbook')
const ArticleDetail = () => import('@/pages/article-detail')

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/blog'
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Article
    },
    {
      path: '/article/:category',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/detail/:_id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/guestbook',
      name: 'Guestbook',
      component: Guestbook
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return false
  }
})

export default router
