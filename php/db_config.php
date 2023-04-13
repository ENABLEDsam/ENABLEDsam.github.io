<?php

$db_host = 'localhost';
$db_name = 'viki_db';
$db_username = 'root';
$db_password = '';

$dsn = "mysql:host=$db_host;dbname=$db_name";


$db_connection = new PDO($dsn, $db_username, $db_password);
