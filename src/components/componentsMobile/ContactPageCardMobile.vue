<template>
    <NavBarMobile></NavBarMobile>
    <div class="main">
        <div class="titre">
            <h1>Si vous souhaitez me contacter vous avez différentes options</h1>
        </div>
        <div class="contact">
            <div class="info">
                <h2>Contact</h2>
                    <p>Pour me contacter par mail veuillez cliquer sur le bouton suivant  <i class="fa fa-arrow-right"></i> <a href="mailto:damien.mathieu.pro@gmail.com" class="fa fa-google"></a></p>
                    <p>Pour me contacter par téléphone veuillez cliquer sur le bouton suivant <i class="fa fa-arrow-right"></i> <a href="tel:0651343040" class="fa fa-phone"></a> (06 51 34 30 40)</p>
                    <p>Pour me contacter sur linkedin veuillez cliquer sur le bouton suivant <i class="fa fa-arrow-right"></i> <a href="https://www.linkedin.com/in/damien-mathieu-a70348241/" class="fa fa-linkedin-square"></a></p> 
                    <p>Pour voir mon compte github veuillez cliquer sur le bouton suivant <i class="fa fa-arrow-right" ></i> <a href="https://github.com/damien-mathieu1" class="fa fa-github"></a> </p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.584011329791!2d3.850896750926366!3d43.63601637901943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aec48bfd6f25%3A0xe71ac4369b4c6da2!2sInformatique%20-%20IUT%20MONTPELLIER!5e0!3m2!1sfr!2sfr!4v1675379893940!5m2!1sfr!2sfr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
<FooterCardMobile></FooterCardMobile>

</template>

<script>
//COMPONENTS    
import NavBarMobile from '@/components/componentsMobile/NavBarMobile.vue';
import FooterCardMobile from "@/components/componentsMobile/FooterCardMobile.vue";
export default {
    name: 'ContactPage',
    components :{
        NavBarMobile,
        FooterCardMobile,
    }
}

</script>

<style lang="scss">
.main{
    width: 100%;
    .fa-google{
        margin : 0;
        padding:5px;
        font-size: 1.5em;
        border-radius: 1vh;
        background-color: black;
        color:white;
    }
    .fa-arrow-right:hover {
        color : black;
    }
    .fa-phone{
        font-size: 2em;
    }
    .fa-phone:hover{
        color: black;
    }
    .fa-linkedin-square{
        font-size: 2em;
    }
    .fa-linkedin-square:hover{
        color: black;
    }
    .fa-github{
        font-size: 2em;
    }
    .fa-github:hover{
        color: black;
    }
}
</style>