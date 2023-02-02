<template>
    <div class="border">
    <div class="navBar">
        <router-link class="img" to="/home"></router-link>
        <p><router-link to='/projets'>Projets</router-link></p>
        <p><router-link to='/about'>A propos</router-link></p>
        <p><router-link to='/contact'>Contact</router-link></p>
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
    border-bottom : black solid 1px;
    width: 100%;
    position : sticky;
    background-color: white;
    .navBar{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        height: 10vh;
        p{
            font-size: 1.2em;
            font-weight: 400;
        }
        p:hover{
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.3s;
            font-weight: 480;

        }
        .img{
            width: 4%;
            height: 50%;
            background-image: url('https://img.icons8.com/sf-regular/512/home-page.png');
            background-size: cover;
            background-position : center;
        }
        .img:hover{
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.3s;
        }
    }
}
</style>