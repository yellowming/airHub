<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class API extends Admin_Controller {
  function __construct(){
      parent::__construct();
      $this->load->model('apiModel');
  }

	public function index_get(){
    $id = $this->input->get("_id");
    $apis = $id ? $this->apiModel->collection->find(["_id"=>toMongoID($id)]) : $this->apiModel->collection->find();
    $apis = $apis ? MongoVal($apis) : [];
    $this->load->model('categoryModel');
    foreach($apis as $index=>$api){
      if(!$api["category_id"]) continue;
      $category = $this->categoryModel->collection->findOne(["_id"=>toMongoID($api["category_id"])]);
      $apis[$index]["category"] = MongoVal($category);
    }
    $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['apis'=>$apis]));
  }

  public function index_put(){
    $input = $this->input->get();
    if(!isset($input['_id'])) show_404();
    try {$ObjectId = new MongoDB\BSON\ObjectId($input['_id']); } catch (\Throwable $th)  {show_404();}
    $api = $this->apiModel->collection->findOne(['_id'=>$ObjectId]);
    if(!$api) show_404();
    $api = MongoVal($api);
    unset($api["_id"]);
    $this->load->library('form_validation');
    $this->form_validation->set_data($input);
    $this->form_validation->set_rules('name', '名称', ['trim','required','max_length[20]',['is_unique',function($name) use ($api){
      if($name === $api['name']) return true;
      $api = $this->apiModel->collection->findOne(["name"=>$name]);
      return $api===null?true:false;
    }]]);
    $this->form_validation->set_rules('title', '标题', ['trim','required','max_length[20]']);
    $this->form_validation->set_rules('uri', 'URI', ['trim','required','max_length[200]',['is_unique',function($uri) use ($api){
      if($uri === $api['uri']) return true;
      $api = $this->apiModel->collection->findOne(["uri"=>$uri]);
      return $api===null?true:false;
    }]]);
    $this->form_validation->set_rules('method', 'Method', ['required','in_list[get,post,delete,put,patch]']);
    if($this->form_validation->run()){
      $update = [];
      foreach($api as $key=>$filed){
        if(isset($input[$key])) $update[$key] = $filed;
      }
      $updateResult = $this->apiModel->collection->updateOne(['_id' => $ObjectId],[ '$set' => $update]);
      if($updateResult->getModifiedCount()===0 || $updateResult->getMatchedCount()===0){
          $this->output->set_content_type('application/json')
          ->set_output(json_encode(['message'=>'filed error']))
          ->set_status_header(403);
      }else{
          $this->output->set_content_type('application/json')
          ->set_output(json_encode(['message'=>'ok']));
      }
    }else{
        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['message'=>'filed error','errors'=>$this->form_validation->error_array()]))
        ->set_status_header(403);
    }
  }

  public function index_post(){
    $requestData = json_decode($this->input->raw_input_stream, true);
    $this->load->library('form_validation');
    $this->form_validation->set_data($requestData);
    $this->form_validation->set_rules('name', '名称', ['trim','required','max_length[20]',['is_unique',function($name){
        $api = $this->apiModel->collection->findOne(["name"=>$name]);
        return $api===null?true:false;
    }]]);
    $this->form_validation->set_rules('title', '标题', ['trim','required','max_length[20]']);
    $this->form_validation->set_rules('uri', 'URI', ['trim','required','max_length[200]',['is_unique',function($uri){
      $api = $this->apiModel->collection->findOne(["uri"=>$uri]);
      return $api===null?true:false;
    }]]);
    $this->form_validation->set_rules('method', 'Method', ['required','in_list[get,post,delete,put,patch]']);
    if($this->form_validation->run()){
        $insert = [
            'name' => trim($requestData['name']),
            'title' => trim($requestData['title']),
            'uri' => trim($requestData['uri']),
            'method' => $requestData['method'],
            'category_id' => $requestData['category_id'],
            'authentication' => $requestData['authentication'],
            'authorization' => $requestData['authorization']
        ];
        $insertResult = $this->apiModel->collection->insertOne($insert);
        if($insertResult->getInsertedCount()===0){
            return $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'unknow error']))
            ->set_status_header(500);
        }
        return $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['message'=>'success']))
        ->set_status_header(201);
    }
    $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode(['message'=>'filed error','errors'=>$this->form_validation->error_array()]))
    ->set_status_header(403);
  }

  public function category_get(){
    $this->load->model('categoryModel');
    $parent = $this->categoryModel->collection->findOne(["name"=>"API_GROUP"]);
    $parent = $parent ? MongoVal($parent) : [];
    $categories = $this->categoryModel->collection->find(["parent_id"=>$parent["_id"]]);
    $categories = $categories ? MongoVal($categories) : [];
    $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['categories'=>$categories]));
  }
  //验证分类是否存在
  public function check_method($str){
    if(!in_array($str,["get","post","put","delete","patch"])){
      $this->form_validation->set_message('check_method', 'The {field} field can not be the word "test"');
      return FALSE;
    }
      else
      {
          return TRUE;
      }
  }
}
