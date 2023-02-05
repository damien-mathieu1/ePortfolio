<template>
    <NavBarMobile></NavBarMobile>
    <div class="mainMobile">
        <div class="titreContactMobile">
            <h1>Me Contacter :</h1>
        </div>
        <div class="socialMobile">
            <a class="boxMobile" href="mailto:damien.mathieu.pro@gmail.com">
                <a class="fa fa-at iconMobile" ></a>
                <p class="descContactMobile">damien.mathieu.pro@gmail.com</p>
            </a>
            <a class="boxMobile" href="tel:0651343040">
                <a  class="fa fa-phone iconMobile"></a>
                <p class="descContactMobile">06 51 34 30 40</p>
            </a>
            <a class="boxMobile" href="https://www.linkedin.com/in/damien-mathieu-a70348241/">
                <a  class="fa fa-linkedin-square iconMobile"></a>
                <p class="descContactMobile">Linkedin</p>
            </a>
            <a class="boxMobile" href="https://github.com/damien-mathieu1">
                <a  class="fa fa-github iconMobile"></a>
                <p class="descContactMobile">Github</p>

            </a>
        </div>
        <div class="locauxMobile">
            <p>Mes locaux : </p>
            <iframe class="locMobile" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.584011329791!2d3.850896750926366!3d43.63601637901943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aec48bfd6f25%3A0xe71ac4369b4c6da2!2sInformatique%20-%20IUT%20MONTPELLIER!5e0!3m2!1sfr!2sfr!4v1675379893940!5m2!1sfr!2sfr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div :class="{'visible':scroll,'unvisible':!scroll}" @click="scrollUp">
      <i class="fa fa-arrow-up up"></i>
    </div>
<FooterCardMobile></FooterCardMobile>

</template>

<script>
//COMPONENTS    
import NavBarMobile from '@/components/componentsMobile/NavBarMobile.vue';
import FooterCardMobile from '@/components/componentsMobile/FooterCardMobile.vue';
export default {
    name: 'ContactPage',
    components :{
        NavBarMobile,
        FooterCardMobile,
    },
    data:()=>{
        return {
            scroll : false,
        }
    },

    methods:{
        handleScroll(){
            if(window.scrollY > 50){
                this.scroll = true;
            }else{
                this.scroll = false;
            }
        },
        scrollUp(){
            window.scrollTo(0,0);
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}

</script>

<style lang="scss">
@import url('@/style/upArrow.scss');

.mainMobile{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .socialMobile{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 75%;
        .boxMobile{
            background-color: rgb(255, 255, 255);
            width: 85%;
            height: 10em;;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border : 1px solid black;
            border-radius: 20px;
            box-shadow: 0 10px 10px 0 rgb(125, 136, 125);
            margin-bottom: 100px;
            .iconMobile{
                font-size: 4em;
            }  
            .descContactMobile{
                font-size: 0.9em;
                margin-top: 5px;
                font-weight: bold;
            }            
        }        
    }
    .titreContactMobile{
        margin-top: 5%;
        font-weight: bold;
        font-size: 1.4em;
        margin-bottom: 5%;

    }
    .locauxMobile{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p{
            font-weight: bold;
            font-size: 1.5em;
        }
        margin-top: 5%;
        margin-bottom: 10%;
        .locMobile{
            width: 150%;
            height:15em;
            border : 0;
            border-radius: 30px;
        }

    }
}


</style>