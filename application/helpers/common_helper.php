<?php defined('BASEPATH') OR exit('No direct script access allowed');
function dump($obj, $isEnd = false){
    echo '<pre>';
    var_dump($obj);
    echo '</pre>';
    if($isEnd) die();
}

function MongoVal($el){
    if(is_a($el, 'MongoDB\BSON\ObjectId')){
        return $el->__toString();
    }elseif(is_a($el, 'MongoDB\BSON\UTCDateTime')){
        return (int)(string)$el;
    }elseif(is_a($el,'MongoDB\Driver\Cursor') || gettype($el) === 'array'){
        $result = [];
        foreach($el as $key=>$value){
            $result[$key] = MongoVal($value);
        }
        return $result;
    }
    return $el;
}

function toMongoID($id){
    return new MongoDB\BSON\ObjectId($id);
}

