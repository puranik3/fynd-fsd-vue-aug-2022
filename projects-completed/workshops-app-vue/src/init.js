import Vue from 'vue';
import Router from 'vue-router';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';

import '@/services/configureAxios';

import {
    AppAlert,
    AppSpinner,
    AppVotingWidget
} from '@/components/utils';

import dateFilter from '@/filters/date';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false;

Vue.use( Vuelidate );
Vue.use( VueToast );
Vue.use( Router );

// Base components (shared across the app)
Vue.component( 'AppAlert', AppAlert );
Vue.component( 'AppSpinner', AppSpinner );
Vue.component( 'AppVotingWidget', AppVotingWidget );

Vue.filter( 'date', dateFilter );