<template>
    <NavBarMobile/>
    <div @click="$router.back()" class="back">
        <i class="fa fa-arrow-left arrowBack"></i>  
    </div>
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
        <a class="lienMobile" :href=projet.lien target="_blank" rel="noopener noreferrer">Lien du repository</a>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
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

<style lang='scss'>
@import url('@/style/upArrow.scss');
.back{
    margin-left: 3%;
    margin-top: 5%;
    font-size: 2em;
    color: black;
    .arrowBack{
        width: 0.8em;
        height: 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding:10px;
        border : black solid 2px;
        border-radius: 50%;
    }
    
}

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