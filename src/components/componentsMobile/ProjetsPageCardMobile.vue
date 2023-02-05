<template>
    <NavBarMobile/>
    <div class="projets">
          <ProjetCardMobile v-for="(projet,index) in data_projet" :info_projet="projet" :key="index"/>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
    <FooterCardMobile></FooterCardMobile>
</template>

<script>
//IMPORT
import projets from "@/projets.js"
  import {
    onMounted,
    ref
  } from "vue"

//COMPONENTS 
import ProjetCardMobile from "@/components/componentsMobile/ProjetCardMobile.vue";
import NavBarMobile from "@/components/componentsMobile/NavBarMobile.vue";
import FooterCardMobile from "@/components/componentsMobile/FooterCardMobile.vue";

export default {
    name: "HomePage",
    components: {
        ProjetCardMobile,
        NavBarMobile,
        FooterCardMobile,
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
@import url("@/style/normalize.css");

.projets{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 10%;
    margin-top: 5%;
}
</style>