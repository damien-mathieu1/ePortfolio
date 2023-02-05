<template>
    <AboutPageCard v-if="!mobileView"></AboutPageCard>
    <AboutPageCardMobile v-if="mobileView"></AboutPageCardMobile>
</template>

<script>
import AboutPageCard from "@/components/AboutPageCard.vue";
import AboutPageCardMobile from "@/components/componentsMobile/AboutPageCardMobile.vue";

export default {
    name: 'AboutPage',
    components :{
        AboutPageCard,
        AboutPageCardMobile
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
</style>