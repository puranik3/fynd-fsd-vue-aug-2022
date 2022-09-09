<template>
  <div class="container">
    <b-jumbotron header="Workshops App" lead="Tech workshops close by your city">
      <p>
        Welcome to Workshops App. You can find details of technical workshops happening nearby, here. Start <router-link :to="{ name: 'workshops' }">here</router-link>.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'AppHome'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
