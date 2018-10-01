/* jshint esversion:6 */
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false;
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


axios.defaults.baseURL = 'http://192.168.0.146:8100';
axios.defaults.headers.common['Authorization'] = 'fasfdsa';
axios.defaults.headers.get['Accepts'] = 'application/json';
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyBs4Icy6WhjZ73-pqjPLKsq0p8I06AsCII',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
      },});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
