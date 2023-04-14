
<script src="JS/botscam.js"></script>

<?php

require_once('db_config.php');



$yescook = $_COOKIE['ayeCookie'];
$nocook = $_COOKIE['nahCookie'];



if(!isset($_POST['addName'])){
    header('Location: ../result4.html');
    die();
}else{
    if(!isset($_POST['email'])|| trim($_POST['email']) == ''){
    header('Location: ../result4.html');
    die();
    }else{
        if(strpos(file_get_contents("../restrictions/curses.txt"),strtolower($_POST['name'])) !== false){
        header('Location: ../result4.html');
        die();
        }else{
            $nimi = $_POST['name'];
            $email = $_POST['email'];
            $query = "INSERT INTO osallistujat (nimi, kyll, ei, email, luokka)
            VALUES (:nimi, :kyll, :ei, :email, :luokka)";
            $result = $db_connection->prepare($query);
            $result->execute([
                'nimi'     => $nimi,
                'kyll'     => $yescook,
                'ei'       => $nocook,
                'email'     => $email,
                'luokka'    => "kassa",
            ]);

            header('Location:../result4.html');
        }
    }
}