import Router from 'vue-router';
import AppLogin from '@/components/Login';
import AppHome from '@/components/Home';
import Profile from '@/components/Profile';
import WorkshopsList from '@/components/WorkshopsList';
import AddWorkshop from '@/components/AddWorkshop';
import WorkshopDetails from '@/components/WorkshopDetails';
import SessionsList from '@/components/SessionsList';
import AddSession from '@/components/AddSession';
import PageNotFound from '@/components/PageNotFound';

import store from '@/store';

/**
 * Add a route property ```meta: { authorize: [ <roles> ] }``` with <roles> authorized to access the route
 * Let authorize be empty to allow access to all authenticated users
 */
const meta = {
    authorize: [ 'admin', 'general' ]
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
                name: 'profile',
                path: '/profile',
                component: Profile,
                meta
            },
            {
                name: 'workshops-list',
                path: '/workshops',
                component: WorkshopsList,
                meta: {
                    authorize: [ 'admin', 'general' ]
                }
            },
            {
                name: 'workshops-list',
                path: '/workshops/add',
                component: AddWorkshop,
                meta: {
                    authorize: [ 'admin' ]
                }
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
                        meta: {
                            authorize: [ 'admin' ]
                        }
                    }
                ]
            },
            {
                name: 'page-not-found',
                path: '*',
                component: PageNotFound
            },
            // alternatively redirect to home
            // { path: '*', redirect: '/' }
        ]
    }
);

// Global auth guard
router.beforeEach(( to, from, next ) => {
    const authorize = to.meta.authorize;

    // Right now, role-based authorization is NOT supported
    if( authorize && !store.getters.isAuthenticated ) {
        return next({
            name: 'login'
        });
    } else {
        if( authorize && !authorize.includes( store.state.auth.role ) ) {
            return next({
                path: '/'
            });
        }
    }

    next();
});

export default router;