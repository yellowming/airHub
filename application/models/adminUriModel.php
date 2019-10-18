<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminUriModel extends CI_Model {
    private $DB;
    function __construct()
    {
        parent::__construct();
        $this->DB = mongo_connection('local')->FinTV;
        
	}
    
    public function getChildrenById($id = null){
        $collection = $this->DB->Admin_uri;
        $cursor = $collection->find(['parent_id'=>$id]);
        $result = [];
        foreach($cursor as $uri){
            $result[] = $uri;
        }
        return $result;
    }
    public function getAll()
    {
        $collection = $this->DB->Admin_uri;
        $cursor = $collection->find();
        $uris = [];
		foreach($cursor as $uri){
            $uris[] = $uri;
        }
        return $uris;
    }
}