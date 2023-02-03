<template>
    <NavBarMobile/>
    <div class="topMobile">    
        <img class="imgMobile" :src="projet.image" alt="">
    </div>
    <div class="mainTit">
        <div id="titreProj">
            <p id="majorMobile">{{ projet.name }}</p>
            <p id="minorMobile">{{ projet.type }}</p>

        </div>
    </div>  
    <div class="descMobile">
        <p class="titreMobile">Description du projet : </p>
        <p>{{ projet.description }}</p>
        <p class="titreMobile">Techno(s) utilisée(s) : </p>
        <p>{{ projet.techno }}</p>
        <p class="titreMobile">Lien pour le projet : </p>
        <a class="lienMobile" :href=projet.lien>Lien du repository</a>
    </div>

    <FooterCardMobile></FooterCardMobile>
</template>

<script>
//IMPORTS
import { useRoute } from 'vue-router'
import projets from "@/projets.js"

//COMPONENTS
import NavBarMobile from "@/components/componentsMobile/NavBarMobile.vue";
import FooterCardMobile from './FooterCardMobile.vue';
export default {
    name : 'InfoProjet',
    components:{
        NavBarMobile,
        FooterCardMobile
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
.topMobile{
    margin-top:3%;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .imgMobile{
        margin-left : 3%;
        height: 17em;
        background-size: cover;
        background-position: center;
    }
    
}
.mainTit{
    display: flex;
    flex-direction: column;
    align-items: center;
    #titreProj{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 3%;
        #majorMobile{
            font-size: 2em;
            font-weight: bold;
            color:green;
            text-align: center;
        }
        #minorMobile{
            font-size: 1.3em;
            font-weight: bold;
        }
    }
}
.descMobile{
    padding-left: 1%;
    padding-right: 1%;
    padding-bottom: 5%;
    p{
        text-align : justify;
        font-size: 1em;
    }
    .titreMobile{
        font-size: 1.3em;
        font-weight: bold;
        
    }
    .lienMobile{
        display: flex;  
        align-items: center;
        justify-content: space-around;
        overflow: hidden;
        width: auto;
        border : black solid 1px;
        margin: 5px;
    }
    .lienMobile:hover{
        background-color: rgb(229, 255, 229);
        color : black;

    }

}
</style>