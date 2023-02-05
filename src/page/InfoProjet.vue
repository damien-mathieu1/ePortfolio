<template>
    <InfoProjetCard v-if="!mobileView"></InfoProjetCard>
    <InfoProjetCardMobile v-if="mobileView"></InfoProjetCardMobile>
</template>

<script>
//COMPONENTS 
import InfoProjetCard from "@/components/InfoProjetCard.vue"
import InfoProjetCardMobile from "@/components/componentsMobile/InfoProjetCardMobile.vue";

export default {
    name: "HomePage",
    components: {
        InfoProjetCard,
        InfoProjetCardMobile
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

<style lang='scss'>
</style>