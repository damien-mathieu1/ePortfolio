const projet = [
    {
        name : "eVote, Application de Vote",
        image : "https://cdn-icons-png.flaticon.com/512/927/927295.png",
        type : "Projet Scolaire",
        description : "Pour réaliser ce projet nous étions en équipe de 4. Il consistait à réaliser une application permettant à une entreprise de récolter les votes de ses employés sur des questions à choix binaire, 'OUI', 'NON'. Notre objectif était de crypter les votes afin que les votes soient anonymes et que les employés ne puissent pas voter plusieurs fois. Pour cela nous avons utilisé la méthode de cryptage elGamal que nous avons programmé nous mêmes, nous avons réaliser cet application en JAVA. Nous avons donc utilisé JavaFX pour réaliser les interfaces graphiques.",
        techno : "Java, SQL(mySql), Serveur mariadb host sur Raspberry pi",
        lien : "https://github.com/damien-mathieu1/eVote"
    },
    {
        name : "WeatherInfo, Voir la météo en temps réel",
        image : "https://cdn-icons-png.flaticon.com/512/3942/3942094.png",
        type : "Projet Personnel",
        description : "J'ai réalisé ce projet pendant les vacances de mars 2022. Durant sa réalisation j'ai appris à me servir du langage JavaScript et j'ai également appris le fonctionnement d'une API. Pour ce projet, j'ai donc utilisé l'API de météo de OpenWeather, grâce à cette API je peux récupérer un fichier json qui contient les données météorologiques de la ville visée. Dans ma solution, on peut rentrer une ville dans le champs d'input utilisateur ensuite l'application récupère le json de OpenWeather et j'affiche les données qui m'intéressent, en l'occurence dans ma solution j'affiche uniquement la ville et la température actuelle de la ville. J'ai également développé un mécanisme d'autocomplétion pour la saisie de ville, j'utilise la méthode RegExp qui compare la saisie de l'utilisateur à des villes contenues dans un fichier contenant la majorité des villes du monde et j'affiche les 5 villes correspondant le plus, selon le RegExp, en dessous du champ de saisie.",
        techno :"HTML/CSS, JavaScript, API (OpenWeather), RegExp, json",
        lien : "https://github.com/damien-mathieu1/WeatherInfo",
    },
    {
        name : "FakeX, Plateforme de eCommerce",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UOhvuvqAzzj2eCSdmYCmDiEZVs2QwyDAJg&usqp=CAU",
        type : "Projet Scolaire",
        description : "Pour réaliser ce projet nous étions en équipe de 3. Pour ce projet nous devions faire une application de vente en ligne en utilisant du PHP. Le choix du produit à mettre en vente était libre donc nous avons choisi de vendre des chaussures. Le but de ce projet était de nous faire maitriser les bases et d'avoir de bons fondamentaux sur le langage PHP qui est un langage très largement répandue. De plus nous avons été sensibilisé aux attaques que peuvent subir les sites internet et comment s'en prémunir. Nous avons donc effectué des requêtes préparées pour empêcher les injections SQL dans notre base de données, de plus nous avons empêcher les injections HTML en utilisant la fonction htmlspecialchar(). Ce projet n'a pas pu être totalement terminé par manque de temps mais dans l'état actuel il est satisfaisant.",
        techno : "PHP, SQL(mySql), JavaScript",
        lien : "https://github.com/damien-mathieu1/FakeX"
    },
    {
        name: "ePortfolio, Portfolio digital",
        image : "https://cdn-icons-png.flaticon.com/512/3276/3276029.png",
        type: "Projet Personnel",
        description: "L'objectif derrière ce projet est de me former aux nouvelles technologies en vogue telle que le Vue.JS et également mon objectif est un objectif écologique comme expliqué dans la page d'accueil du portfolio. A travers ce projet je veux apprendre à me servir de Vue.JS mais plus globalement me former aux framework JavaScript tel que ReactJS ou encore AngularJS, seulement j'ai choisi de commencer mon apprentissage par le Vue. En plus d'apprendre le Vue, j'ai envie d'apprendre à créer des conteneurs docker et me servir de la technologie docker. Je suis intéressé par le devops et le docker est une part intégrante du devops donc j'ai envie d'héberger ce site sur mon Raspberry Pi Zero 2 W et de run le serveur dans un conteneur docker. La seconde étape de ce projet est donc l'hébergement du site.",
        techno: "Vue.JS, JavaScript, HTML, CSS(scss), Docker, Raspberry",
        lien :"https://github.com/damien-mathieu1/ePortfolio",
    },   
]
module.exports  = projet;