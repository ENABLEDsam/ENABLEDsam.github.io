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
                      <a class="nav-link btn btn-info" href="adminp.php">back</a>
                  </li>
              </ul>
          </div>
      </nav>

    <div class="container">
        <div class="d-flex">
            <div class="float-start">
                <label for="langauge">vaihada kieli/change language</label>
                <select name="language" id="language" class="form-select mt-3">
                    <option name="eng" value="eng">in english</option>
                    <option name="fin" value="fin">suomeksi</option>
                </select>
            </div>
        </div>

        <br>

        <div class="chapters">
            <ol>
                <li>
                    <a href="#1">table</a>
                </li>
                <ul>
                    <li>
                        <a href="#1-1">nickname</a>
                    </li>
                    <li>
                        <a href="#1-2">anwsers</a>
                    </li>
                </ul>
            </ol>
        </div>

        <br>

        <h1>admin side manual</h1>

        <br>

        <p>this is the admin side manual, this manual tells all of the functions of the admin view, all admin side functions have been attempted to make easy to read and use, every section has been provided with pictures and examples.</p>

        <br>

        <div class="border border-info border-3">
            <div class="border border-info border-3">
                <h1>table</h1>

                <button class="btn btn-outline-primary float-end btn-pos" id="sec1">&darr;&darr;</button>
            </div>

            <br class="section1">

            <p class="section1">as you can see, when opening the view, you will see the table, contianing nickname, anwser, class and what day has the quiz been sent anonamously. lets take a closer look what each section holds</p>

            <br class="section1">

            <h2 class="section1">nickname</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_13.png" alt="picture of Knimi collumn">

            <p class="section1">nickane column has peoples nicknames, viki work test is anonamous so we assume that all names given are nicknames, these names are important to find info from the spreadsheet, names can be used in search, wich we will talk about it later</p>

            <br class="section1">

            <h2 class="section1" id="1-2">anwsers</h2>
            <img class="small-img section1" src="../img/manual_pics/manual_pic_14.png" alt="picture of anwsers collmuns">
        </div>
    </div>




    <script src="../JS/translate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>