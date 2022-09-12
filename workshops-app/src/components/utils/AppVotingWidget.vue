<template>
    <div class="d-flex flex-column align-items-center">
        <i class="fa fa-caret-up" @click="upvote"></i>
        <span>{{votes}}</span>
        <i class="fa fa-caret-down" @click="downvote"></i>
    </div>
</template>

<script>
    export default {
        name: 'AppVotingWidget',
        props: {
            votes: {
                type: Number,
                default: 0,
                validator( value ) {
                    return Number.isSafeInteger( value );
                }
            }
        },
        methods: {
            upvote() {
                this.$emit( 'upvote', 1 );
            },
            downvote() {
                this.$emit( 'downvote', 1 );
            }
        }
    }
</script>


<style scoped>
.fa {
    font-size: 2em;
    cursor: pointer;
    color: #aaa;
}

.fa:hover {
    color: black;
}
</style>