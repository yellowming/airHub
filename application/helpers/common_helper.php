<?php defined('BASEPATH') OR exit('No direct script access allowed');
function dump($obj, $isEnd = false){
    echo '<pre>';
    var_dump($obj);
    echo '</pre>';
    if($isEnd) die();
}

function cursor2array($el){
    $result = [];
    if(gettype($el) === 'object' && is_a($el,'MongoDB\Driver\Cursor')){
        foreach($el as $row){
			foreach($row as $key=>$value){
				if(is_a($value, 'MongoDB\BSON\ObjectId')){
					$row[$key] = $value->__toString();
				}elseif(is_a($value, 'MongoDate')){
					$row[$key] = timeStamp2String($value->sec);
				}
			}
			$result[] = $row;
		}
    }
    return $result;
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

