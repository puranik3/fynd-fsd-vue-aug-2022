<template>
  <div id="app">
    <AppMenu />
    <div class="my-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue';

export default {
  name: 'App',
  components: {
    AppMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1,
h2 {
  text-align: center;
}
</style>
