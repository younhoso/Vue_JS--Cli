import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',  //url 주소를 불필요한것은 지우고, 깔끔한 url 제공해준다.
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'intro',
      component: () => import(/* webpackChunkName: "Intro" */ './components/Intro.vue')
    },
    {
      path: '/day/:date',
      name: 'day',
      component: () => import(/* webpackChunkName: "Day" */ './components/Day.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import(/* webpackChunkName: "Calendar" */ './components/Calendar.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "Setting" */ './components/Setting.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "About" */ './components/About.vue')
    }

  ]
})
