<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <router-view class="flex-grow" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Estilos globales */
</style>
