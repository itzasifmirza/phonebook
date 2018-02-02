
require('./bootstrap');

//window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from "vue-route"
Vue.use(VueRouter)


Vue.component('example-component', require('./components/ExampleComponent.vue'));
let Myheader = require('./components/Myheader');
let Myfooter = require('./components/Myfooter');
let Home = require('./components/Home');
let About = require('./components/About');


const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})



const app = new Vue({
    el: '#app',
    router,
    components:{Myheader, Myfooter, Home, About}
});
