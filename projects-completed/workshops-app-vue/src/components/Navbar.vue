<template>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container px-2">
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/" exact>
                        Home
                    </router-link>
                </li>
            </ul>
            <template v-if="isAuthenticated">
                <ul class="nav navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/workshops" exact>
                            List of workshops
                        </router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav" v-if="isAuthenticated">
                    <li class="nav-item">
                        <span class="nav-link">Hi {{email}}</span>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link cursor-pointer" @click="logout()">Logout</span>
                    </li>
                </ul>
            </template>
            <ul class="nav navbar-nav" v-else>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/login">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { isAuthenticated$, email$, logout } from '../services/auth';

    export default {
        name: 'AppNavbar',
        data() {
            return {
                isAuthenticated: false,
                email: ''
            };
        },
        methods: {
            logout() {
                logout();
                this.$router.push( { name: 'login' } );
            }
        },
        created() {
            isAuthenticated$.subscribe(
                isAuthenticatedUpdated => this.isAuthenticated = isAuthenticatedUpdated
            );
            email$.subscribe(
                emailUpdated => this.email = emailUpdated
            );
        }
    };
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
