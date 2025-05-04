<template>
    <NavBar />
    <div class="min-h-screen flex flex-col bg-gray-100">
      <!-- Contenido Principal (Ocupa todo el espacio disponible) -->
      <main class="flex-grow container mx-auto p-4 ">
        <h1 class="text-3xl font-bold text-blue-800 mb-4 text-center">Bienvenidos a la RCC Santa Rosa de Lima</h1>
        <img src="logorcc.png" alt="Logo de la comunidad" class="mx-auto w-1/4 m-0" >
        <p class="text-lg text-gray-700 mb-4">¡Estamos encantados de tenerte aquí! En nuestra comunidad, nos esforzamos por brindar un ambiente acogedor y enriquecedor para todos.</p>
        <p class="text-lg text-gray-700 mb-4">Aquí encontrarás información sobre nuestros servicios, actividades y eventos. ¡Esperamos que disfrutes de tu visita!</p>
        <div class="flex justify-center">
          <router-link
            to="/content"
            class=" inline-block mx-auto mb-24 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center">
            Información General
          </router-link>
        </div>
      </main>
  
    </div> 
  </template>
  
  <script>
  import NavBar from '../components/Nav.vue';
  export default {
    name: 'HomePage',
    components: {
      NavBar,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados si es necesario */
  </style>