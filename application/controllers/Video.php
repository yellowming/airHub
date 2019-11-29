<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Video extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('videoModel');
    }
	public function index_get(){
    $videos = $this->videoModel->collection->find(['status'=>'APPROVED'],
    [
        'limit' => 20,
        'sort' => ['_id' => -1]
    ]);
    
    $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['videos'=>MongoVal($videos)]));
  }
}
