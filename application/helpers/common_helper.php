<?php defined('BASEPATH') OR exit('No direct script access allowed');
function dump($obj, $isEnd = false){
    echo '<pre>';
    var_dump($obj);
    echo '</pre>';
    if($isEnd) die();
}

function cursor2array($el){
    if(gettype($el) === 'array'){
        $result = [];
        foreach($el as $key=>$val) $result[$key] = cursor2array($val);
        return $result;
    }
    if(gettype($el) === 'object'){
        if(is_a($el,'MongoDB\BSON\ObjectId')) return (string)$el;
        if(is_a($el,'MongoDB\Driver\Cursor')) return $el->toArray();
    }
    
    return $el;
}

