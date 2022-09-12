import Router from 'vue-router';
import AppHome from '../components/AppHome';
import WorkshopsList from '../components/WorkshopsList';
import WorkshopDetails from '../components/WorkshopDetails';
import SessionsList from '../components/SessionsList';
import AddSession from '../components/AddSession';
import AppLogin from '../components/AppLogin';

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: AppLogin
        },
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'workshops',
            path: '/workshops',
            component: WorkshopsList
        },
        {
            name: 'workshop-details',
            path: '/workshops/:id',
            component: WorkshopDetails,
            children: [
                {
                    name: 'sessions-list',
                    path: '', // just the base parent route, and nothing extra!
                    component: SessionsList
                },
                {
                    name: 'add-session',
                    path: 'add',
                    component: AddSession
                }
            ]
        }
    ]
});

export default router;