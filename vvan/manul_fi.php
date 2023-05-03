<?php

    require_once("../php/db_config.php");

    session_start();

    if(!isset($_SESSION['user']) && !isset($_SESSION['pass'])){
        header("Location: index.php");
    }

?>

<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="../CSS/styyli.css">
    <title>admin</title>
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-dark bg-viki sticky-top">
        <div class="container-fluid">
            <div  class="bg-info rounded-circle soos">
                <a class="navbar-brand" href="javascript:void(0)"> <img src="../img/ViKi_logo.png" alt="logo" class="logo"> </a>
            </div>
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link btn btn-info" href="adminp.php">takaisin</a>
                  </li>
              </ul>
          </div>
      </nav>

    <div class="container">
        <div class="d-flex">
            <div class="float-start">
                <label for="langauge">vaihada kieli/change language</label>
                <select name="language" id="language" class="form-select mt-3">
                    <option name="fin" value="fin">suomeksi</option>
                    <option name="eng" value="eng">in english</option>
                </select>
            </div>
        </div>

        <br>

        <div class="chapters">
            <ol>
                <li>
                    <a href="#1">taulukko</a>
                </li>
                <ul>
                    <li>
                        <a href="#1-1">kutsuma nimi</a>
                    </li>
                    <li>
                        <a href="#1-2">vastaukset</a>
                    </li>
                    <li>
                        <a href="#1-3">luokka</a>
                    </li>
                    <li>
                        <a href="#1-4">milloin lähetetty</a>
                    </li>
                    <li>
                        <a href="#1-5">poista</a>
                    </li>
                </ul>
            </ol>
        </div>

        <br>

        <h1>admin puolen manuaali</h1>

        <br>

        <p>tämä on admin puolen manuaali, tässä kerrotaan jokainen funktio admin puolen näkymässä, kaikki admin puolen toiminnot on yritetty tehdä tarpeeksi helppo lukuisiksi, on myös annettu kuvia ja esimerkkejä jokaisesta kohdasta.</p>

        <br>

        <div class="border border-info border-3">
            <div class="border border-info border-3">
                <h1 id="1">1. Taulukko</h1>

                <button class="btn btn-outline-primary float-end btn-pos" id="sec1">&darr;&darr;</button>
            </div>

            <br class="section1">

            <p class="section1">kuten näet, heti admin näkymän avattua, sinä näet taulukon, tässä taulukossa näkyy kutsuma nimi, vastaukset, luokan ja minä päivänä on loähetetty anonyymi kysely. Katsotaan lähemmin mitä kiakissia sarakeissa on.</p>

            <br class="section1">

            <h2 class="section1" id="1-1">kutsuma nimi</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_13.png" alt="kuva Knimi sarakeesta">

            <p class="section1">kutsuma nimi sarakeessa on ihmisten kutsuma nimet, viki työ testi on anonyymi joten oletetaan että kaikki nimet annettu ovat kutsumanimiä, nämä nimet ovat tärkeitä lötääkseen kaikki tiedot taulukosta, nimiä voidaan käyttää haussa, josta puhutaan myöhemmin.</p>

            <br class="section1">

            <h2 class="section1" id="1-2">vastaukset</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_14.png" alt="kuva vastaus sarakeista">

            <p class="section1">vastaus sarakkeet näyttävät kaikkien vastaukest, jokaisesta kysymyksestä on yksi vastaus jonka voi nähdä. Vastaukset on järjestetty 21:een sarakeeseen, joissa on joko vihreä K tai punainen E, värit ovat tärkeitä koska se helpottaa tiedon lukemista, on myös pienenetty näkymä, josta me kerromme myöhemmin. Vastaus sarakeita ei voi käyttää suoraan missään haussa.</p>

            <br class="section1">

            <h2 class="section1" id="1-3">luokka</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_15.png" alt="kuva luokka sarakeesta">

            <p class="section1">luokka sarakeessa näytetään mitä luokkia kaikki osalistujat ovat saaneet, ne on jaettu viiteen eri luokkaan:</p>

                <ul class="section1">
                    <li class="section1">höylä (tai Moniosaajatyöntekijä)</li>
                    <li class="section1">markkinointu (tai mediatyöntekijä)</li>
                    <li class="section1">puhdistaja (tai puhdistajatyöntekijä)</li>
                    <li class="section1">kassa (tai kassatyöntekijä)</li>
                    <li class="section1">kokki (tai cateringtyöntekijä)</li>
                </ul>

            <p class="section1">luokkia voidaan käyttää tiedon haussa</p>

            <br class="section1">

            <h2 class="section1" id="1-4">milloin lähetetty</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_16.png" alt="kuva milloin lähetetty sarakeesta">

            <p class="section1">milloin lähetetty sarake näyttää päivämäärän jolloin joku on lähetänyt vastaukset, päivämäärää voi käyttää haussa</p>

            <br class="section1">

            <h2 class="section1" id="1-5">poista</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_17.png" alt="kuva poista sarakeesta">

            <p class="section1">poista sarake sisältää poista toiminon</p>
        </div>
    </div>




    <script src="../JS/translate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>