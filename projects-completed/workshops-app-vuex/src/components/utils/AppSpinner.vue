<template>
    <div class="d-flex justify-content-center">
        <div class="spinner-border" :class="themeClass" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
    import ThemeMixin from '@/components/mixins/ThemeMixin';

    export default {
        name: 'AppSpinner',
        mixins: [
            ThemeMixin
        ],
        computed: {
            themeClass() {
                return `text-${this.theme}`; 
            }
        }
    }
</script>

<style scoped>
.spinner-border {
    width: 3rem;
    height: 3rem;
};
</style>