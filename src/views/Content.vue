<template>
    <NavBarH class="fixed bg-white shadow-lg w-full z-50" />
    
    <div class="min-h-screen flex flex-col bg-gray-100">
      <main class="flex-grow container mx-auto p-4 mt-20 mb-40">
        <h1 class="text-2xl font-bold text-blue-800 mb-4 text-center">Renovación Carismática Católica - Santa Rosa de Lima</h1>
        <h2 class="text-xl font-bold mb-4 text-center underline">Río Abajo</h2>
        <div>
          <u><h3 class="text-xl font-bold">¿Qué es la Renovación Carismática Católica?</h3></u>
          <p class="text-justify mt-5">
            La Renovación Carismática Católica, ha sido definida como una corriente de gracia, dentro de la Iglesia Católica que integra comunidades, greupos de oración y alabanza, los cuales se caracterizan por la práctica de los carismas como <b>Hablar en lenguas, la intercesión, la oración comunitaria, los retiros espirituales y jornadas de sanación.</b> 
            <br><br>
            El papa Francisco ha dicho que la Renovación Carismática Católica es un <b>“don del Espíritu Santo”</b> para la Iglesia, y que su misión es <b>“renovar la vida de la Iglesia”</b>. La Renovación Carismática Católica es un movimiento que busca vivir la fe de manera más intensa y profunda, a través de la experiencia del amor de Dios y el poder del Espíritu Santo."
          </p>
          <br>
          <u><h3 class="text-xl font-bold">Nuestra Historia</h3></u>
          <p></p>
        </div>
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
  