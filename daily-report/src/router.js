import Vue from 'vue'
import Router from 'vue-router'
import Conponents from './components/1.conponents.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'conponents',
      component: Conponents
    },
    {
      path: '/show-bind',
      name: 'show-bind',
      component: () => import(/* webpackChunkName: "show-bind" */ './components/2.show+bind.vue')
    },
    {
      path: '/class-style',
      name: 'class-style',
      component: () => import(/** webpackChunkName: "class-style" */ './components/3.class+style.vue')
    },
    {
      path: '/v-for',
      name: 'v-for',
      component: () => import(/** webpackChunkName: "v-for" */ './components/4.v-for.vue')
    },
    {
      path: '/v-on',
      name: 'v-on',
      component: () => import(/** webpackChunkName: "v-on" */ './components/5.v-on.vue')
    },
    {
      path: '/method',
      name: 'method',
      component: () => import(/** webpackChunkName: "method" */ './components/6.method.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import(/** webpackChunkName: "computed" */ './components/7.computed.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import(/** webpackChunkName: "form" */ './components/8.form.vue')
    }

  ]
})
