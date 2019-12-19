<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Category extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('categoryModel');
    }
	public function index_get(){
    $params = $this->input->get();
    $result = [];
    if($params["parent_name"]){
      $parent = $this->categoryModel->collection->find(["name"=>"API_GROUP"]);
      $categories = $this->categoryModel->collection->find(["parent_id"=>$parent["_id"]]);
      $categories = $categories ? MongoVal($categories) : [];
      $result["categories"] = $categories;
    }else{
      $categories = $this->categoryModel->collection->find();
      $categories = $categories ? MongoVal($categories) : [];
      $result["categories"] = $categories;
    }
    $videos = $videos ? MongoVal($videos) : [];
    $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($result));
  }
}
