<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="footer">
      <div class="left">
        <p class="text">Me contacter :</p>
        <div class="social">
          <a href="https://github.com/damien-mathieu1" class="fa fa-github faMobile"></a>
          <a href="https://www.linkedin.com/in/damien-mathieu-a70348241/" class="fa fa-linkedin-square faMobile"></a>
          <a href="mailto:damien.mathieu.pro@gmail.com" class="fa fa-at faMobile"></a>
        </div>
        
        <p class="text">MATHIEU Damien © 2023<br>
          Hebergé dans un conteneur docker qui tourne dans mon raspberry</p>
        </div>
      <div class="right">
        <div id="navMobile">
          <p>Navigation :</p>
          <router-link id="linkMobile" to="/home">Accueil</router-link>
          <router-link id="linkMobile" to='/projets'>Projets</router-link>
          <router-link id="linkMobile" to='/about'>A propos</router-link>
          <router-link id="linkMobile" to='/contact'>Contact</router-link>
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
    z-index: 999;
    bottom:0;
    background-color: rgb(229, 255, 229);
    margin:0;
    display: flex;
    border: solid 0px rgb(229, 255, 229);
    box-shadow : -1px -5px 6px -1px rgba(0,0,0,0.5);  
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
      .faMobile {
        width: 30px;
        text-align: center;
        text-decoration: none;
        }
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
  
    #navMobile{
      width: 50%;
      display: flex;
      flex-direction: column;
      #linkMobile{
        font-weight: 700;
      }
    }
  }  
  </style>