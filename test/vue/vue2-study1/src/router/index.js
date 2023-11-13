import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout'
import ArticleDetail from '@/views/ArticleDetail'
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { 
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/Like',
          component: Like
        },
        {
          path: '/User',
          component: User
        }
      ]
    },
    {
      path: '/detail/:id',
      component: ArticleDetail
    }
  ]
})

export default router