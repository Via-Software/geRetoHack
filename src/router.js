import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Header from './components/Header'
import Rutas from './views/Rutas.vue'
import Maps from './views/testmaps.vue'
import Trazar from './views/Trazar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        default: Home,
        'header': Header
      } 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/rutas',
      name: 'rutas',
      components:{
        default: Rutas,
      }
    },
    {
      path: '/maps',
      name: 'maps',
      components:{
        default: Maps,
      }
    },
    {
      path: '/trazar',
      name: 'trazar',
      components: {
        default: Trazar,
      }
    }
  ]
})
