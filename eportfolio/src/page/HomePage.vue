<template>
    <NavBar></NavBar>
    <div class="encapsulation">
        <div class="main">
        <h1 class="titre">BIENVENUE DANS MON PORTFOLIO DIGITAL</h1>
        <p class="info">Ce portfolio a été réalisé dans le but d'exposer mes projets réalisés par le passé.<br>Ce qui a motivé la création de ce portfolio est donc l'envie de mettre en avant mes projets mais également l'envie d'apprendre de nouvelle technologies tel que le Vue.JS, technologie que j'utilise pour faire ce site.<br>Pourquoi Vue.JS me diriez vous ?<br>Je débute dans l'informatique mais je pense que l'éco-conception des solutions digitales est un sujet très important donc je me suis documenté sur les technologies se prétant à l'éco-conception. Je suis donc tombé sur Vue.JS et également le concept de SPA (Single Page Application). Grâce à ces technologies les sites webs sont entièrement chargé rapidement après une seule requête auprès du serveur. L'avantage que cela nous offre est que le client ne fait pas de nouvelle requête au serveur pour avoir de nouvelle page lorsqu'il clique sur un lien de la barre de navigation. Individuellement, mon site n'a pas un grand impact sur la consommation des serveurs car il ne solicite que très peu. D'un point de vue écologique, si la plupart des sites utilisent des technologies allant dans ce sens alors l'impact qu'aurait le web sur l'environnement s'en trouverait réduit.</p>
    </div>
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
}
</script>

<style lang="scss">
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
            margin :10%;
            color:green;
            font-size: 6vh;
        }
    }
}
</style>