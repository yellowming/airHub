<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class APIList extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('apiModel');
    }
	public function index_get(){
    $apis = $this->apiModel->collection->find();
    $apis = $apis ? MongoVal($apis) : [];
    $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['apis'=>$apis]));
  }

  private function get_api_tree($group_id=null){
    $apis = $this->apiModel->collection->find(["group_id"=>$group_id]);
    $apis = $apis ? MongoVal($apis) : [];
    foreach($apis as $i=>$api){
      $children = $this->get_api_tree(toMongoID($api["_id"]));
      if(!empty($children)) $apis[$i]["children"] = $children;
      unset($apis[$i]["group_id"]);
    }
    return $apis;
  }
}
