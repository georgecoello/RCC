<template>
    <nav class="bg-white-100 text-green shadow-lg text-blue-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/home" class="block w-20 h-10">
              <img
                class="object-contain w-full h-full"
                src="../../public/logojubileo.png"
                alt="Logo"
              />
            </router-link>
          </div>
  
  
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-4">
            <router-link to="/content" class="font-bold px-3 py-2 rounded hover:border hover:border-blue-700 hover:bg-transparent"> Información </router-link>
            
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="focus:outline-none">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white-600 text-green px-2 space-y-2"
      >
        <router-link to="/content" class="text-center block px-3 py-2 font-bold hover:border-blue-700">Información</router-link>
        
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    data() {
      return {
        isMenuOpen: false, // Controla la visibilidad del menú móvil
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados si es necesario */
  </style>