<script>
import { RouterView } from 'vue-router';
import { store } from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppLoader from './components/AppLoader.vue';
import AppJumbotron from './components/AppJumbotron.vue';

export default {
  name: 'Glossario',
  components: { AppHeader, AppLoader, AppFooter, AppJumbotron },
  data: () => ({
    store
  }),
};
</script>

<template>
  <AppHeader />
  <AppJumbotron />
  <main class="container my-2">
    <AppLoader v-if="store.isLoading" />
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
body {
  font-family: "Lora", serif;
}
</style>