<?php

    require_once("../php/db_config.php");

    session_start();

    if(!isset($_SESSION['user']) && !isset($_SESSION['pass'])){
        header("Location: login.php");
    }

    $query = "SELECT * FROM osallistujat";

    $results = $db_connection -> query($query);
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
    
      <form class="d-flex">
        <select class="form-select mt-3">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>

        <input class="form-control mt-3" type="text" id="find" name ="find" placeholder="etsi">

        <button class="btn btn-info mt-3" type="button">etsi</button>
      </form>
    </div>
  </div>
</nav>
    
<div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Nimike</th>
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


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>