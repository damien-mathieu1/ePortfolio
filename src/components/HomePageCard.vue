<template>
    <NavBar></NavBar>
    <div class="encapsulation">
        <div class="main">
            <div class="titre">
                <section class="animation">
                <div class="first"><div>Bonjour, je m'appelle Damien</div></div>
                <div class="second"><div>Bienvenue dans mon Portfolio</div></div>
                <div class="third"><div>Amusez vous bien !</div></div>
            </section></div>
            <img class="gif" src="https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif"/> 

            
            <div class="info">
                <h2>Pourquoi ce site ?</h2>
                <p>Ce portfolio a été réalisé dans le but d'exposer mes réalisations. Ce qui a motivé sa création est donc l'envie de mettre en avant mes projets mais également l'envie d'apprendre de nouvelles technologies tel que le Vue.JS, technologie que j'utilise pour faire ce site.</p>
                <h2>Comment ça fonctionne ?</h2>
                <p>Ce site est très simple d'utilisation, pour la navigation il y a une barre de navigation en haut de la page mais également en pied de page. Dans cette barre de navigation on peut donc retrouver mes réalisations dans l'onglet <router-link to="/projets">Projets</router-link>, on peut également se renseigner sur moi et sur qui je suis dans l'onglet <router-link to="/about">A propos de moi</router-link> et finalement si vous souhaitez prendre contact avec moi, vous pourrez retrouver les informations nécessaires dans l'onglet <router-link to="/contact">Contact</router-link>.</p>

                <h2>Pourquoi Vue.JS ?</h2>
                <p> Je débute dans l'informatique mais je pense que l'<a href="https://www.advency.fr/blog/eco-conception/quest-ce-que-leco-conception-web" target="_blank" rel="noopener noreferrer">éco-conception</a>  des sites web est un sujet très important de nos jours donc je me suis documenté sur les technologies se prétant à l'éco-conception. Je suis donc tombé sur le <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.JS</a> et également le concept de <a href="https://developer.mozilla.org/fr/docs/Glossary/SPA" target="_blank" rel="noopener noreferrer">SPA</a> (Single Page Application). Grâce à ces technologies les sites webs sont entièrement chargé rapidement après une seule requête auprès du serveur. L'avantage que cela nous offre est que le client ne fait pas de nouvelle requête au serveur pour avoir de nouvelle page lorsqu'il clique sur un lien de la barre de navigation. En plus de cela comme le site web est déjà chargé dans le pc du client la navigation est très fluide car il n'y a pas de chargement. Individuellement, mon site n'a pas un grand impact sur la consommation des serveurs car il ne les solicite que très peu. D'un point de vue écologique, si la plupart des sites utilisaient des technologies allant dans ce sens alors l'impact qu'aurait le web sur l'environnement s'en trouverait surement réduit.</p>
            </div>
    </div>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
<FooterCard></FooterCard>
</template>

<script>
//COMPONENTS
import NavBar from "@/components/NavBar.vue";
import FooterCard from '@/components/FooterCard.vue';

export default {
    name: 'HomePage',
    components: {
        NavBar,
        FooterCard,
    },
    data:()=>{
        return {
            scroll : false,
        }
    },

    methods:{
        handleScroll(){
            if(window.scrollY > 150){
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
@import url('../style/upArrow.scss');

.encapsulation{
    display: flex;
    flex-direction: column;
    align-items: center;
    .main{
        display: flex;
        width: 78%;
        flex-direction: column;
        align-items: center;
        .titre{
            margin-top :10%;
            margin-bottom: 3%;
            color:green;
            font-size: 6vh;
            font-weight: bold;
            text-align: center;
            text-shadow: 0 0 3px green;

            /*https://codepen.io/carloscdev/pen/mdBLmwP*/
            .animation {
                height:70px;
                overflow:hidden;
                margin-left: 1rem;
            }

            .animation > div > div {
                padding: 0.25rem 0.75rem;
                height:2.81rem;
                margin-bottom: 2.81rem;
                display:inline-block;
            }

            .animation div:first-child {
                 animation: text-animation 8s infinite;
            }

            @keyframes text-animation {
                0% {margin-top: 0;}
                10% {margin-top: 0;}
                20% {margin-top: -5.62rem;}
                30% {margin-top: -5.62rem;}
                40% {margin-top: -11.24rem;}
                60% {margin-top: -11.24rem;}
                70% {margin-top: -5.62rem;}
                80% {margin-top: -5.62rem;}
                90% {margin-top: 0;}
                100% {margin-top: 0;}
            }
            
        }
        .gif{
            border-radius: 5em;
            margin-bottom: 5%;
        }
        .info{
            width: 65%;
            margin-bottom: 10%;
            h2{
                font-size: 1.8em;
            }
            p{
                font-size: 1.2em;
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