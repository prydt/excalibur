import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Teams from '@/components/Teams'
import Players from '@/components/Players'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/players',
      name: 'players',
      component: Players
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
