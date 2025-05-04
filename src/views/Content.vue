<template>
    <NavBarH class="fixed bg-white shadow-lg w-full z-50" />
    
    <div class="min-h-screen flex flex-col bg-gray-100">
      <main class="flex-grow container mx-auto p-4 mt-20">
        <h1 class="text-3xl font-bold text-blue-800 mb-4 text-center">Renovación Carismática Católica - Santa Rosa de Lima</h1>
        <h2 class="text-xl font-bold mb-4 text-center underline">Río Abajo</h2>
      </main>
    </div>

    
    <FooterPage class="fixed bottom-0 w-full z-50"/>
  </template>
  
  <script>
  import NavBarH from '../components/NavHome.vue';
  import FooterPage from "../components/Footer.vue";
  
  export default {
    name: 'ContentView',
    components: {
      NavBarH,
      FooterPage,
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Intentando iniciar sesión con:', this.email, this.password);
        // Aquí puedes agregar la lógica de autenticación
      },
    },
  };
  </script>
  