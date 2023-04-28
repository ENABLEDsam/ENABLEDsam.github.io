<?php

require_once('../db_config.php');

if(!isset($_GET['id'])){
    header('Location: adminp.php');
    die();  
  }else{
    $id = filter_var($_GET['id'], FILTER_VALIDATE_INT);
    if(!$id){
    header('Location: adminp.php');
    die();
    }else{
      $query = "DELETE FROM games WHERE gameID = :id LIMIT 1";
      $result = $db_connection -> prepare($query);
      $result -> execute([
      'id' => $id
      ]);
      header('Location: adminp.php');
    }
  }