<template>
    <NavBarMobile></NavBarMobile>
    <div class="encapsulation">
        <div id="mainMobile">
            <h1 id="titreMobile">BIENVENUE DANS MON PORTFOLIO DIGITAL</h1>
            <img id="gifMobile" src="https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif"/> 

            
            <div id="infoMobile">
                <h2>Pourquoi ce site ?</h2>
                <p>Ce portfolio a été réalisé dans le but d'exposer mes réalisations. Ce qui a motivé la création de ce portfolio est donc l'envie de mettre en avant mes projets mais également l'envie d'apprendre de nouvelles technologies tel que le Vue.JS, technologie que j'utilise pour faire ce site.</p>
                <h2>Comment ça fonctionne ?</h2>
                <p>Ce site est très simple d'utilisation, pour la navigation il y a une barre de navigation en haut de la page mais également en pied de page. Dans cette barre de navigation on peut donc retrouver mes réalisation dans l'onglet <router-link to="/projets">Projets</router-link>, on peut également se renseigner sur moi et sur qui je suis dans l'onglet <router-link to="/about">A propos de moi</router-link> et finalement si vous souhaitez prendre contact avec moi, vous pourrez retrouver les informations nécessaires dans l'onglet <router-link to="/contact">Contact</router-link>.</p>

                <h2>Pourquoi Vue.JS ?</h2>
                <p> Je débute dans l'informatique mais je pense que l'<a href="https://www.advency.fr/blog/eco-conception/quest-ce-que-leco-conception-web" target="_blank" rel="noopener noreferrer">éco-conception</a>  des sites web est un sujet très important de nos jours donc je me suis documenté sur les technologies se prétant à l'éco-conception. Je suis donc tombé sur le <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.JS</a> et également le concept de <a href="https://developer.mozilla.org/fr/docs/Glossary/SPA" target="_blank" rel="noopener noreferrer">SPA</a> (Single Page Application). Grâce à ces technologies les sites webs sont entièrement chargé rapidement après une seule requête auprès du serveur. L'avantage que cela nous offre est que le client ne fait pas de nouvelle requête au serveur pour avoir de nouvelle page lorsqu'il clique sur un lien de la barre de navigation. En plus de cela comme le site web est déjà chargé dans le pc du client la navigation est très fluide car il n'y a pas de chargement. Individuellement, mon site n'a pas un grand impact sur la consommation des serveurs car il ne les solicite que très peu. D'un point de vue écologique, si la plupart des sites utilisaient des technologies allant dans ce sens alors l'impact qu'aurait le web sur l'environnement s'en trouverait surement réduit.</p>
            </div>
    </div>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
<FooterCardMobile></FooterCardMobile>
</template>

<script>
//COMPONENTS
import NavBarMobile from "./NavBarMobile.vue";
import FooterCardMobile from "./FooterCardMobile.vue"

export default {
    name: 'HomePage',
    components: {
        FooterCardMobile,
        NavBarMobile
    },
    data:()=>{
        return {
            scroll : false,
        }
    },

    methods:{
        handleScroll(){
            if(window.scrollY > 50){
                this.scroll = true;
            }else{
                this.scroll = false;
            }
        },
        scrollUp(){
            window.scrollTo(0,0);
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>

<style lang="scss">
@import url('@/style/upArrow.scss');

.encapsulation{
    display: flex;
    flex-direction: column;
    align-items: center;
    #mainMobile{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        #titreMobile{
            margin-top :10%;
            margin-bottom: 3%;
            color:green;
            font-size: 2.3em;
            text-align: center;
        }
        #gifMobile{
            width: 60%;
            height: 50%;
            border-radius: 5em;
            margin-bottom: 5%;
        }
        #infoMobile{
            width: 95%;
            margin-bottom: 10%;
            h2{
                font-size: 1.5em;
            }
            p{
                font-size: 1em;
                text-align : justify;

            }
            a{
                color:green;
                font-weight: 550;
            }
            a:hover{
                color:darkgreen;
            }
        }
    }
}
</style>