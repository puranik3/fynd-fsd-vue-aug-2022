import axios from 'axios';
import store from '@/store';

axios.interceptors.request.use(
    request => {
        const token = store.state.auth.token;

        if( token ) {
            request.headers['Authorization'] = `Bearer ${token}`;
        }

        return request;
    },
    error => Promise.reject( error )
);