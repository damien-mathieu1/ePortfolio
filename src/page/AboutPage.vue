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

.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .titre{
    margin-top:5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 5% ;
    .gif{
      height: 20%;
      width: 20%;
      border-radius: 50px;
    }
    .start{
      width: 60%;
      text-align: center;
    }
    .pres{
      width: 60%;
      font-size: 1.2em;
      text-align: justify;
    }
    .img{
      width: 25%;
      border-radius: 10px;
    }
  }
}


</style>