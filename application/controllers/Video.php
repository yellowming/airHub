<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Video extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('videoModel');
    }
	public function index_get(){
    $params = $this->input->get();
    $where = ['status'=>'APPROVED'];
    $count = $this->videoModel->collection->count($where);
    $videos = $this->videoModel->collection->find($where,[
        'limit' => (int)$params['itemsPerPage'],
        'skip' => ((int)$params['page']-1)*(int)$params['itemsPerPage'],
        'sort' => [$params['mustSort'] => -1,"_id" => -1]
    ]);

    $videos = $videos ? MongoVal($videos) : [];
    $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['videos'=>$videos, 'params'=>$params, 'count'=>$count]));
  }
}
