<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class CI_Model 
{
    private $mongoConections;
    function __construct()
    {
		$this->mongoConections = [];
    }
    
    private function mongo_connection($conection){
        $CI =& get_instance();
        $CI->config->load("mongo");
        $mongoConfig = $CI->config->item('mongo');
        if (!isset($mongoConfig[$conection])){
            show_error("The Database {$conection} must be configured", 500);
        }
        return new MongoDB\Client($mongoConfig[$conection]);
    }
    /*
    | -------------------------------------------------------------------
    | mongodb
    | -------------------------------------------------------------------
    | 详细文档见https://docs.mongodb.com/php-library/current/
    | -------------------------------------------------------------------
    */
    public function DB($conection = 'default'){
        if(!isset($this->mongoConections[$conection])){
            $this->mongoConections[$conection] = $this->DB = $this->mongo_connection($conection);
        }
        return $this->mongoConections[$conection];
    }

    
}