import '@/plugins';

import Vue from 'vue';

import '@/services/configureAxios';

import {
    AppAlert,
    AppSpinner,
    AppVotingWidget
} from '@/components/utils';

import dateFilter from '@/filters/date';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

// Base components (shared across the app)
Vue.component( 'AppAlert', AppAlert );
Vue.component( 'AppSpinner', AppSpinner );
Vue.component( 'AppVotingWidget', AppVotingWidget );

Vue.filter( 'date', dateFilter );