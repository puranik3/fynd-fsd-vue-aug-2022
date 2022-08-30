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
                    <li class="nav-item" v-if="role === 'admin'">
                        <router-link class="nav-link" active-class="active" to="/workshops/add" exact>
                            Add a workshop
                        </router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <span class="nav-link">
                            <!-- <span class="fa-stack fa-2x" style="transform: scale( 0.5 ); padding: 0;"> -->
                                <!-- <i class="fas fa-circle fa-stack-2x"></i> -->
                                <router-link to="/profile" exact>
                                    <i
                                        class="fas fa-user profileImage-placeholder mr-2"
                                        title="Change profile picture"
                                        v-if="!profileImageFetched"
                                    >
                                    </i>
                                    <img
                                        :src="profileImage"
                                        class="profileImage"
                                        @load="setProfileImage"
                                        v-show="profileImageFetched"
                                    />
                                </router-link>
                            <!-- </span> -->
                            Hi {{email}}
                        </span>
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
    // import { mapState, mapGetters } from 'vuex';
    import config from '@/config';

    export default {
        name: 'AppNavbar',
        data() {
            return {
                apiBaseUrl: config.apiBaseUrl,
                profileImage: '',
                profileImageFetched: false
            }
        },
        computed: {
            // ...mapState( [ 'email' ] ),
            // ...mapGetters( [ 'isAuthenticated' ] )
            email() {
                return this.$store.state.auth.email;
            },
            role() {
                return this.$store.state.auth.role;
            },
            isAuthenticated() {
                // no module name in case of using getters!
                // return this.$store.getters.auth.isAuthenticated;
                return this.$store.getters.isAuthenticated;
            }
        },
        methods: {
            logout() {
                this.$store.dispatch( 'logout' )
                    .then( () => this.$router.push( { name: 'login' } ) );
            },
            setProfileImage() {
                this.profileImageFetched = true;
            }
        },
        created() {
            this.profileImage = `${this.apiBaseUrl}/users/me/profilephoto/${this.email}`;
        }
    };
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}

.profileImage-placeholder {
    border: 1px solid #444;
    background-color: #444;
    color: white;
    padding: 5px 6px 5px 7px;
    border-radius: 50%;
    cursor: pointer;
}

.profileImage {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
</style>
