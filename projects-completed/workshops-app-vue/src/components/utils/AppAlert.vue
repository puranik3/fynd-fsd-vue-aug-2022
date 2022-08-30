<template>
    <div class="alert" :class="themeClass">
        <div class="font-weight-bold">
            <slot name="title">Alert!</slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import ThemeMixin from '@/components/mixins/ThemeMixin';

    export default {
        name: 'AppAlert',
        mixins: [
            ThemeMixin
        ],
        computed: {
            themeClass() {
                return `alert-${this.theme}`; 
            }
        }
    }
</script>

<style scoped>

</style>