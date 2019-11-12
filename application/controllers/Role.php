<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Role extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
    }
	public function index_get()
	{
        $roles = $this->adminRoleModel->collection->find();
        $roles = $roles ? MongoVal($roles) : [];
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['roles'=>$roles]));
    }
    
}
