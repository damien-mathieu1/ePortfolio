<template>
    <FAQPageCard v-if="!mobileView"></FAQPageCard>
    <FAQPageCardMobile v-if="mobileView"></FAQPageCardMobile>
</template>

<script>

import FAQPageCard from "@/components/FAQPageCard.vue";
import FAQPageCardMobile from "@/components/componentsMobile/FAQPageCardMobile.vue";

export default {
    title: 'FAQ, ePortfolio',
    name: 'FAQPage',
    components: {
    FAQPageCard,
    FAQPageCardMobile
},
    data: () => {
        return {
            mobileView: false,
        }
    },

    methods: {
        handleView() {
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

<style lang="scss"></style>