<template>
    <a id="top"></a>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div id="borderMobile">
        <a @click="showNav=!showNav, scroll() " class="fa fa-bars" ></a>
         
        <router-link class="titreMobile" to="/">ePortfolio
                <i  class="fa fa-eye"></i>
        </router-link>
    </div>
    <div :class="{'open':showNav, 'close':!showNav}" id="navBarMobile" >
            <router-link class="text fa fa-home" to="/home"></router-link>
            <router-link class="text" to='/projets'>Projets</router-link>
            <router-link class="text" to='/about'>A propos de moi</router-link>
            <router-link class="text" to='/contact'>Contact</router-link>
    </div> 
    
</template>

<script>
export default {
    name: 'NavBarMobile',
    data:()=>{
        return {
            showNav : false,
        }
    },
    methods:{
        scroll(){
            window.scrollTo(0,0);
        }
    }
}
</script>

<style lang="scss">
#borderMobile{
    background-color: rgb(229, 255, 229);
    top:0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position : sticky;
    height:4em;
    .fa-bars{
        font-size: 2.2em;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        border-radius: 50%;
        margin-left: 3%;
    }
    .titreMobile{
        display: flex;
        align-items: center;
        font-size:1.8em;
        font-weight: bold;
        margin-right: 3%;
    }
    
    
}
#navBarMobile{
        position: absolute;
        left : -500px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(229, 255, 229);
        transition : 0.5s transform cubic-bezier(0,.12,.14,1);
        .text{
                margin-top : 15%;
                color : black;
                font-size: 2.3em;
                font-weight: 400;
            }
        
    }
.close{
    transform: translateX(-500px);}
.open{
    visibility: visible !important;
    transform: translateX(500px);    
}

</style>