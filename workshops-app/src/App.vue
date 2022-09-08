<template>
  <div id="app">
    <AppHome />
    <WorkshopsList />
  </div>
</template>

<script>
import AppHome from './components/AppHome.vue'
import WorkshopsList from './components/WorkshopsList.vue';

export default {
  name: 'App',
  components: {
    AppHome,
    WorkshopsList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
