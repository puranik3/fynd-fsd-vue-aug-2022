<template>
    <main>
        <h1>List of workshops</h1>
        <hr/>
        <ol>
            <li v-for="workshop in workshops" :key="workshop.id">
                {{workshop.name}}
            </li>
        </ol>
    </main>
</template>

<script>
// @ -> with respect to src folder
import { getWorkshops } from '@/services/workshops.js';

export default {
    name: 'WorkshopsList',
    data() {
        return {
            workshops: []
        }
    },
    async mounted() {
        this.workshops = await getWorkshops();
    }
}
</script>

<style scoped>
/* h1 {
    color: crimson;
} */
</style>