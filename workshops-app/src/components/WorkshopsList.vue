<template>
    <main>
        <h1>List of workshops</h1>
        <hr />
        <div class="d-flex justify-content-center mb-3" v-if="loading">
            <b-spinner label="Loading..." class="spinner-lg"></b-spinner>
        </div>
        <b-alert variant="danger" v-if="error" show>
            {{error.message}}
        </b-alert>
        <div class="row" v-if="workshops.length !== 0">
            <div
                class="col-12 col-lg-4 d-flex"
                v-for="workshop in workshops"
                :key="workshop.id"
            >
                <b-card
                    :title="workshop.name"
                    :img-src="workshop.imageUrl"
                    :img-alt="workshop.name"
                    img-top
                    tag="article"
                    class="w-100 p-3 my-3 workshop"
                >
                    <b-card-text>
                        <div>{{workshop.startDate | date( format )}} - {{workshop.endDate | date( format )}}</div>
                        <div>{{workshop.time}}</div>
                    </b-card-text>

                    <!-- <b-button :to="'/workshops/' + workshop.id" variant="primary">Know more</b-button> -->
                    <b-button :to="{ name: 'workshop-details', params: { id: workshop.id } }" variant="primary">Know more</b-button>
                </b-card>
            </div>
        </div>
    </main>
</template>

<script>
// @ -> with respect to src folder
import { getWorkshops } from "@/services/workshops.js";

export default {
    name: "WorkshopsList",
    data() {
        return {
            format: 'indian',
            loading: false,
            workshops: [],
            error: null
        };
    },
    async mounted() {
        this.loading = true;

        try {
            this.workshops = await getWorkshops();
        } catch( error ) {
            this.error = error;
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style scoped>
.workshop img {
    display: block;
    height: 120px;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
}
</style>