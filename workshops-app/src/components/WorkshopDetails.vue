<template>
    <div>
        <!-- improve UX by providing loading message, error message etc. -->
        <div class="row" v-if="workshop">
            <div class="col-12 col-lg-4">
            <b-img
                :src="workshop.imageUrl"
                :alt="workshop.name"
                fluid
            >
            </b-img>
            </div>
            <div class="col-12 col-lg-8">
            <h1>{{workshop.name}}</h1>
            <hr />
            <div v-html="workshop.description"></div>
            </div>
        </div>
        <!-- pass the workshop id as a prop to SessionsList -->
        <!-- <SessionsList
            :id="id"
            :sessions="workshop.sessions"
            :vote="vote" /> -->

        <!-- Setting up 2 links to shift between the 2 child routes -->
        <div class="row">
            <router-link class="mr-3" :to="sessionsListLinkTo">
                List of Sessions
            </router-link>
            <router-link :to="{
                name: 'add-session',
                params: {
                    id: id
                }
            }">
                Add a new session
            </router-link>
        </div>
        <!-- Let the router handle which component should come in here -->
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import { getWorkshopById } from "@/services/workshops";
import { vote } from '@/services/sessions';
// import SessionsList from "./SessionsList.vue";

export default {
    name: "WorkshopDetails",
    // components: {
    //     SessionsList
    // },
    data() {
        return {
            id: null,
            loading: false,
            workshop: {
                sessions: []
            },
            error: null,
        };
    },
    computed: {
        sessionsListLinkTo() {
            return {
                name: 'sessions-list',
                params: {
                    sessions: this.workshop.sessions,
                    id: this.id,
                    vote: this.vote
                }
            };
        },
    },
    methods: {
        async vote( session, voteType, event, idx ) {
            // console.log( session, voteType, event );

            try {
                const updatedSession = await vote( voteType, session.id );
            
                // eslint-disable-next-line vue/no-mutating-props
                this.workshop.sessions.splice( idx, 1, updatedSession );
                Vue.$toast.open({
                    message: `Your vote for <strong>${updatedSession.name}</strong> was registered`,
                    duration: 5000
                });
            } catch( error ) {
                Vue.$toast.open({
                    type: 'error',
                    message: error.message,
                    duration: 5000
                });
            }
        }
    },
    async mounted() {
        // console.log( this.$router ); // function for redirecting programatically to another page etc.
        // console.log( this.$route ); // has details of the current route
        this.id = this.$route.params.id; // '2'
        this.loading = true;
        try {
            this.workshop = await getWorkshopById(this.id);

            this.$router.push({
                name: 'sessions-list',
                params: {
                    sessions: this.workshop.sessions,
                    id: this.workshop.id,
                    vote: this.vote
                },
                query: { // hack for initial loaded params to be different to avoid NavigationDuplicated error
                    errorBust: Math.random().toString().substr( 2 )
                }
            });
        }
        catch (error) {
            this.error = error;
        }
        finally {
            this.loading = false;
        }
    }
};
</script>

<style>
</style>