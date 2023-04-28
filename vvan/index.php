<?php

    require_once("../php/db_config.php");

    session_start();

    $_SESSION['flag'] = null;

    if(isset($_POST['login'])){
        if(!$_POST['user'] == '' && !$_POST['pass'] == ''){
            $user = $_SESSION['user'] = $_POST['user'];
            $pass = $_SESSION['pass'] = $_POST['pass'];
    
            $query = "SELECT nimi, pass FROM admin WHERE nimi = '$user' AND pass = MD5('$pass')";
            $results = $db_connection -> query($query);
            if($results -> rowCount() == 1){
                $_SESSION['flag'] = null;
                header('Location: adminp.php');
            }else{
                $_SESSION['flag'] = 1;
            }
        }else{
            $_SESSION['flag'] = 2;
        }
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
    
    <div class="container">
        <form method="post">
            <div class="mb-3 mt-3">
                <label for="user" class="form-label">käyttäjä:</label>
                <input type="text" class="form-control" name="user" id="user" placeholder="enter user">
            </div>
            <div class="mb-3 mt-3">
                <label for="pass" class="form-label">salasana:</label>
                <input type="password" class="form-control" name="pass" id="pass" placeholder="enter password">
            </div>
            <button type="submit" name="login" class="btn btn-primary">kirjaudu</button>
        </form>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>

<?php

    if($_SESSION['flag'] == 1){
        echo '<div class="container">
        <div class="alert alert-danger">
        <strong>hälytys!</strong> sinun käyttäjänimi tai salasana on väärä!
        </div>
        </div>';
    }elseif($_SESSION['flag'] == 2){
        echo '<div class="container">
        <div class="alert alert-warning">
        <strong>hälytys!</strong> tekstikentät ovat tyhjiä!
        </div>
        </div>';
    }

?>