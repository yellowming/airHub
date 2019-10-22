<?php defined('BASEPATH') OR exit('No direct script access allowed');
function dump($obj, $isEnd = false){
    echo '<pre>';
    var_dump($obj);
    echo '</pre>';
    if($isEnd) die();
}

function mongo_connection($conection = 'default'){
    
    $CI =& get_instance();
    $CI->config->load("mongo");
    $clientArray = $CI->config->item('mongo');
    if (!isset($clientArray[$conection])){
        show_error("The Database must be set to connect to MongoDB", 500);
    }
    $client = $clientArray[$conection];
    $host	= trim($client['host']);
    $user = trim($client['user']);
    $pass = trim($client['pass']);
    $db = trim($client['db']);
    $connection_string = "mongodb://";
    if ( ! empty($user) && ! empty($pass)){
        $connection_string .= "{$user}:{$pass}@";
    }
    if (empty($client['host'])){
        show_error("The Host must be set to connect to MongoDB", 500);
    }
    $connection_string .= "{$host}";
    if (!empty($client['db'])){
        $connection_string .= '/'.$db;
    }
    return new MongoClient($connection_string);
}