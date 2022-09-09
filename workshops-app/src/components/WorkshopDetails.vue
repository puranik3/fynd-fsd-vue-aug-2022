<template>
    <div class="row">
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

        <!-- EXERCISE: display the session here using a SessionsList component -->
        <!-- pass the workshop id as a prop to SessionsList -->
        <!-- your code... -->
    </div>
</template>

<script>
import { getWorkshopById } from "@/services/workshops";

export default {
    name: "WorkshopDetails",
    data() {
        return {
            id: null,
            loading: false,
            workshop: null,
            error: null,
        };
    },
    async mounted() {
        // console.log( this.$router ); // function for redirecting programatically to another page etc.
        // console.log( this.$route ); // has details of the current route
        this.id = this.$route.params.id;

        this.loading = true;

        try {
            this.workshop = await getWorkshopById(this.id);
        } catch (error) {
            this.error = error;
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style>
</style>