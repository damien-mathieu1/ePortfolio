<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="border">
    <router-link class="titre" to="/">ePortfolio
            <i class="fa fa-eye"></i>
    </router-link>
    <div class="navBar">
        <router-link class="fa fa-home faNav" to="/home"></router-link>
        <router-link class="text" to='/projets'>Projets</router-link>
        <router-link class="text" to='/about'>A propos de moi</router-link>
        <router-link class="text" to='/contact'>Contact</router-link>
        <router-view>         
        </router-view>
    </div>  
</div>
</template>

<script>
export default {
    name: 'NavBar'

}
</script>

<style lang="scss">
.border{
    background-color: rgb(229, 255, 229);
    top:0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position : sticky;
    .titre{
        display: flex;
        align-items: center;
        font-size:1.8em;
        font-weight: bold;
        margin-left: 3%;
    }
    .titre:hover{
        color:green;
    }
    .navBar{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        height: 7em;
        
        .text{
            color : black;
            font-size: 1.55em;
            font-weight: 400;
        }
        .text:hover{
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.3s;
            font-weight: 480;
            color:green;
        }
        .faNav {
            font-size: 2.2em;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
            border-radius: 50%;
        }
        .faNav:hover{
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.3s;
            color : green;
        }
    }
}
</style>