<template>
    <ContactPageCard v-if="!mobileView"></ContactPageCard>
    <ContactPageCardMobile v-if="mobileView"></ContactPageCardMobile>
</template>

<script>
//COMPONENTS
import ContactPageCard from '@/components/ContactPageCard.vue';
import ContactPageCardMobile from '@/components/componentsMobile/ContactPageCardMobile.vue';

export default {
    name: "ContactPage",
    components: {
        ContactPageCard,
        ContactPageCardMobile,
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