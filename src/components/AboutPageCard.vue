<template>
    <nav-bar></nav-bar>
    <div class="main">
      <div class="titre">
          <img class="gif" src="https://media3.giphy.com/media/aDS4z67KKaumbMVanT/giphy.gif?cid=ecf05e47rpwagxqv91ubj618qpb4z9nknzdiinh1vn6z2l2l&rid=giphy.gif&ct=g" alt="">        <h1 class="start" >Bonjour, je vais commencer par me présenter : </h1>
          <p class="pres">Je m'appelle Damien et j'ai 20ans. Je suis actuellement étudiant en 2ème année d'IUT Informatique à Montpellier. J'ai pour objectif de devenir un développeur assez polyvalent, on pourrait dire un développeur <a href="https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_full_stack">full stack</a> je pense. Pour cela je dois réussir mes 3 années d'IUT et puis je dois trouver un master pour continuer mes études. Mais avant tout ça je dois trouver un stage pour valider ma 2ème année d'IUT. Je compte réaliser ma 3ème année d'IUT en alternance pour pouvoir utiliser mes compétences plus concrétement que pendant mon apprentissage à l'IUT, bien que l'apprentissage reste fondamental à l'acquisition d'une base solide de programmation.</p>
          <h1 class="start">Assez parlé d'école.</h1>
          <img class="img" src="@/assets/IMG_9299.jpg" alt="damien MATHIEU">
          <p class="pres">Là au dessus, et bien c'est moi (pas le serpent, je suis celui qui le tient) ! Je trouvais cela plus parlant d'avoir une image de la personne qui se présente ! Comme je ne savais pas quelle image mettre j'ai opté pour celle la avec mon ami le python.</p>
          <p class="pres">Je suis féru de cowboy bebop, c'est un anime qui fait passer de très belle morale à chaque épisode ! Je vous conseille vivement de visionner cette oeuvre, j'affectionne également beaucoup les films d'animations du studio Ghibli. Il y a quelques temps j'étais également un grand amateur de tennis, bien que j'ai un peu ralenti la cadence j'aime toujours autant me dépenser en faisant du tennis.</p>
          <!--<h1 class="start">Mon dernier accomplissement en date</h1>
          <p class="pres">J'ai participé à l'<a href="https://www.nuitdelinfo.com/">édition 2022 de la nuit de l'info</a> avec mon équipe "<a href="https://www.nuitdelinfo.com/inscription/equipes/105">Le Royaume</a>" composée de 6 membres. Durant cette nuit de l'info nous avons ciblé les défis écologiques. Parmis les 3 défis écologiques que nous avions relevé nous avons réussi à en gagner un ! Nous avons donc gagné le défi "<a href="https://www.nuitdelinfo.com/inscription/defis/333">Mets du Green dans ton IT</a>" proposé par le groupe "ARHS Group". Pour ce défi nous devions faire une réalisation la plus écologique possible et pour cela nous avons fait un site en VueJS hébergé dans un conteneur docker dans un raspberry (Cela correspond à ce que j'essaie de faire seul pour mon PortFolio). Cette nuit de l'info m'a permit de mettre un pied dans les technologies en vogue telle que VueJS et docker.</p>
          <img src="@/assets/defiNDL.png" alt="gagnant" class="imgArhs">-->
      </div>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
  <FooterCard></FooterCard>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterCard from '@/components/FooterCard.vue';

export default {
    name: 'AboutPage',
    components :{
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

.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .titre{
    margin-top:5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 5% ;
    .gif{
      height: 20%;
      width: 20%;
      border-radius: 50px;
    }
    .start{
      width: 60%;
      text-align: center;
    }
    .pres{
      width: 60%;
      font-size: 1.2em;
      text-align: justify;
      a{
        color:green;
        font-weight: bold;
      }
    }
    .img{
      width: 25%;
      border-radius: 10px;
    }
    .imgArhs{
        width: 60%;
        border-radius: 10px;
    }
    
    }
}


</style>