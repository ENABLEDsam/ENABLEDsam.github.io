<?php

    require_once("../php/db_config.php");

    session_start();

    if(!isset($_SESSION['user']) && !isset($_SESSION['pass'])){
        header("Location: login.php");
    }

    if(isset($_POST['search'])){
        if($_POST['find'] == ''){
            $query = "SELECT * FROM osallistujat ORDER BY osallistujat . id DESC";

            $results = $db_connection -> query($query);
        }else{
            $definer = $_POST['definer'];
            $find = $_POST['find'];
            

            $query = "SELECT * FROM osallistujat WHERE $definer LIKE '$find' ORDER BY osallistujat . id DESC";

            $results = $db_connection -> query($query);
        }
    }else{
        $query = "SELECT * FROM osallistujat ORDER BY osallistujat . id DESC";

        $results = $db_connection -> query($query);
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

<nav class="navbar navbar-expand-sm navbar-primary bg-primary .sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>

        <form class="d-flex" method="post">
            <select name="definer" id="definer" class="form-select mt-3">
                <option name="knimi" value="knimi">nimikeistä</option>
                <option name="luokka" value="luokka">luokasta</option>
                <option name="mov" value="mov">lähetyksestä</option>
            </select>

            <div id="changer">
                <input class="form-control mt-3" type="text" id="find" name="find" placeholder="etsi">
            </div>

            <button class="btn btn-info mt-3" name="search" type="submit">etsi</button>
        </form>
    </div>
  </div>
</nav>
    
<div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Nimike</th>
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
                    <th>luokka</th>
                    <th>lähettetty</th>
                    <th>poista</th>
                    <th><a href="create.php"><i class="fas fa-plus text-success"></i></a></th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach($results as $result){
                    ?>
                    <tr>
                        <td><?php echo $result['knimi'];?></td>
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