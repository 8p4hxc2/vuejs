// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 33
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    SET: (state, payload) => state.count = payload
  },
  actions: {
    setCount: (context, payload) => context.commit("SET", payload),
    increment: (context) => context.commit("increment")
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
