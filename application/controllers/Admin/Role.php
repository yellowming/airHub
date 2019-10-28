<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Role extends Admin_Controller {
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
    
    public function edit($id)
	{
        if(!$id) show_404();
        $ObjectId = new MongoDB\BSON\ObjectId($id);
        $role = $this->adminRoleModel->collection->findOne(['_id'=>$ObjectId]);
        if(!$role) show_404();
        foreach($role as $key=>$item){
            $this->setData($key,$item);
        }
        $this->breadcrumb();
	}
}
