<template>
    <router-link class="projetCard" :to="{name: 'projet', params:{projetName: info_projet.name}}">
        <div :style="changeBackground"  class="projetImage">
        </div>
        <div class="name"> <p >{{info_projet.name}}</p></div>
       
    </router-link>
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
    height: 18em;
    border : black solid 2.3px;
    border-radius: 40px;
    margin-top: 5%;
    .name{   
        display: flex;
        justify-content: center;
        width: 50%;;  
        font-size: 1.5em;
        font-weight: bold;
        margin: 0px;
    }
    .projetImage{
        border-radius: 40px;
        width: 50%;
        height: 100%;
        background-size: contain;
        background-position : center;
    }
}
.projetCard:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.3s;
    .name{
        color:green;
    }
}   

</style>