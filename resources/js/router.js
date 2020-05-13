import Vue from 'vue'
import VueRouter from 'vue-router'

// use library
Vue.use(VueRouter)

// lazy load
const load = (path) => () => import(`./views/${path}.vue`)

// routes list
const routes = [
    {
        path: '/',
        name: 'home',
        component: load('Home')
    }
]

// router instance
const router = new VueRouter({ mode: 'history', routes })

// export
export { router, routes }
export default router