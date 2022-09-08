import Router from 'vue-router';
import AppHome from '../components/AppHome';
import WorkshopsList from '../components/WorkshopsList';

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AppHome
        },
        {
            path: '/workshops',
            component: WorkshopsList
        }
    ]
});

export default router;