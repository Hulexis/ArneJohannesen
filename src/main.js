import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Footer from './footer/Footer.vue'

import Header from './header/Header.vue'
import Clock from './clock/Clock.vue'
import GridItem from './home/Grid-item.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('app-header', Header);
Vue.component('app-clock', Clock);
Vue.component('app-footer', Footer);
Vue.component('app-grid-item', GridItem);

new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  render: h => h(App)
})

