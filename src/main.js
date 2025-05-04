import { createApp } from 'vue';
import App from './App.vue'; // Verifica que App.vue exista
import router from './router'; // Verifica que router/index.js exista
import '../src/assets/tailwind.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
