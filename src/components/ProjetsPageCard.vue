<template>
    <NavBar/>
    <div class="projets">
          <ProjetCard v-for="(projet,index) in data_projet" :info_projet="projet" :key="index"/>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
    <FooterCard></FooterCard>
</template>

<script>
//IMPORT
import projets from "@/projets.js"
  import {
    onMounted,
    ref
  } from "vue"

//COMPONENTS 
import ProjetCard from "@/components/ProjetCard.vue";
import NavBar from "@/components/NavBar.vue";
import FooterCard from '@/components/FooterCard.vue';

export default {
    name: "HomePage",
    components: {
        ProjetCard,
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
            console.log("scroll");
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
    setup(){
        class Projet{
            constructor(name,image,type,description){
                this.name = name;
                this.image = image;
                this.type = type;
                this.description = description;
            }
        }
        let data_projet = ref([]);
        const makeDataProjet = () => {
        for (const proj of projets) {
          const newProj = new Projet(proj.name, proj.image, proj.type, proj.description);
          data_projet.value.push(newProj);
        }
      }
      
      onMounted(makeDataProjet);
      return {
        data_projet
      }
    }
}
</script>

<style lang="scss">
@import url('../style/normalize.css');
@import url('../style/upArrow.scss');
.projets{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 10%;
    margin-top: 5%;
}
</style>