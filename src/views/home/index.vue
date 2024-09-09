<template>
    <homeNav />
    <homeHeader v-if="!route.meta.show" />
    <router-view></router-view>
</template>

<script setup>
import homeNav from './components/homeNav.vue';
import homeHeader from './components/homeHeader.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>


<style scoped lang="scss"></style>