import Vue from 'vue'
import Router from 'vue-router';
import { 
  BootstrapVue,
  IconsPlugin,
} from 'bootstrap-vue';
import VueToast from 'vue-toast-notification';
import Vuelidate from 'vuelidate';

import AppVotingWidget from './components/utils/AppVotingWidget.vue';

import App from './App.vue';

import router from './router/index';
import dateFilter from './filters/date';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Impport Fontawesome CSS (https://fontawesome.com/)
import '@fortawesome/fontawesome-free/css/all.css';

// Vue toast notification CSS
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(Router);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast);
Vue.use(Vuelidate);

Vue.component( 'AppVotingWidget', AppVotingWidget );

Vue.filter( 'date', dateFilter );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router: router
  router
}).$mount('#app')
