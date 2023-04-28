
<script src="JS/botscam.js"></script>

<?php

require_once('db_config.php');



$k1 = $_COOKIE['k1'];
$k2 = $_COOKIE['k2'];
$k3 = $_COOKIE['k3'];
$k4 = $_COOKIE['k4'];
$k5 = $_COOKIE['k5'];
$k6 = $_COOKIE['k6'];
$k7 = $_COOKIE['k7'];
$k8 = $_COOKIE['k8'];
$k9 = $_COOKIE['k9'];
$k10 = $_COOKIE['k10'];
$k11 = $_COOKIE['k11'];
$k12 = $_COOKIE['k12'];
$k13 = $_COOKIE['k13'];
$k14 = $_COOKIE['k14'];
$k15 = $_COOKIE['k15'];
$k16 = $_COOKIE['k16'];
$k17 = $_COOKIE['k17'];
$k18 = $_COOKIE['k18'];
$k19 = $_COOKIE['k19'];
$k20 = $_COOKIE['k20'];
$k21 = $_COOKIE['k21'];

if(!isset($_POST['addName'])){
    header('Location: ../result3.html');
    die();
}else{
    if(strpos(file_get_contents("../restrictions/curses.txt"),strtolower($_POST['name'])) !== false){
    header('Location: ../result3.html');
    die();
    }else{
        $knimi = $_POST['name'];
        $query = "INSERT INTO osallistujat (knimi, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19, k20, k21, luokka)
        VALUES (:knimi, :k1, :k2, :k3, :k4, :k5, :k6, :k7, :k8, :k9, :k10, :k11, :k12, :k13, :k14, :k15, :k16, :k17, :k18, :k19, :k20, :k21, :luokka)";
        $result = $db_connection->prepare($query);
        $result->execute([
            'knimi'     => $knimi,
            'k1'        => $k1,
            'k2'        => $k2,
            'k3'        => $k3,
            'k4'        => $k4,
            'k5'        => $k5,
            'k6'        => $k6,
            'k7'        => $k7,
            'k8'        => $k8,
            'k9'        => $k9,
            'k10'       => $k10,
            'k11'       => $k11,
            'k12'       => $k12,
            'k13'       => $k13,
            'k14'       => $k14,
            'k15'       => $k15,
            'k16'       => $k16,
            'k17'       => $k17,
            'k18'       => $k18,
            'k19'       => $k19,
            'k20'       => $k20,
            'k21'       => $k21,
            'luokka'    => "puhdistaja",
        ]);
        header('Location:../result3.html');
    }
}
