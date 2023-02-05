<template>
    <HomePageCardMobile v-if="mobileView"></HomePageCardMobile>
    <HomePageCard v-if="!mobileView"></HomePageCard>    
</template>

<script>
//COMPONENTS
import HomePageCard from "@/components/HomePageCard.vue";
import HomePageCardMobile from "@/components/componentsMobile/HomePageCardMobile.vue";

export default {
    name: 'HomePage',
    components: {
        HomePageCard,
        HomePageCardMobile

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