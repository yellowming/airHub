<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminUriModel extends CI_Model {
    private $collection;
    function __construct()
    {
        parent::__construct();
        $this->collection = $this->DB()->FinTV->Admin_uri;
	}
    
    public function getChildrenById($id = null){
        $cursor = $this->collection->find(['parent_id'=>$id]);
        $result = [];
        foreach($cursor as $uri){
            $result[] = $uri;
        }
        return $result;
    }
    public function getAll()
    {
        $cursor = $this->collection->find();
        $uris = [];
		foreach($cursor as $uri){
            $uris[] = $uri;
        }
        return $uris;
    }
}