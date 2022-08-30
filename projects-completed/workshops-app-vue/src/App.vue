<template>
    <div id="app">
        <AppNavbar />
        <div class="my-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppNavbar from "@/components/Navbar.vue";

    export default {
        name: "WorkshopsApp",
        components: {
            AppNavbar,
        },
    };
</script>

<style scoped>
</style>