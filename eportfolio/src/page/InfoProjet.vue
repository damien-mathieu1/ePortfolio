<template>
    <NavBar/>
    <div class="top">    
        <img class="img" :src="projet.image" alt="">
        <div class="titre">
            <p class="major">{{ projet.name }}</p>
            <p class="minor">{{ projet.type }}</p>
        </div>  
    </div>
    <div class="desc">
        <p class="titre">Description du projet : </p>
        <p>{{ projet.description }}</p>
        <p class="titre">Techno(s) utilisée(s) : </p>
        <p>{{ projet.techno }}</p>
        <p class="titre">Lien pour le projet</p>
        <a href="{{ projet.lien }}">Pour voir le code</a>
    </div>

    <FooterCard></FooterCard>
</template>

<script>
//IMPORTS
import { useRoute } from 'vue-router'
import projets from '../projets.js'

//COMPONENTS
import NavBar from '@/components/NavBar.vue';
import FooterCard from '@/components/FooterCard.vue';
export default {
    name : 'InfoProjet',
    components:{
        NavBar,
        FooterCard
    },
    setup(){
      const route = useRoute();
      const projet = projets.find((projetName)=>{
        if(projetName.name == route.params.projetName){
            return projetName;
          }
      });
      
      return {
        projet,
      }
      
    }
}
</script>

<style lang='scss'>
.top{
    padding : 3%;
    display: flex;
    align-items: center;
    width: 100%;
    .img{
        height: 30vh;
        background-size: cover;
        background-position: center;
    }
    .titre{
        display: flex;
        flex-direction: column;
        padding-left: 100px;
        .major{
            font-size: 2em;
            font-weight: bold;
        }
        .minor{
            font-size: 1em;
        }
    }
}
.desc{
    padding-left: 10%;
    padding-right: 10%;
    p{
        text-justify: auto;
        font-size: 1.2em;
    }
    .titre{
        font-size: 1.3em;
        font-weight: bold;
    }
}
</style>