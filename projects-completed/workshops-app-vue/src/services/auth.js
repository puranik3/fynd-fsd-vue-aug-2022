import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import config from '@/config';
import { successHandler, errorHandler } from './helper';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';

// credentials = { email: string, password: string }
const login = ( credentials ) => {
    return axios.post(
                `${config.apiBaseUrl}/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then( successHandler )
                .then( data => {
                    const { authToken, email } = data

                    localStorage.setItem( KEY_TOKEN, authToken );
                    localStorage.setItem( KEY_EMAIL, JSON.stringify( email ) );

                    dispatchAuthEvents();

                    return email;
                })
                .catch( errorHandler );
};

const logout = () => {
    localStorage.removeItem( KEY_TOKEN );
    localStorage.removeItem( KEY_EMAIL );

    dispatchAuthEvents();
};

const isAuthenticated = () => {
    return !!localStorage.getItem( KEY_TOKEN );
};

const getEmail = () => {
    return JSON.parse( localStorage.getItem( KEY_EMAIL ) );
};

const getToken = () => {
    return localStorage.getItem( KEY_TOKEN );
};

const isAuthenticatedSubject = new BehaviorSubject( isAuthenticated() );
const emailSubject = new BehaviorSubject( getEmail() );

const isAuthenticated$ = isAuthenticatedSubject.asObservable();
const email$ = emailSubject.asObservable();

const dispatchAuthEvents = () => {
    isAuthenticatedSubject.next( isAuthenticated() );
    emailSubject.next( getEmail() );
};

export {
    login,
    logout,
    isAuthenticated,
    getToken,
    getEmail,
    isAuthenticated$,
    email$
};