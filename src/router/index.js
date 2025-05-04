import { createRouter, createWebHistory } from 'vue-router';
import ContentView from '../views/Content.vue';
import HomeView from '../views/Home.vue';

 
const routes = [
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/content', name: 'Login', component: ContentView },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, 
});

export default router;
