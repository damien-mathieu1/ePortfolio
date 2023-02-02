import { createApp } from 'vue'
import App from './App.vue'
import ProjetsPage from '@/page/ProjetsPage.vue'
import AboutPage from '@/page/AboutPage.vue'
import HomePage from '@/page/HomePage.vue'
import ContactPage from '@/page/ContactPage.vue'
import InfoProjet from '@/page/InfoProjet.vue'
import { createRouter, createWebHashHistory}from 'vue-router';



const routes =[ 
    { path : '/projets', component: ProjetsPage },
    { path : '/about', component: AboutPage },
    { path : '/home', component: HomePage },
    { path : '/contact', component: ContactPage },
    { path : '/projets/:projetName', name:'projet', component: InfoProjet, props:{ projet: ':projet'} },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);
VueApp.use(router);
VueApp.mount('#app');