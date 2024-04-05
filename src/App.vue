<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Glossario',
  components: { AppHeader }
};
</script>

<template>
  <AppHeader />
  <main class="container my-4">
    <RouterView />
  </main>
</template>

<style scoped></style>