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
        <p class="titre">Lien pour le projet : </p>
        <a class="lien" :href=projet.lien>Lien du repository</a>
    </div>

    <FooterCard></FooterCard>
</template>

<script>
//IMPORTS
import { useRoute } from 'vue-router'
import projets from "@/projets.js"

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

      const lien = projet.lien;
      
      return {
        projet,
        lien
      }
      
    }
}
</script>

<style lang='scss'>
.top{
    margin-top:3%;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    width: 100%;
    .img{
        margin-left : 3%;
        height: 20em;
        background-size: cover;
        background-position: center;
    }
    .titre{
        display: flex;
        flex-direction: column;
        padding-left: 3%;
        .major{
            font-size: 4em;
            font-weight: bold;
            color:green;
        }
        .minor{
            font-size: 1.3em;
        }
    }
}
.desc{
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    p{
        text-align : justify;
        font-size: 1.4em;
    }
    .titre{
        font-size: 1.6em;
        font-weight: bold;
        
    }
    .lien{
        display: flex;  
        align-items: center;
        justify-content: space-around;
        overflow: hidden;
        width: 15%;
        border : black solid 1px;
        margin: 5px;
    }
    .lien:hover{
        background-color: rgb(229, 255, 229);
        color : black;

    }

}
</style>