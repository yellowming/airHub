<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Icon extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        
    }
	public function index()
	{
        $this->load->helper('yml');
        $data = Spyc::YAMLLoad('./static/plugins/fontawesome-free-5.11.2-web/metadata/icons.yml');
        $this->viewData['data']['icons'] = $data;
	}
}
