<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="footer">
    <div class="left">
      <p class="text">Me contacter :</p>
      <div class="social">
        <a class="fa fa-github"></a>
        <a class="fa fa-linkedin-square"></a>
        <a href="" class="fa fa-google"></a>
      </div>
      
      <p class="text">Site réalisé par MATHIEU Damien © 2023<br>
        Hebergé dans un conteneur docker qui tourne dans mon raspberry</p>
      </div>
    <div class="right">
      <div class="nav">
        <p>Navigation :</p>
        <router-link class="link" to="/home">Accueil</router-link>
        <router-link class="link" to='/projets'>Projets</router-link>
        <router-link class="link" to='/about'>A propos</router-link>
        <router-link class="link" to='/contact'>Contact</router-link>
        <router-view>         
        </router-view>
      </div>
    </div> 
  </div>
  
</template>

<script>
export default {
    name: 'FooterCard',

}
</script>

<style lang="scss">

.footer{
  bottom:0;
  background-color: rgb(212, 214, 212);
  margin:0;
  display: flex;
}
.left{
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 2vh;
  .social{
    display: flex;
    font-size: 3vh;
    margin-left:30px;

  }
  .text{
    margin-left:30px;
  }
}
.right{
  display: flex;
  width: 50%;
  justify-content: flex-end;
  font-size: 2vh;

  .nav{
    width: 30%;
    display: flex;
    flex-direction: column;
    .link{
      margin:1px;
    }
    .link:hover{
      color:green;
      cursor: pointer;
            transform: scale(1.05);
            transition: 0.3s;
    }
  }
}
.fa {
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 10px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
    color:green;

}

</style>