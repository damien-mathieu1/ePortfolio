import { createApp } from 'vue'
import App from './App.vue'
import ProjetsPage from '@/page/ProjetsPage.vue'
import AboutPage from '@/page/AboutPage.vue'
import HomePage from '@/page/HomePage.vue'
import ContactPage from '@/page/ContactPage.vue'
import FAQ from '@/page/FAQPage.vue'
import InfoProjet from '@/page/InfoProjet.vue'
import { createRouter, createWebHashHistory}from 'vue-router';
import titleMixin from './mixins/titleMixin';




const routes =[ 
    { path : '/', component: HomePage},
    { path : '/projets', component: ProjetsPage },
    { path : '/about', component: AboutPage },
    { path : '/home', component: HomePage },
    { path : '/contact', component: ContactPage },
    { path : '/projets/:projetName', name:'projet', component: InfoProjet },
    { path : '/faq', component: FAQ },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App);
VueApp.mixin(titleMixin);
VueApp.use(router);
VueApp.mount('#app');