<template>
    <NavBarMobile></NavBarMobile>
    <div id="mainMobile">
      <div id="titreMobile">
          <img id="gifMobile" src="https://media3.giphy.com/media/aDS4z67KKaumbMVanT/giphy.gif?cid=ecf05e47rpwagxqv91ubj618qpb4z9nknzdiinh1vn6z2l2l&rid=giphy.gif&ct=g" alt="">        
          <h1 class="startMobile" >Bonjour, je vais commencer par me présenter : </h1>
          <p class="presMobile">Je m'appelle Damien et j'ai 21ans. Je suis actuellement étudiant en 3ème année d'IUT Informatique à Montpellier et je suis en alternance en tant que développeur web.  J'ai pour objectif de devenir un développeur assez polyvalent, on pourrait dire un développeur <a href="https://fr.wikipedia.org/wiki/D%C3%A9veloppeur_full_stack" target="_blank" rel="noopener noreferrer">full stack</a> je pense. Pour cela je dois réussir mes 3 années d'IUT et puis je dois trouver un master pour continuer mes études. </p>
          <h1 class="startMobile">Assez parlé d'école.</h1>
          <img class="imgMobile" src="@/assets/IMG_9299.jpg" alt="moi">
          <p class="presMobile">Là au dessus, et bien c'est moi (pas le serpent, je suis celui qui le tient) ! Je trouvais cela plus parlant d'avoir une image de la personne qui se présente ! Comme je ne savais pas quelle image mettre j'ai opté pour celle là avec mon ami le python.</p>
          <p class="presMobile">Je suis féru de cowboy bebop, c'est un anime qui fait passer de très belle morale à chaque épisode ! Je vous conseille vivement de visionner cette oeuvre, j'affectionne également beaucoup les films d'animations du studio Ghibli. Il y a quelques temps j'étais également un grand amateur de tennis, bien que j'ai un peu ralenti la cadence j'aime toujours autant me dépenser en faisant du tennis.</p>
          <!--<h1 class="startMobile">Mon dernier accomplissement en date</h1>
          <p class="presMobile">J'ai participé à l'<a href="https://www.nuitdelinfo.com/">édition 2022 de la nuit de l'info</a> avec mon équipe "<a href="https://www.nuitdelinfo.com/inscription/equipes/105">Le Royaume</a>" composée de 6 membres. Durant cette nuit de l'info nous avons ciblé les défis écologiques. Parmis les 3 défis écologiques que nous avions relevé nous avons réussi à en gagner un ! Nous avons donc gagné le défi "<a href="https://www.nuitdelinfo.com/inscription/defis/333">Mets du Green dans ton IT</a>" proposé par le groupe "ARHS Group". Pour ce défi nous devions faire une réalisation la plus écologique possible et pour cela nous avons fait un site en VueJS hébergé dans un conteneur docker dans un raspberry (Cela correspond à ce que j'essaie de faire seul pour mon PortFolio). Cette nuit de l'info m'a permit de mettre un pied dans les technologies en vogue telle que VueJS et docker.</p>
          <img src="@/assets/defiNDL.png" alt="gagnant" class="imgArhsMobile">-->

      </div>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
    <FooterCardMobile></FooterCardMobile>
</template>

<script>
import NavBarMobile from '@/components/componentsMobile/NavBarMobile.vue';
import FooterCardMobile from '@/components/componentsMobile/FooterCardMobile.vue';

export default {
    name: 'AboutPage',
    components :{
        NavBarMobile,
        FooterCardMobile,
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

#mainMobile{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #titreMobile{
    margin-top:5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96%;
    margin-bottom: 5% ;
    #gifMobile{
      height: 60%;
      width: 60%;
      border-radius: 50px;
    }
    .startMobile{
      width: 100%;
      font-size: 1.4em;
      text-align: center;
    }
    .presMobile{
      width: 100%;
      font-size: 1em;
      text-align: justify;
      a{
        color:green;
        font-weight: bold;
      }
    }
    .imgMobile{
      width: 70%;
      border-radius: 10px;
      margin-bottom : 1%;
    }
    .imgArhsMobile{
      width: 100%;
      border-radius: 10px;
      margin-bottom : 1%;
    }
  }
}


</style>