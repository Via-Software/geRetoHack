/* jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/css/bootstrap.min.css';

Vue.config.productionTip = false;
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.146:8100';
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
