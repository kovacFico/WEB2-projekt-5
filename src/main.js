import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App.vue';


const routes = [            // 7. routing
    { 
        path: '/', 
        component: () => import("./views/HomeView.vue") 
    },
    { 
        path: '/add', 
        component: () => import("./views/AddRecipe.vue") 
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import("./views/NotFound.vue") 
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');