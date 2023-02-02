<template>
    <nav-bar></nav-bar>
    <div class="main">
      <div class="titre">
          <img class="gif" src="https://media3.giphy.com/media/aDS4z67KKaumbMVanT/giphy.gif?cid=ecf05e47rpwagxqv91ubj618qpb4z9nknzdiinh1vn6z2l2l&rid=giphy.gif&ct=g" alt="">        <h1 class="start" >Bonjour, je vais commencer par me présenter : </h1>
          <p class="pres">Je m'appelle donc Damien et j'ai 20ans. Je suis actuellement étudiant en 2ème année d'IUT Informatique à Montpellier. J'ai pour objectif de devenir un développeur assez polyvalent, on pourrait dire un développeur full stack je pense. Pour cela je dois réussir mes 3 années d'IUT et puis je dois trouver un master pour continuer mes études. Mais avant tout ça je dois trouver un stage pour valider ma 2ème année d'IUT. Je compte réaliser ma 3ème année d'IUT en alternance pour pouvoir utiliser mes compétences plus concrétement que pendant mon apprentissage à l'IUT, bien que l'apprentissage reste fondamental à l'acquisition d'une base solide de programmation.</p>
          <h2>Assez parlé d'école.</h2>
          <img class="img" src="../assets/IMG_9299.jpg" alt="">
          <p class="pres">Là au dessus, et bien c'est moi (pas le serpent, je suis celui qui le tient) ! Je trouvais cela plus parlant d'avoir une image de la personne qui se présente ! Comme je ne savais pas quelle image mettre j'ai opté pour celle la avec mon ami le python.</p>
          <p class="pres">Dans la vie, j'aime bien sortir et faire la fête (comme la plupart des jeunes de mon âge), je suis également féru de cowboy bebop, c'est un anime qui fait passer de très belle morale à chaque épisode ! Je vous conseille vivement de visionner cette oeuvre, j'affectionne également beaucoup les films d'animations du studio Ghibli. Il y a quelques temps j'étais également un grand amateur de tennis, bien que j'ai un peu ralenti la cadence j'aime toujours autant me dépenser en faisant du tennis.</p>
      </div>
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
    }

}
</script>

<style lang="scss">

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
    }
    .img{
      width: 25%;
      border-radius: 10px;
    }
  }
}


</style>