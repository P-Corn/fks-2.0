import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrentRound from '../views/CurrentRound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CurrentRound',
    component: CurrentRound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/previous-rounds',
    name: 'PreviousRounds',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviousRounds.vue')
  },
  {
    path: '/submit-score',
    name: 'SubmitScore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SubmitScore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
