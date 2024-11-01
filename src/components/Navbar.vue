<template>
  <nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
      <li><router-link to="/" class="text-white">Inicio</router-link></li>
      <li>
        <router-link to="/all-curiosidades" class="text-white"
          >Curiosidades</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
