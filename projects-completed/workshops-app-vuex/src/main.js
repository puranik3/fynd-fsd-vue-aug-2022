import '@/init';
import store from '@/store';
import router from '@/router';

import Vue from 'vue';
import WorkshopsApp from '@/App.vue';

// NOTES:
// h stands for "HyperScript" (Script that generates HTML)
// Reference: https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/#:~:text=Hyperscript%20itself%20stands%20for%20%E2%80%9Cscript,as%20being%20short%20for%20createElement%20.

// This does not work as the compiler is NOT part of the build
// components: {
//     WorkshopsApp
// },
// template: `
//     <div id="app">
//         <WorkshopsApp />
//     </div>
// `,
new Vue({
    store,
    router,
    render: h => h( WorkshopsApp )
}).$mount( '#app' );