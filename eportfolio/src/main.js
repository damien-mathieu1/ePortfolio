import { createApp } from 'vue'
import App from './App.vue'
import HomePage from '@/page/HomePage.vue'
import { createRouter, createWebHashHistory}from 'vue-router';


const routes =[ 
    { path : '/', component: HomePage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);
VueApp.use(router);
VueApp.mount('#app');