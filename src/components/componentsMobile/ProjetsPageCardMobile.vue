<template>
    <NavBarMobile/>
    <div class="projets">
          <ProjetCardMobile v-for="(projet,index) in data_projet" :info_projet="projet" :key="index"/>
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
    }
}
</script>

<style lang="scss">
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