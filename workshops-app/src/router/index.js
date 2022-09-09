import Router from 'vue-router';
import AppHome from '../components/AppHome';
import WorkshopsList from '../components/WorkshopsList';

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'workshops',
            path: '/workshops',
            component: WorkshopsList
        }
    ]
});

export default router;