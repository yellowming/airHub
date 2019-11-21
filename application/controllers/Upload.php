
<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Upload extends Admin_Controller {
	public function index_post(){
    $config = [
      'upload_path' => './storage/',
      'max_size' => 100,
      'max_width' => 800,
      'max_height' => 800,
      'file_name' => new MongoDB\BSON\ObjectId().'png',
      'allowed_types' => 'gif|jpg|jpeg|png|bmp|ico'
    ];
    $this->load->library('upload', $config);
    if (!$this->upload->do_upload('file')){
        $error = array('error' => $this->upload->display_errors());
        $this->output->set_content_type('application/json')
        ->set_output(json_encode(['message'=>'not found','errors'=>$error]))
        ->set_status_header(404);
    }else{
      $data = $this->upload->data();
      $data['url'] = base_url('/storage/'.$data['file_name']);
        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($data));
    }
	}
	
}
