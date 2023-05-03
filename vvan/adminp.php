<?php

    require_once("../php/db_config.php");

    session_start();

    if(!isset($_SESSION['user']) && !isset($_SESSION['pass'])){
        header("Location: index.php");
    }

    if(isset($_POST['direc'])){
        $dirc = $_SESSION['dirc'];
        if($dirc == "DESC"){
            $_SESSION['dirc'] = "ASC";
            header("Refresh:0.1");
        }else{
            $_SESSION['dirc'] = "DESC";
            header("Refresh:0.1");
        }
    }

    if(isset($_POST['minify'])){
        $smoll = $_SESSION['mini'];
        if($smoll == false){
            $_SESSION['mini'] = true;
            header("Refresh:0.1");
        }else{
            $_SESSION['mini'] = false;
            header("Refresh:0.1");
        }
    }

    if(isset($_POST['search'])){
        $dirc = $_SESSION['dirc'];

        if($_POST['find'] == '' && $_POST['amount'] == ''){
            $query = "SELECT * FROM osallistujat ORDER BY osallistujat . id $dirc";

            $results = $db_connection -> query($query);
        }elseif($_POST['amount'] == ''){
            $definer = $_POST['definer'];

                if(isset($_POST['tarkka'])){
                    $find = $_POST['find'];
                }else{
                    $find = "%" . $_POST['find'] . "%";
                }
            
            

            $query = "SELECT * FROM osallistujat WHERE $definer LIKE '$find' ORDER BY osallistujat . id $dirc";

            $results = $db_connection -> query($query);
        }elseif($_POST['find'] == ''){
            $amnt = $_POST['amount'];

            $query = "SELECT * FROM osallistujat ORDER BY osallistujat . id $dirc LIMIT $amnt";

            $results = $db_connection -> query($query);
        }else{
            $definer = $_POST['definer'];

                if(isset($_POST['tarkka'])){
                    $find = $_POST['find'];
                }else{
                    $find = "%" . $_POST['find'] . "%";
                }

            $amnt = $_POST['amount'];


            $query = "SELECT * FROM osallistujat WHERE $definer LIKE '$find' ORDER BY osallistujat . id $dirc LIMIT $amnt";

            $results = $db_connection -> query($query);
        }
    }else{
        $dirc = $_SESSION['dirc'];

        $query = "SELECT * FROM osallistujat ORDER BY osallistujat . id $dirc";

        $results = $db_connection -> query($query);
    }

    $smoll = $_SESSION['mini'];
    
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
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <a class="mt-3 btn btn-info" href="manul_fi.php">manuaali/manual</a>
            </li>
        </ul>

        <ul class="navbar-nav">

            <li class="nav-item">
                <form class="d-flex" method="post">
                    <button name="minify" type="submit" class="btn btn-info mt-3"><?php 
                    $dirc = $_SESSION['dirc'];
                    
                    if($smoll == false){
                        echo "suurenettu &#8649;";
                    }else{
                        echo "pienennetty &#8647;";
                    }
                    
                    ?></button>
                </form>
            </li>
            <li class="nav-item">
                <form class="d-flex" method="post">
                    <button name="direc" type="submit" class="btn btn-info mt-3"><?php 
                    $dirc = $_SESSION['dirc'];
                    
                    if($dirc == "DESC"){
                        echo "&darr;&darr;";
                    }else{
                        echo "&uarr;&uarr;";
                    }
                    
                    ?></button>
                </form>
            </li>
            <li class="nav-item">
                <form class="d-flex" method="post">
                    <div class="d-flex">
                        <select name="definer" id="definer" class="form-select mt-3">
                            <option name="knimi" value="knimi">nimikeistä</option>
                            <option name="luokka" value="luokka">luokasta</option>
                            <option name="mov" value="mov">lähetyksestä</option>
                        </select>
                    </div>

                    <div id="changer" class="d-flex">
                        <input class="form-control mt-3" type="text" id="find" name="find" placeholder="etsi">
                    </div>

                    <div class="form-check form-switch mt-4 d-flex precise">
                        <input class="form-check-input precise" type="checkbox" id="tarkka" name="tarkka" value="yes">
                        <label class="form-check-label text-white precise"for="tarkka">tarkka</label>
                    </div>

                    <div class="d-flex">
                        <input class="form-control mt-3" type="number" id="amount" name="amount" placeholder="kuinka monta riviä?">
                    </div>

                    <button class="btn btn-info mt-3" name="search" type="submit">etsi</button>
                </form>
            </li>
        </ul>
    </div>
</nav>
    
<div class="container">
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nimike</th>
                <?php
                if($smoll == false){
                ?>
                    <th>k1</th>
                    <th>k2</th>
                    <th>k3</th>
                    <th>k4</th>
                    <th>k5</th>
                    <th>k6</th>
                    <th>k7</th>
                    <th>k8</th>
                    <th>k9</th>
                    <th>k10</th>
                    <th>k11</th>
                    <th>k12</th>
                    <th>k13</th>
                    <th>k14</th>
                    <th>k15</th>
                    <th>k16</th>
                    <th>k17</th>
                    <th>k18</th>
                    <th>k19</th>
                    <th>k20</th>
                    <th>k21</th>
                <?php
                }else{
                ?>
                    <th>kyllä</th>
                    <th>ei</th>
                <?php
                }
                ?>
                    <th>luokka</th>
                    <th>lähettetty</th>
                    <th>poista</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach($results as $result){
                    ?>
                    <tr>
                        <td><?php echo $result['knimi'];?></td>
                    <?php
                    if($smoll == false){
                    ?>
                        <td><?php echo $result['k1'];?></td>
                        <td><?php echo $result['k2'];?></td>
                        <td><?php echo $result['k3'];?></td>
                        <td><?php echo $result['k4'];?></td>
                        <td><?php echo $result['k5'];?></td>
                        <td><?php echo $result['k6'];?></td>
                        <td><?php echo $result['k7'];?></td>
                        <td><?php echo $result['k8'];?></td>
                        <td><?php echo $result['k9'];?></td>
                        <td><?php echo $result['k10'];?></td>
                        <td><?php echo $result['k11'];?></td>
                        <td><?php echo $result['k12'];?></td>
                        <td><?php echo $result['k13'];?></td>
                        <td><?php echo $result['k14'];?></td>
                        <td><?php echo $result['k15'];?></td>
                        <td><?php echo $result['k16'];?></td>
                        <td><?php echo $result['k17'];?></td>
                        <td><?php echo $result['k18'];?></td>
                        <td><?php echo $result['k19'];?></td>
                        <td><?php echo $result['k20'];?></td>
                        <td><?php echo $result['k21'];?></td>
                    <?php
                    }else{
                    ?>
                        <td><?php echo $result['kyll'];?></td>
                        <td><?php echo $result['ei'];?></td>
                    <?php
                    }
                    ?>
                        <td><?php echo $result['luokka'];?></td>
                        <td><?php echo $result['mov'];?></td>
                        <td><a class="text-danger" href="delete.php?id= <?php echo $result['id'];?>">poista</a></td>
                    </tr>
                <?php
                }
                ?>
            
            </tbody>
        </table>
    </div>

    <script src="../JS/admin.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>