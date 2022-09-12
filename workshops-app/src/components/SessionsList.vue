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
                            <AppVotingWidget
                                :votes="session.upvoteCount"
                                @upvote="castVote( session, 'upvote', $event, idx )"
                                @downvote="castVote( session, 'downvote', $event, idx )"
                            />
                        </div>
                        <div class="col-11">
                            <div class="lead">{{session.name}}</div>
                            <div class="h6">by {{session.speaker}}</div>
                            <div>
                                <span
                                    class="badge"
                                    :class="getBadgeClass( session.level )">{{session.level}}</span>
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
export default {
    name: 'SessionsList',
    props: {
        id: {
            type: [ Number, String ]
        },
        sessions: Array,
        vote: Function
    },
    methods: {
        getBadgeClass( level ) {
            return {
                'badge-primary': level === 'Basic',
                'badge-info': level === 'Intermediate',
                'badge-warning': level === 'Advanced'
            };
        },
        castVote( session, voteType, event, idx ) {
            this.vote( session, voteType, event, idx );
        }
    }
}
</script>

<style>

</style>