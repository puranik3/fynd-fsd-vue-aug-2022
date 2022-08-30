import Router from 'vue-router';
import AppLogin from '@/components/Login';
import AppHome from '@/components/Home';
import WorkshopsList from '@/components/WorkshopsList';
import WorkshopDetails from '@/components/WorkshopDetails';
import SessionsList from '@/components/SessionsList';
import AddSession from '@/components/AddSession';
import PageNotFound from '@/components/PageNotFound';

import { isAuthenticated } from '@/services/auth';

/**
 * Add a route property ```meta: { authorize: [ <roles> ] }``` with <roles> authorized to access the route
 * Let authorize be empty to allow access to all authenticated users
 */
const meta = {
    authorize: []
};

const router = new Router(
    {
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
                name: 'workshops-list',
                path: '/workshops',
                component: WorkshopsList,
                meta
            },
            {
                name: 'workshop-details',
                path: '/workshops/:id',
                props: true,
                component: WorkshopDetails,
                meta,
                children: [
                    {
                        name: 'sessions-list',
                        path: '',
                        props: true,
                        component: SessionsList,
                        meta
                    },
                    {
                        name: 'add-session',
                        path: 'add',
                        props: true,
                        component: AddSession,
                        meta
                    }
                ]
            },
            {
                name: 'page-not-found',
                path: '*',
                component: PageNotFound
            }
        ]
    }
);

// Global auth guard
router.beforeEach(( to, from, next ) => {
    // Right now, role-based authorization is NOT supported
    if( to.meta.authorize && !isAuthenticated() ) {
        next({
            name: 'login'
        });
    } else {
        next();
    }
});

export default router;