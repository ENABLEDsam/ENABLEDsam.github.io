
<script src="JS/botscam.js"></script>

<?php

require_once('db_config.php');

$curses = file("../restrictions/curses.txt");

$yescook = $_COOKIE['ayeCookie'];
$nocook = $_COOKIE['nahCookie'];

if(!isset($_POST['addName'])){
    header('Location: ../result1.html');
    die();
}else{
    if(!isset($_POST['email'])){
    header('Location: ../result1.html');
    die();
    }else{
        if(in_array(strtolower($_POST['name']), $curses)){
        header('Location: ../result1.html');
        die();
        }else{
            $nimi = $_POST['name'];
            $email = $_POST['email'];
            $query = "INSERT INTO osalistujat (nimi, kyll, ei, email, luokka)
            VALUES (:nimi, :kyll, :ei, :email, :luokka)";
            $result = $db_connection->prepare($query);
            $result->execute([
                'nimi'     => $nimi,
                'kyll'     => $yescook,
                'ei'       => $nocook,
                'email'     => $email,
                'luokka'    => "höylä",
            ]);
        }
    }
}