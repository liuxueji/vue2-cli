import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router