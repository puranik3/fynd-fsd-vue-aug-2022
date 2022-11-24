import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import { 
  BootstrapVue,
  IconsPlugin,
} from 'bootstrap-vue';
import VueToast from 'vue-toast-notification';
import Vuelidate from 'vuelidate';

import AppVotingWidget from './components/utils/AppVotingWidget.vue';
import dateFilter from './filters/date';

Vue.use(Vuex);
Vue.use(Router);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast);
Vue.use(Vuelidate);

Vue.component( 'AppVotingWidget', AppVotingWidget );

Vue.filter( 'date', dateFilter );

