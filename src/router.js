import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home //首页
    },
    {
      path: '/yaoyiyao',
      name: 'yaoyiyao',
      component: () => import('./views/yaoyiyao.vue') //摇一摇
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/demo.vue') //摇一摇
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('./views/question.vue') //
    }
  ]
})
