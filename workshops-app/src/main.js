import Vue from 'vue'
import Router from 'vue-router';
import { 
  BootstrapVue,
  IconsPlugin,
} from 'bootstrap-vue';

import App from './App.vue';

import router from './router/index';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router: router
  router
}).$mount('#app')
