import axios from 'axios';
import { getToken } from './auth';

// @todo Logic can be bettered to prevent hard-coding authenticated requests
axios.interceptors.request.use(
    request => {
        if( request.url.includes( 'workshops' ) || request.url.includes( 'sessions' ) ) {
            request.headers['Authorization'] = `Bearer ${getToken()}`;
        }

        return request
    },
    error => Promise.reject( error )
);