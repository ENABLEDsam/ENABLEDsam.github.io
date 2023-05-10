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
                <li>
                    <a href="#2">funktiot</a>
                    <ol>
                        <li>
                            <a href="#2-1">luettavuus</a>
                        </li>
                        <ul>
                            <li>
                                <a href="#2-1-1">pienenys</a>
                            </li>
                            <li>
                                <a href="#2-1-1">suunan muutos</a>
                            </li>
                        </ul>
                        <li>
                            <a href="#2-2">tiedon haku</a>
                        </li>
                        <ul>
                            <li>
                                <a href="#2-2-1">haku metodi</a>
                            </li>
                            <li>
                                <a href="#2-2-2">haku alue</a>
                            </li>
                            <li>
                                <a href="#2-2-3">tarkka haku</a>
                            </li>
                            <li>
                                <a href="#2-2-4">rivien määrä</a>
                            </li>
                        </ul>
                        <li>
                            <a href="#3">poistaminen</a>
                        </li>
                    </ol>
                </li>
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

            <p class="section1">luokkia voidaan käyttää tiedon haussa.</p>

            <br class="section1">

            <h2 class="section1" id="1-4">milloin lähetetty</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_16.png" alt="kuva milloin lähetetty sarakeesta">

            <p class="section1">milloin lähetetty sarake näyttää päivämäärän jolloin joku on lähetänyt vastaukset, päivämäärää voi käyttää haussa.</p>

            <br class="section1">

            <h2 class="section1" id="1-5">poista</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_17.png" alt="kuva poista sarakeesta">

            <p class="section1">poista sarake sisältää poista toiminon.</p>
        </div>

        <br>

        <div class="border border-info border-3">
            <div class="border border-info border-3">
                <h1 id="2">2. funktiot</h1>

                <button class="btn btn-outline-primary float-end btn-pos" id="sec2">&darr;&darr;</button>
            </div>
            
            <br class="section2">

            <p class="section2">funktiot autavat tiedon lötämisessä tai parantaa luettavuutta, ne on jaettu kahteen osioon: luettavuus ja tiedon haku. Poistaminen on kolmas function joke ei kuulu noihin kahteen josta kerrotaan lopussa.</p>

            <br class="section2">
            
            <h1 class="section2" id="2-1">luettavuus</h1>

            <br class="section2">

            <p class="section2">luettavuus funktiot autavat luetavuudessa, ne muutavat taulukkoa jotenkin, ilman tiedon hakua. On olemassa kaksi luettavuus funktiota, pienennys ja suunan muutos.</p>

            <br class="section2">

            <h2 class="section2" id="2-1-1">pienennys</h2>
            <img class="small-img section2" src="../img/manual_pics/manual_pic_1.png" alt="kuva pienennys napista">

            <p class="section2">pienennys funktio pienentää taulukon vastaus sarakkeet kahteen kyllä ja ei sarakeeseen, se näyttää suoraan kuinka monta kyllä ja ei vastausta henkilö on anatanut, mutta suurenetussa näkymässä näkyy enemmän tietoa. Pienennys aktivoidaan näytetystä napista, suurenetun näkymän saa takaisin samasta napista.</p>

            <br class="section2">

            <img class="small-img section2" src="../img/manual_pics/manual_pic_11.png" alt="kuva suurenetusta näkymästä">
            <p class="section2">kuva suurenetusta näkymästä, kaikki 21 vastaus saraketta.</p>

            <br class="section2">

            <img class="small-img section2" src="../img/manual_pics/manual_pic_12.png" alt="kuva pienenetystä näkymästä">
            <p class="section2">kuva pienenetystä näkymästä, kyllä ja ei sarakkeet.</p>

            <br class="section2">

            <h2 class="section2" id="2-1-2">suunan muutos</h2>
            <img class="small-img section2" src="../img/manual_pics/manual_pic_2.png" alt="kuva suunan muutos napista">

            <p class="section2">suunan muunos muutaa suunan joko uusin ensin tai vanhin ensin, admin näkymä alkaa aina uusin ensin suunasta, suunan vaihdon voi tehdä painamalla näytetsytä napista.</p>

            <br class="section2">

            <h1 class="section2" id="2-2">tiedon haku</h1>

            <br class="section2">

            <p class="section2">tiedon haku funktioita käytetään kun haetaan tietoa, siinä on paljon tarkenteita ja luettavuuden autajia, jos haluat perus-näkymän takaisin kun olet hakenut, paina etsi nappia, tai enteriä, kun olet klikannut teksti aluetta, kun kaikki teksti alueet ovat tyhjiä.</p>

            <br class="section2">

            <h2 class="section2" id="2-2-1">haku metodi</h2>
            <img class="small-img section2" src="../img/manual_pics/manual_pic_3.png" alt="kuva 'nimikeistä' valinasta">

            <p class="section2">haku metodia voi muuttaa, on kolme haku metodia, nimikeistä hakeminen, luokista hakeminen ja lähetyksestä hakeminen. Nimikeistä hakemisessa haetaan kutsumanimeä käyttäen, se hakee kaikki kutsumanimet josta löytyy annettu termi.</p>

            <br class="section2">

            <img class="small-img section2" src="../img/manual_pics/manual_pic_7.png" alt="kuva 'luoksta' valinasta">
            <p class="section2">luokasta hakeminen muutaa teksti kentän pudotus menuksi, siinä käytetään tiettyjä luokkia hakemiseen, luokat voidaan nähdä <a class="section2" href="#1-3">luokka</a> kohdasta edelisessä osiossa.</p>

            <br class="section2">

            <img class="small-img section2" src="../img/manual_pics/manual_pic_8.png" alt="kuva 'lähetyksestä' valinasta">
            <p class="section2">lähetyksestä hakeminen muutaa teksti kentän päivämäärä kentäksi, siinä haetaan päivämäärää, josta nähdään milloin joku on lähetänyt.</p>

            <br class="section2">

            <h2 class="section2" id="2-2-2">haku alue</h2>
            <img class="small-img section2" src="../img/manual_pics/manual_pic_4.png" alt="kuva haku alueesta">

            <p class="section2">haku alueessa laitetaan hakutermi/luokka/päivämäärä, riipuen mikä haku metodi on päällä.</p>

            <br class="section2">

            <h2 class="section2" id="2-2-3">tarkka haku</h2>
            <img class="small-img section2" src="../img/manual_pics/manual_pic_5.png" alt="kuva tarkka haku valinnasta">

            <p class="section2">tarkkaa hakua kätetään jos haluat nähdä tietyn kutsumanimen, tarkka haku voi ainoastaan käyttää kun haku metodi on "nimikeistä" valinassa.</p>

            <br class="section2">

            <h2 class="section2" id="2-2-4">rivien määrä</h2>
            <img class="small-img section2" src="../img/manual_pics/manual_pic_6.png" alt="kuva rivien määrä aslueesta">

            <p class="section2">rivien määrä aluetta käytetään kun halutaan tietty määrä rivejä, anna vain numero ja se määrä (tai alempi) rivejä annetaan.</p>

            <br class="section2">

            <h1 class="section2" id="3">poistaminen</h1>

            <br class="section2">

            <img class="small-img section2" src="../img/manual_pics/manual_pic_10.png" alt="kuva poista valikko">
            <p class="section2">poistamis funktio poistaa rivin kun linkkiä kilikataan, sitä ei voi palauttaa niin ole varovainen.</p>
        </div>
    </div>




    <script src="../JS/translate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>