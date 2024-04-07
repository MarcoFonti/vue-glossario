<script>
import { RouterView } from 'vue-router';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import AppJumbotron from './components/AppJumbotron.vue';

export default {
  name: 'Glossario',
  components: { AppHeader, AppLoader, AppJumbotron },
  data: () => ({
    store
  })
};
</script>

<template>
  <AppHeader />
  <AppJumbotron/>
  <main class="container my-4">
    <AppLoader v-if="store.isLoading" />
    <RouterView />
  </main>
</template>

<style scoped></style>