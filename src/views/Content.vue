<template>
    <NavBarH class="fixed bg-white shadow-lg w-full z-50" />
    
    <div class="min-h-screen flex flex-col bg-gray-100">
      <main class="flex-grow container mx-auto p-4 mt-20 mb-40">
        <h1 class="text-2xl font-bold text-blue-800 mb-4 text-center">Renovación Carismática Católica - Santa Rosa de Lima</h1>
        <h2 class="text-xl font-bold mb-4 text-center underline text-blue-800">Río Abajo</h2>
        <div>
          <u class="text-blue-800"><h3 class="text-xl font-bold">¿Qué es la Renovación Carismática Católica?</h3></u>
          <p class="text-justify mt-5">
            La Renovación Carismática Católica, ha sido definida como una corriente de gracia, dentro de la Iglesia Católica que integra comunidades, greupos de oración y alabanza, los cuales se caracterizan por la práctica de los carismas como <b>Hablar en lenguas, la intercesión, la oración comunitaria, los retiros espirituales y jornadas de sanación.</b> 
            <br><br>
            El papa Francisco ha dicho que la Renovación Carismática Católica es un <b>“don del Espíritu Santo”</b> para la Iglesia, y que su misión es <b>“renovar la vida de la Iglesia”</b>. La Renovación Carismática Católica es un movimiento que busca vivir la fe de manera más intensa y profunda, a través de la experiencia del amor de Dios y el poder del Espíritu Santo."
          </p>
          <br>
          <u class="text-blue-800"><h3 class="text-xl font-bold">Nuestra Historia</h3></u>
          <p class="text-justify mt-5">
            En la Comunidad Santo Rosa de Lima, nace el 3 de Noviembre de 1996, bajo la inspiración del <b>Espíritu Santo</b>, que usó como instrumentos a los hermanos <b>Felix Durón y Dilcia Elvir</b>. <br>
            Durante estos 29 años, hemos sido testigos de la obra del Espíritu Santo en nuestras vidas y en la vida de nuestra comunidad. Ya que actualmente contamos con 9 grupos de oración, los cuales se reúnen semanalmente en diferentes días y horarios, en los cuales tenemos 2 grupos de varones, 1 grupo de jóvenes, 1 grupo de niños y 5 grupos de mujeres.
          </p>
          <br>
          <u class="text-blue-800"><h3 class="text-xl font-bold">Grupos de Oración</h3></u>
          <p class="text-justify mt-5">
            En la actualidad contamos con 9 grupos de oración, los cuales se reúnen semanalmente en diferentes días y horarios.
          </p> <br><br>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nombre del Grupo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre del Coordinador
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Día de reunión
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Hora de reunión
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Renacer en Cristo
                            </th>
                            <td class="px-6 py-4">
                                Jorge Coello
                            </td>
                            <td class="px-6 py-4">
                                Sábado
                            </td>
                            <td class="px-6 py-4">
                                4:00 PM
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
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
  