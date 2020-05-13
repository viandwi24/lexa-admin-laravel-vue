import './bootstrap'
import Vue from 'vue'
import router from './router'
import App from './layouts/App'

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
})