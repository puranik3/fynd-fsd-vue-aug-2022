<template>
    <div class="row">
        <div class="col-12">
            <h3>
                Sessions in this workshop
            </h3>
            <hr />
        </div>
        <div class="col-12">
            <ul class="list-group">
                <li class="list-group-item" v-for="( session, idx ) in sessions" :key="session.id">
                    <div class="row">
                        <div class="col-1">
                            <app-voting-widget
                                :votes="session.upvoteCount"
                                @upvote="( num ) => vote( 'upvote', session, idx, num )"
                                @downvote="( num ) => vote( 'downvote', session, idx, num )"
                            />
                        </div>
                        <div class="col-11">
                            <div class="lead">{{session.name}}</div>
                            <div class="h6">by {{session.speaker}}</div>
                            <div>
                                <span :class="`badge ${getBadgeClass( session.level )}`">{{session.level}}</span>
                            </div>
                            <div class="my-2">
                                {{session.duration}} hours
                            </div>
                            <p>
                                {{session.abstract}}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { vote } from '@/services/sessions';
    import config from '@/config';

    export default {
        name: 'SessionsList',
        props: {
            sessions: Array
        },
        methods: {
            getBadgeClass( level ) {
                return {
                    'badge-primary': level === 'Basic',
                    'badge-info': level === 'Intermediate',
                    'badge-warning': level === 'Advanced'
                };
            },
            vote( voteType, session, idx ) {
                vote( voteType, session.id )
                    .then(updatedSession => {
                        this.sessions.splice( idx, 1, updatedSession );
                        Vue.$toast.open({
                            message: `Your vote for <strong>${updatedSession.name}</strong> was registered`, duration: config.toastDuration
                        });
                    })
                    .catch(error => {
                        Vue.$toast.open({
                            message: error.message,
                            duration: config.toastDuration,
                            type: 'error'
                        });
                    });
            }
        }
    }
</script>

<style scoped>

</style>