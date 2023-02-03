<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="footer">
    <div class="left">
      <p class="text">Me contacter :</p>
      <div class="social">
        <a href="https://github.com/damien-mathieu1" class="fa fa-github"></a>
        <a href="https://www.linkedin.com/in/damien-mathieu-a70348241/" class="fa fa-linkedin-square"></a>
        <a href="mailto:damien.mathieu.pro@gmail.com" class="fa fa-google"></a>
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
  background-color: rgb(229, 255, 229);
  margin:0;
  display: flex;
}
.left{
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 1em;
  .social{
    display: flex;
    font-size: 1.2em;
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
  font-size: 1em;

  .nav{
    width: 30%;
    display: flex;
    flex-direction: column;
    .link{
      margin:1px;
      font-weight: 700;
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
}

.fa:hover {
    opacity: 0.7;
    color:green;
    cursor :pointer;

}

</style>