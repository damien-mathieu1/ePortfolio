<template>
  <nav-bar></nav-bar>
  <div class="main">
    <div class="titre">
      <h1 class="start">Ai-je réalisé les objectifs fixés par le programme national ? Si ce n'est pas le cas, quels sont les AC et les composantes essentielles sur lesquelles je dois travailler ?</h1>
      <p class="pres">Je pense que j'ai en grande partie réalisé les objectfis fixé par le programme national en particulier l'apprentissage critique qui concerne l'organisation et le partage d'une veille informationnelle (AC36.01). Cependant je pense que je n'ai pas réussi à bien maitriser les apprentissages critiques de la composante de qualité algorithmique (R5.Real.04).</p>
      <h1 class="start">Qu'ai-je mis en pratique de ma formation en entreprise, en TD ou pendant la SAÉ ?</h1>
      <p class="pres">Lors des projets à l'école et pendant mes périodes en entreprise, je pense que ce que j'ai le plus mis en pratique est la communication et le management d'une équipe informatique. En effet, les capacités du développeur sont importantes mais savoir comment réagir en équipe et réussir à organiser le travail reste tout de même primordial selon moi.</p>
      <h1 class="start">Ai-je rencontré des difficultés particulières, des situations problématiques ? Si oui, lesquelles ? Comment les ai-je gérées ?</h1>
      <p class="pres">En entreprise, je me suis souvent retrouvé bloqué sur le développement par des problèmes d'intéropérabilité des technologies que j'utilise. Je ne me suis jamais dégonflé et j'ai toujours persévéré pour faire fonctionner ce que je voulais mais il m'arrivait de demander l'avis de mes collègues lorsque j'étais réellement face à un os et la plupart du temps, discuter du problème a permit de le résoudre.</p>
      <h1 class="start">Qu'est-ce qui m'a plu particulièrement ?</h1>
      <p class="pres">Cette année ce qui m'a particulièrement plu a été mon alternance, l'ambiance dans mon entreprise et peu prise de tête et on s'y sent bien et je sens que je m'améliore graduellement chaque jour en entreprise donc ça me motive de plus en plus.</p>
      <h1 class="start">Qu'est-ce que j'ai moins aimé, qu'est-ce qui m'a paru difficile ?</h1>
      <p class="pres">Ce qui m'a paru réellement difficile a été de faire suivre les projets que l'on avait pour l'école pendant les périodes d'entreprise. En rentrant du travail j'ai souvent été obligé de me replonger dans l'ordinateur pour avancer sur les projets de l'école avec mes camarades.</p>
      <h1 class="start">Quel est mon projet post-BUT ?</h1>
      <p class="pres">Après l'IUT, j'aimerai beaucoup continuer les études et partir en école d'ingénieur dans une filière de développement oppérationnel, polytech DO serait pour moi idéal. Si je n'arrive pas à être sélectionner dans une école d'ingénieur j'essayerai d'être prit en master informatique à la face. J'aimerai réussir à garder mon alternance actuelle et la faire continuer pendant mes années d'école/de master.</p>
      <h1 class="start">Dans quelle mesure cette formation a-t-elle fait évoluer mon projet ?</h1>
      <p class="pres">Notre formation de virtualisation que l'on a eu durant ce 5ème semestre m'ont décidé à vouloir faire du développement oppérationnel par la suite. Donc je pense que la DACS m'a permit d'avoir une bonne perspective de ce que je voulais faire.</p>
      <!--<h1 class="start">Mon dernier accomplissement en date</h1>
          <p class="pres">J'ai participé à l'<a href="https://www.nuitdelinfo.com/">édition 2022 de la nuit de l'info</a> avec mon équipe "<a href="https://www.nuitdelinfo.com/inscription/equipes/105">Le Royaume</a>" composée de 6 membres. Durant cette nuit de l'info nous avons ciblé les défis écologiques. Parmis les 3 défis écologiques que nous avions relevé nous avons réussi à en gagner un ! Nous avons donc gagné le défi "<a href="https://www.nuitdelinfo.com/inscription/defis/333">Mets du Green dans ton IT</a>" proposé par le groupe "ARHS Group". Pour ce défi nous devions faire une réalisation la plus écologique possible et pour cela nous avons fait un site en VueJS hébergé dans un conteneur docker dans un raspberry (Cela correspond à ce que j'essaie de faire seul pour mon PortFolio). Cette nuit de l'info m'a permit de mettre un pied dans les technologies en vogue telle que VueJS et docker.</p>
          <img src="@/assets/defiNDL.png" alt="gagnant" class="imgArhs">-->
    </div>
  </div>
  <div :class="{ 'visible': scroll, 'unvisible': !scroll }" @click="scrollUp">
    <i class="fa fa-arrow-up up"></i>
  </div>
  <FooterCard></FooterCard>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterCard from '@/components/FooterCard.vue';

export default {
  name: 'FAQPage',
  components: {
    NavBar,
    FooterCard,
  },
  data: () => {
    return {
      scroll: false,
    }
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 150) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },
    scrollUp() {
      window.scrollTo(0, 0);
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

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titre {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 5%;

    .gif {
      height: 20%;
      width: 20%;
      border-radius: 50px;
    }

    .start {
      width: 60%;
      text-align: center;
    }

    .pres {
      width: 60%;
      font-size: 1.2em;
      text-align: justify;

      a {
        color: green;
        font-weight: bold;
      }
    }

    .img {
      width: 25%;
      border-radius: 10px;
    }

    .imgArhs {
      width: 60%;
      border-radius: 10px;
    }

  }
}</style>