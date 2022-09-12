<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <div class="container">
                <b-navbar-brand :to="{ name: 'home' }">
                    WorkshopsApp
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <!-- if we use to prop, b-nav-item will internally a vue-router component called router-link which takes in a "to" prop -->
                        <b-nav-item :to="{ name: 'workshops' }">
                            List of workshops
                        </b-nav-item>
                        <b-nav-item :to="{ name: 'workshop-details' }">
                            Add a workshop
                        </b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/logout">Logout</b-nav-item>
                        <b-nav-item to="/login">Login</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "AppMenu",
};
</script>

<style>
</style>