import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    }
];

export default createRouter({
    // mode: "history",
    history: createWebHistory('/vite-starter/#/'), // "/rootPath/#/""
    routes
});
