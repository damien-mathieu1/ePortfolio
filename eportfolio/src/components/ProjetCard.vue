<template>
    <div class="projetCard">
        <div :style="changeBackground"  class="projetImage">

        </div>
        <p class="name">{{info_projet.name}}</p>
    </div>
</template>

<script>
//IMPORT
import { computed } from 'vue';
export default {
    name: "ProjetCard",
    props:{
        info_projet : Object,
    },
    setup(props){
        const changeBackground = computed(() =>{
            return {
                backgroundImage: `url(${props.info_projet.image})`
            }
        })


        return {
            changeBackground
        }
    }
}
</script>

<style lang="scss">

.projetCard{
    display: flex;  
    justify-content: space-around;
    align-items: center;
    width: 65%;
    height: 30vh;
    border : black solid 4px;
    border-radius: 40px;
    margin: 20px;
    p{      
        margin: 0px;
    }
    .projetImage{
        width: 17%;
        height: 70%;
        background-size: cover;
        background-position : center;
    }
}
.projetCard:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.3s;
}

</style>