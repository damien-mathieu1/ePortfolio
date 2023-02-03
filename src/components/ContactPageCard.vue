<template>
    <NavBar></NavBar>
    <div class="main">
        <div class="titreContact">
            <h1>Me Contacter :</h1>
        </div>
        <div class="social">
            <a class="box" href="mailto:damien.mathieu.pro@gmail.com">
                <a class="fa fa-at icon" ></a>
                <p class="descContact">damien.mathieu.pro@gmail.com</p>
            </a>
            <a class="box" href="tel:0651343040">
                <a  class="fa fa-phone icon"></a>
                <p class="descContact">06 51 34 30 40</p>
            </a>
            <a class="box" href="https://www.linkedin.com/in/damien-mathieu-a70348241/">
                <a  class="fa fa-linkedin-square icon"></a>
                <p class="descContact">Linkedin</p>
            </a>
            <a class="box" href="https://github.com/damien-mathieu1">
                <a  class="fa fa-github icon"></a>
                <p class="descContact">Github</p>

            </a>
        </div>
        <div class="locaux">
            <p>Mes locaux : </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.584011329791!2d3.850896750926366!3d43.63601637901943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aec48bfd6f25%3A0xe71ac4369b4c6da2!2sInformatique%20-%20IUT%20MONTPELLIER!5e0!3m2!1sfr!2sfr!4v1675379893940!5m2!1sfr!2sfr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
<FooterCard></FooterCard>

</template>

<script>
//COMPONENTS    
import NavBar from '@/components/NavBar.vue';
import FooterCard from '@/components/FooterCard.vue';
export default {
    name: 'ContactPage',
    components :{
        NavBar,
        FooterCard,
    }
}

</script>

<style lang="scss">
.main{
    width: 100%;
    .social{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 70%;
        .box{
            background-color: rgb(255, 255, 255);
            width: 40%;
            height: 20em;;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border : 1px solid black;
            border-radius: 20px;
            box-shadow: 0 10px 10px 0 rgb(125, 136, 125);
            margin-bottom: 100px;
            .icon{
                font-size: 4em;
            }  
            .descContact{
                font-size: 0.9em;
                margin-top: 5px;
                font-weight: bold;
            }            
        }
        .box:hover{
            color : green;
            cursor:pointer;
            .icon{
                color: green;
            }
            transform: scale(1.05);
            transition: 0.3s; 
        }
        
    }
    .titreContact{
        margin-top: 5%;
        font-weight: bold;
        font-size: 2em;
        margin-bottom: 5%;

    }
    .locaux{
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p{
            font-weight: bold;
            font-size: 1.5em;
        }
        margin-top: 5%;
        margin-bottom: 10%;

    }
}


</style>