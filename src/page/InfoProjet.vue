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
.top{
    margin-top:3%;
    margin-bottom: 3%;
    display: flex;
    align-items: center;
    width: 100%;
    .img{
        margin-left : 3%;
        height: 20em;
        background-size: cover;
        background-position: center;
    }
    .titre{
        display: flex;
        flex-direction: column;
        padding-left: 3%;
        .major{
            font-size: 4em;
            font-weight: bold;
            color:green;
        }
        .minor{
            font-size: 1.3em;
        }
    }
}
.desc{
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    p{
        text-align : justify;
        font-size: 1.4em;
    }
    .titre{
        font-size: 1.6em;
        font-weight: bold;
        
    }
    .lien{
        display: flex;  
        align-items: center;
        justify-content: space-around;
        overflow: hidden;
        width: 15%;
        border : black solid 1px;
        margin: 5px;
    }
    .lien:hover{
        background-color: rgb(229, 255, 229);
        color : black;

    }

}
</style>