<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Upload extends Admin_Controller {
  function __construct(){
      parent::__construct();
  }
  
  public function avatar_post(){
    $config = [
      'upload_path' => './storage/avatar/',
      'max_size' => 10000,
      'max_width' => 400,
      'max_height' => 400,
      'file_name' => new MongoDB\BSON\ObjectId(),
      'allowed_types' => 'png|jpg|jpeg'
    ];
    $this->load->library('upload', $config);
    if (!$this->upload->do_upload('avatar')){
        $error = array('error' => $this->upload->display_errors());
        $this->output->set_content_type('application/json')
        ->set_output(json_encode(['message'=>'not found','errors'=>$error]))
        ->set_status_header(500);
    }else{
      $data = $this->upload->data();
      $avatar_url = '/storage/avatar/'.$data['file_name'];

      $this->load->library('image_lib', [
        'width' => 400,
        'height' => 400,
        'source_image' => '.'.$avatar_url
      ]);
      if ( ! $this->image_lib->resize()){
        return $this->output->set_content_type('application/json')
        ->set_output(json_encode(['message'=>$this->image_lib->display_errors()]))
        ->set_status_header(500);
      }

      $data['url'] = base_url('/storage/avatar/'.$data['file_name']);
      $updateResult = $this->adminUserModel->update(['_id' => new MongoDB\BSON\ObjectId($this->user['_id'])],[ '$set' => ['avatar'=>$avatar_url]]);
      if($updateResult->getModifiedCount()===0 || $updateResult->getMatchedCount()===0){
        $this->output->set_content_type('application/json')
        ->set_output(json_encode(['message'=>'not modify']))
        ->set_status_header(500);
      }
      @unlink(".{$this->user['avatar']}");
      $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($data));
    }
  }
}
