<template>
    <router-link class="card text-reset text-decoration-none w-100" :to="{ name: 'sessions-list', params: { id: workshop.id } }">
        <div class="card-body">
            <div class="card-img-container">
                <img
                    class="card-img-top w-50 d-block mx-auto"
                    :src="workshop.imageUrl"
                    :alt="workshop.name"
                />
            </div>
            <h4 class="card-title">{{ workshop.name }}</h4>
            <div class="card-text">
                <div>
                    {{ workshop.startDate | date }} -
                    {{ workshop.endDate | date }}
                </div>
                <div>
                    <span>{{ workshop.time }}</span>
                </div>
                <div
                    class="my-3"
                    v-if="showDescription"
                    v-html="workshop.description"
                >
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'WorkshopCard',
        props: {
            workshop: Object,
            showDescription: Boolean
        },
        methods: {
            toggleDescriptions() {
                this.showDescriptions = !this.showDescriptions;
            }
        }
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