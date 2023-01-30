<template>
    <div class="projets">
        <ProjetCard v-for="(projet,index) in data_projet" :info_projet="projet" :key="index"/>
    </div>
</template>

<script>
//IMPORT
import projets from "../projets.js"
  import {
    onMounted,
    ref
  } from "vue"

//COMPONENTS 
import ProjetCard from "@/components/ProjetCard.vue";
export default {
    name: "HomePage",
    components: {
        ProjetCard
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
.projets{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
}
</style>