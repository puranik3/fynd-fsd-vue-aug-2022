<template>
    <main>
        <h1>List of workshops</h1>
        <hr />
        <div class="row">
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

                    <b-button :to="{ name: 'workshop-details' }" variant="primary">Know more</b-button>
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
            workshops: [],
        };
    },
    async mounted() {
        this.workshops = await getWorkshops();
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