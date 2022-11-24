import { login } from '../../services/auth';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_ROLE = 'role';

const auth = {
    state: {
        token: localStorage.getItem( KEY_TOKEN ) || '',
        email: localStorage.getItem( KEY_EMAIL ) || '',
        role: localStorage.getItem( KEY_ROLE ) || ''
    },
    getters: {
        isAuthenticated( state ) {
            return state.token !== ''
        },
        isAdmin( state ) {
            return state.role === 'admin';
        }
    },
    mutations: {
        setToken( state, token ) {
            state.token = token;
        },
        setEmail( state, email ) {
            state.email = email;
        },
        setRole( state, role ) {
            state.role = role;
        }
    },
    actions: {
        async login( { commit }, credentials ) {
            const data = await login( credentials );
            
            const { authToken, email, role } = data;

            localStorage.setItem( KEY_TOKEN, authToken );
            localStorage.setItem( KEY_EMAIL, email );
            localStorage.setItem( KEY_ROLE, role );

            commit( 'setToken', authToken );
            commit( 'setEmail', email );
            commit( 'setRole', role );

            return email;
        }
    }
};

export default auth;