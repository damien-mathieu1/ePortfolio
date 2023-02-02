<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="border">
    <div class="navBar">
        <router-link class="fa fa-home" to="/home"></router-link>
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
    top:0;
    width: 100%;
    position : sticky;
    background-color: white;
    border-bottom: solid black 1px;
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
        .fa {
            font-size: 2.2em;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
            border-radius: 50%;
        }
        .fa:hover{
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.3s;
            color : green;
        }
    }
}
</style>