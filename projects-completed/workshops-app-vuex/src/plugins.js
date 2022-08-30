import Vue from 'vue';
import Vuex from 'vuex'
import Router from 'vue-router';

import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-default.css';

Vue.use( Vuex );
Vue.use( Router );

Vue.use( Vuelidate );
Vue.use( VueToast );