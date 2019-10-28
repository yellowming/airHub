<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminUriModel extends CI_Model {
    public $collection;
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
    public function getCurrentPath($currArr){
        $result = [];
        $current = $this->collection->findOne(['uri'=>['$in'=>$currArr]]);
        if($current){
            $parents = $this->getParents($current['parent_id']);
            $parents[] = $current;
            $result = $parents;
        }
        return $result;
    }
    public function getParents($pid){
        $result = [];
        if($pid){
            $parent = $this->collection->findOne(['_id'=>$pid]);
            if($parent){
                $parents = $this->getParents($parent['parent_id']);
                $parents[] = $parent;
                $result = $parents;
            }
        }
        return $result;
    }
}