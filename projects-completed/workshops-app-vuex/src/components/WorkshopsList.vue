<template>
    <div class="container">
        <div class="row">
            <div class="col-12 clearfix">
                <h1>
                    List of Workshops
                    <div class="float-right">
                        <button class="btn btn-sm btn-primary" @click="toggleDescription">
                            {{ showDescription ? 'Hide details' : 'Show details' }}
                        </button>
                    </div>
                </h1>
                <hr />
            </div>
        </div>
        <div class="row" v-if="status === 'LOADING'">
            <div class="col-12">
                <app-alert theme="info">
                    <template v-slot:title>Working...</template>
                    Workshops are being loaded. Hang on!
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
        <div class="row" v-else>
            <div
                class="col-12 col-lg-4 d-flex my-3"
                v-for="workshop in workshops"
                :key="workshop.id"
            >
                <workshop-card
                    :workshop="workshop"
                    :showDescription="showDescription"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import WorkshopCard from './WorkshopCard';
    import { fetchWorkshops } from '@/services/workshops';

    export default {
        name: 'WorkshopsList',
        components: {
            WorkshopCard
        },
        data() {
            return {
                showDescription: false,
                status: 'LOADING',
                workshops: [],
                error: null,
            };
        },
        methods: {
            toggleDescription() {
                this.showDescription = !this.showDescription;
            }
        },
        created() {
            fetchWorkshops()
                .then(workshops => {
                    this.workshops = workshops;
                    this.status = 'LOADED';
                })
                .catch(error => {
                    this.error = error;
                    this.status = 'ERROR';
                });
        },
    };
</script>

<style scoped>
.card {
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 0px 4px 0px goldenrod;
  background-color: #fcfcfc;
}

.card-img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  margin: 10px 0;
}
</style>