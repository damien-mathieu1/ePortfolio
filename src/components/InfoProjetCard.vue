<template>
    <NavBar/>

    <div @click="$router.back()" class="back">
        <i class="fa fa-arrow-left arrowBack"></i>  
    </div>
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
        <a class="lien" :href=projet.lien target="_blank" rel="noopener noreferrer">Lien du repository</a>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
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
    data:()=>{
        return {
            scroll : false,
        }
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

<style lang='scss'>
@import url('../style/upArrow.scss');

.back{
    margin-left: 3%;
    margin-top: 3%;
    font-size: 2em;
    color: black;
    
    .arrowBack{
        width: 1em;
        height: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding:10px;
        border : black solid 2px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            border : green solid 2px;
            color : green;
            transform: scale(1.1);
        }
    }
    
}
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
            font-weight: bold;
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