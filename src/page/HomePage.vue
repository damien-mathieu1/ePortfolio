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
.encapsulation{
    display: flex;
    flex-direction: column;
    align-items: center;
    .main{
        display: flex;
        width: 78%;
        flex-direction: column;
        align-items: center;
        .titre{
            margin-top :10%;
            margin-bottom: 3%;
            color:green;
            font-size: 6vh;
            text-align: center;
        }
        .gif{
            border-radius: 5em;
            margin-bottom: 5%;
        }
        .info{
            width: 65%;
            margin-bottom: 10%;
            h2{
                font-size: 1.8em;
            }
            p{
                font-size: 1.2em;
                text-align : justify;

            }
            a{
                color:green;
                font-weight: 550;
            }
            a:hover{
                color:darkgreen;
            }
        }
    }
}
</style>