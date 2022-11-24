import './init';
import '@/services/configureAxios';
import Vue from 'vue'
import store from './store/index';
import App from './App.vue';
import router from './router/index';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Impport Fontawesome CSS (https://fontawesome.com/)
import '@fortawesome/fontawesome-free/css/all.css';

// Vue toast notification CSS
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router: router
  store,
  router
}).$mount('#app')
