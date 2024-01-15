<template>
    <a id="top"></a>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div id="borderMobile">
        <a @click="showNav=!showNav, scroll() " class="fa fa-bars" ></a>
         
        <router-link @click="scroll()" class="titreMobile" to="/">ePortfolio
                <i  class="fa fa-eye"></i>
        </router-link>
    </div>
    <div :class="{'open':showNav, 'close':!showNav}" id="navBarMobile" @wheel.prevent
 @touchmove.prevent
 @scroll.prevent>
            <router-link @click="showNav=!showNav" class="text fa fa-home" to="/home" ></router-link>
            <router-link @click="showNav=!showNav" class="text" to='/projets'>Projets</router-link>
            <router-link @click="showNav=!showNav" class="text" to='/about'>A propos de moi</router-link>
            <router-link @click="showNav=!showNav" class="text" to='/faq'>FAQ</router-link>
            <router-link @click="showNav=!showNav" class="text" to='/contact'>Contact</router-link>
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
    z-index: 999;
    background-color: rgb(229, 255, 229);
    top:0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position : sticky;
    height:4em;
    border: 0px solid rgb(229, 255, 229);
    box-shadow: -1px 6px 6px -1px rgba(0,0,0,0.5);
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
        top : -500px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(229, 255, 229);
        transition : 1s transform cubic-bezier(0,.12,.14,1);
        .text{
                margin-top: 10%;
                color : black;
                font-size: 2.3em;
                font-weight: 400;
            }
        
    }
.close{
    transform: translateY(-500px);}
.open{
    transform: translateY(500px);    
}

</style>