import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

// lazy loadings
// const Category = () => import('./theme/Category.vue')
// const Login = () => import('./theme/Login.vue')
// const NotFound = () => import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (from, to, savedPosition) => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category
    },
    {
      path: '/',
      redirect: '/category/front-end'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
