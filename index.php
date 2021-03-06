<!DOCTYPE html>
<?php
$compteur = file_get_contents('compteur.txt');
file_put_contents('compteur.txt', $compteur+1);
?>


<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--  <meta http-equiv="X-UA-Compatible" content="ie=edge">-->

  <!-- Paramètres pour le partage sur Facebook -->
  <meta property="og:url"           content="https://quiz-alpha.assos.centrale-marseille.fr" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="Quizz pour les alphas" />
  <meta property="og:description"   content="Quel parcours feras-tu à Centrale Marseille" />
  <meta property="og:image"         content="https://com.centrale-marseille.fr/charte_graphique/img/logo-zExcl.703b058d.png" />

  <title>AlphaQuiz</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
</head>

<body>
  <!-- Load Facebook SDK for JavaScript -->
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>

  <style>
    @font-face {
      font-family: "Barlow";
      src: url("/fonts/Barlow-Regular.ttf") format("ttf");
    }

    @font-face {
      font-family: "Barlowsemicondensed";
      src: url("/fonts/BarlowSemiCondensed-Regular.ttf") format("ttf");
    }

    .ui.text.container {
      font-family: Barlow, Lato,'Helvetica Neue',Arial,Helvetica,sans-serif !important;
    }

    body {
      font-family: Barlow, sans-serif !important;
    }

    h1 h2 h3 h4 h5 h6 {
      font-family: Barlow, sans-serif !important;
    }

    .no-border {
      border-style: none !important;
      box-shadow: none !important;
      display: grid;
      place-items: center;
    }
    .ui.segment.no-border {
          padding: 0.5em;
    }
    .joli-btn {
      opacity: 1 !important;
      border-radius: 5px !important;
    }
    .center-button {
      display: inline-flex;
    }
    .centre {
      text-align: center;
    }
  </style>
  <a href="https://www.centrale-marseille.fr/"><img src="img/logo_centrale_marseille.svg" style="width: 200px;" /></a>
  <div class="ui text container">
    <div id="quiz">
      <h1 class="ui dividing header" id="titre">Quiz</h1>

      <h2 id="question" class="first"></h2>



      <div class="choices ui text container" style ="height: 40vh" id="question_blocks">
        <div class="ui segments no-border">
          <div class="ui segment no-border" id="answer0">
            <button id="guess0" class="joli-btn ui basic button fluid">
              <span id="choice0"></span>
            </button>
          </div>
          <div class="ui segment no-border" id="answer1">
            <button id="guess1" class="joli-btn fluid ui basic button">
              <span id="choice1"></span>
            </button>
          </div>
          <div class="ui segment no-border" id="answer2">
            <button id="guess2" class="joli-btn ui basic button fluid">
              <span id="choice2"></span>
            </button>
          </div>
          <div class="ui segment no-border" id="answer3">
            <button id="guess3" class="joli-btn ui basic button fluid">
              <span id="choice3"></span>
            </button>
          </div>
          <div class="ui segment no-border" id="answer4">
            <button id="guess4" class="joli-btn ui basic button fluid">
              <span id="choice4"></span>
            </button>
          </div>
          <div class="ui segment no-border" id="answer5">
            <button id="guess5" class="joli-btn ui basic button fluid">
              <span id="choice5"></span>
            </button>
          </div>
        </div>
      </div>

      <p id="progress"></p>

    </div>

    <div id="conclusion">
      <p id="reponse0"></p><br>
      <p id="reponse1"></p><br>
      <p id="reponse2"></p><br>
      <p id="reponse3"></p><br>
      <p id="reponse4"></p><br>
      <p id="reponse5"></p><br>
    </div>

    <div class="centre">
      <!-- Facebook share button -->
      <div class="fb-share-button center-button" id="facebook" data-href="https://quiz-alpha.asso.centrale-marseille.fr" data-layout="button"></div>
      <!-- Twitter share button -->
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button center-button" data-show-count="false">Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <button id="comeback" style="display: none" class="ui right labeled icon button"><i class=" right icon redo"></i>Recommencer</button>




  </div>



  <script src="script.js" type="text/javascript" ></script>
</body>



</html>
