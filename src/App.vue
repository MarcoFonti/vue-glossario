<script>
import { RouterView } from 'vue-router';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';

export default {
  name: 'Glossario',
  components: { AppHeader, AppLoader },
  data: () => ({
    store
  }),
};
</script>

<template>
  <AppHeader />
  <main class="container my-2">
    <AppLoader v-if="store.isLoading" />
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: "Lora", serif;
}
</style>