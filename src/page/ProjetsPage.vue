<template>
    <ProjetPageCard v-if="!mobileView"></ProjetPageCard>
    <ProjetsPageCardMobile v-if="mobileView"></ProjetsPageCardMobile>
</template>

<script>
//COMPONENTS 
import ProjetPageCard from "@/components/ProjetsPageCard.vue"
import ProjetsPageCardMobile from "@/components/componentsMobile/ProjetsPageCardMobile.vue"

export default {
    title : "Tous les projets",
    name: "ProjetsPage",
    components: {
        ProjetPageCard,
        ProjetsPageCardMobile
    },
    data:()=>{
        return {
            mobileView : false,
        }
    },
    
    methods:{
        handleView(){
            this.mobileView = window.innerWidth <= 815;
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleView);
        this.mobileView = window.innerWidth <= 990;
    },
    unmounted() {
        window.removeEventListener("resize", this.handleView);
    },
}
</script>

<style lang="scss">
@import url('../style/normalize.css');
</style>