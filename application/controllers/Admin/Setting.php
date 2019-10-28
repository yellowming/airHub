<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Setting extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('adminRoleModel');
    }
	public function index()
	{
        $roles = $this->adminRoleModel->collection->find();
        $this->setData('roles',$roles);
        $this->breadcrumb();
	}
}
