<template>
    <div class="container">
        <div class="row" v-if="status === 'LOADING'">
            <div class="col-12">
                <app-alert theme="info">
                    <template v-slot:title>Working...</template>
                    Workshop details are being loaded. Hang on!
                </app-alert>
                <app-spinner theme="dark" />
            </div>
        </div>
        <div class="row" v-else-if="status === 'ERROR'">
            <div class="col-12">
                <app-alert theme="danger">
                    <template v-slot:title>Error!</template>
                    {{ error.message }}
                </app-alert>
            </div>
        </div>
        <template v-else>
            <div class="row">
                <div class="col-12">
                    <h1>{{workshop.name}}</h1>
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <img class="img-fluid" :src="workshop.imageUrl" :alt="workshop.name" />
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-3">
                            <p>
                                <small>
                                    {{workshop.startDate | date}}
                                    -
                                    {{workshop.endDate | date}}
                                </small>
                            </p>
                            <p>
                                <small class="text-muted">
                                    {{workshop.time}}
                                </small>
                            </p>
                        </div>
                        <div class="col-3">
                            <p> 
                                <i :class="`fa ${workshop.modes.online ? 'fa-check' : 'fa-times'}`"></i>
                                &nbsp;
                                <small>Online</small>
                            </p>
                            <p>
                                <i :class="`fa ${workshop.modes.inPerson ? 'fa-check' : 'fa-times'}`"></i>
                                &nbsp;
                                <small>In person</small>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12" v-html="workshop.description"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <router-link class="mr-3" :to="sessionsListLinkTo">
                    List of Sessions
                </router-link>
                <router-link :to="{
                    name: 'add-session',
                    params: {
                        id: workshop.id
                    }
                }" v-if="role === 'admin'">
                    Add a new session
                </router-link>
            </div>
            <div class="row my-3">
                <router-view></router-view>
            </div>
        </template>
    </div>
</template>

<script>
    import { fetchWorkshopById } from '@/services/workshops';

    export default {
        name: 'WorkshopDetails',
        props: {
            id: {
                type: [ Number, String ],
                default: 1
            }
        },
        data() {
            return {
                status: 'LOADING',
                workshop: {
                    sessions: []
                },
                error: null
            }
        },
        computed: {
            sessionsListLinkTo() {
                return {
                    name: 'sessions-list',
                    params: {
                        sessions: this.workshop.sessions
                    }
                };
            },
            role() {
                return this.$store.state.auth.role;
            },
        },
        created() {
            fetchWorkshopById( this.id )
                .then(workshop => {
                    this.workshop = workshop;
                    this.status = 'LOADED';

                    this.$router.push({
                        name: 'sessions-list',
                        params: {
                            sessions: this.workshop.sessions
                        },
                        query: { // hack for initial loaded params to be different to avoid NavigationDuplicated error
                            errorBust: Math.random().toString().substr( 2 )
                        }
                    });
                })
                .catch(error => {
                    this.error = error;
                    this.status = 'ERROR';
                });
        },
    };
</script>

<style scoped>

</style>