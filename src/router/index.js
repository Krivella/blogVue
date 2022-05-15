import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatePost from '@/components/Create-post'
import AllPosts from '@/components/All-posts'
import OnePost from '@/components/One-post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    component: CreatePost
  },
  {
    path: '/list',
    name: 'list',
    component: AllPosts
  },
  {
    path: '/task/:id',
    name: 'post',
    component: OnePost
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
