import Vue from 'vue'
import Router from 'vue-router'

import isAuthenticated from './middleware/isAuthenticated'

import store from './store'

Vue.use(Router)

// const isAuthenticated = (to, from, next) => {
//   console.log(store().getters['authentication/isAuthenticated'])
//   if(false) next()
//   else next({ name: 'index' })
// }


const Index = () => import(`~/pages/index.vue`).then(m => m.default || m)
const Search = () => import(`~/pages/search.vue`).then(m => m.default || m)
const Login = () => import(`~/pages/login.vue`).then(m => m.default || m)
const Orientation = () => import(`~/pages/orientation/index.vue`).then(m => m.default || m)
const Course = () => import(`~/pages/course/_id/index.vue`).then(m => m.default || m)
const Project = () => import(`~/pages/project/_id/index.vue`).then(m => m.default || m)
const User = () => import(`~/pages/user/_username.vue`).then(m => m.default || m)

// import Index from './pages/index.vue'
// import Orientation from './pages/orientation/index.vue'

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'course',
    path: '/course/:id',
    component: Course,
  },
  {
    name: 'project',
    path: '/project/:id',
    component: Project,
  },
  {
    name: 'search',
    path: '/search',
    component: Search,
  },
  {
    name: 'user',
    path: '/user/:username',
    component: User,
  },
  {
    name: 'orientation',
    path: '/orientation',
    component: Orientation,
    // beforeEnter: isAuthenticated
    // meta: {
    //   middleware: isAuthenticated
    // }
  },
]

const router = new Router({
  base: '/',
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware['index']

  if(!subsequentMiddleware) return context.next

  return (...parameters) => {
    context.next(...parameters)

    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({...context, next: nextMiddleware})
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to,
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({...context, next: nextMiddleware})
  }
  return next()
})

import * as Cookies from 'js-cookie'

router.beforeEach((to, from, next) => {
  // if(to.path != '/orientation') {
    
  //   next({name: 'orientation'})
  // } else {
  //   next()
  // }
  console.log(store().state.authentication.isAuthenticated)
  // console.log(Cookies.get('yourkey'))
  next()
})

export function createRouter() {
  return router
}