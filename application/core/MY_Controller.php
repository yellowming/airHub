<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller 
{
	public $meta = [
		'title' => 'airHub',
		'keywords' => '',
		'description' => ''
	];
	
    function __construct()
    {
		parent::__construct();
		
	}

	public function admin_view($template,$data=[]){
		$isPjax = $this->input->get_request_header('X-PJAX', TRUE);
		if($isPjax){
			$data['meta'] = $this->meta;
			$this->load->view('admin/'.$template, $data);
		}else{
			$this->load->view('admin/main', [
				'meta' => $this->meta,
				'content' => $this->load->view('admin/'.$template, $data, TRUE)
			]);
		}
	}

}