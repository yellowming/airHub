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
        try {$ObjectId = new MongoDB\BSON\ObjectId($id); } catch (\Throwable $th)  {show_404();}
        $role = $this->adminRoleModel->collection->findOne(['_id'=>$ObjectId]);
        if(!$role) show_404();
        foreach($role as $key=>$item){
            $this->setData($key,$item);
        }
        $access_uri = [];
        foreach($role['access_uri'] as $u) $access_uri[] = $u;
        $this->load->library('form_validation');
        $this->setData('is_post',false);
        if($this->input->method() === 'post'){
            $this->setData('is_post',true);
            $this->form_validation->set_rules('name', '权限名称', ['trim','required','min_length[3]','max_length[12]',['is_unique',function($name) use ($role){
                if($name === $role['name']) return true;
                $role = $this->adminRoleModel->collection->findOne(['name'=>$name]);
                return $role===null?true:false;
            }]]);
            $this->form_validation->set_rules('description', '描述', ['min_length[5]','max_length[20]']);
            if($this->form_validation->run()){
                $update = [
                    'name' => trim($this->input->post('name')),
                    'description' => $this->input->post('description'),
                    'access_uri' => []
                ];
                $access_uri = $this->input->post('access_uri');
                if(!empty($access_uri)){
                    foreach($access_uri as $uri) $update['access_uri'][] = new MongoDB\BSON\ObjectId($uri);
                }
                $updateResult = $this->adminRoleModel->collection->updateOne(['_id' => $ObjectId],[ '$set' => $update]);
                if($updateResult->getModifiedCount()===0 || $updateResult->getMatchedCount()===0){
                    $this->alert('没有改动');
                }else{
                    redirect('/admin/role');
                }
            }
        }
        
        $this->setData('uriHtml',$this->render_uri_checkbox(null, $access_uri));
        $this->breadcrumb();
    }
    
    private function render_uri_checkbox($pid = null, $checked = []){
        $uris = $this->adminUriModel->getChildrenById($pid);
        $html = "";
        foreach($uris as $uri){
            $isChecked = in_array($uri["_id"], $checked);
            $html .= '<div class="custom-control custom-checkbox custom-checkbox-lg">';
            $html .= '<input class="custom-control-input" '.($isChecked?'checked':'').' name="access_uri[]" type="checkbox" id="uri_'.$uri["_id"].'" value="'.$uri["_id"].'">';
            $html .= '<label class="custom-control-label" for="uri_'.$uri["_id"].'">'.$uri["name"].'</label>';
            $html .= $this->render_uri_checkbox($uri["_id"], $checked);
            $html .= '</div>';
        }
        return $html === "" ? "" : ('<div class="w-100 pl-3">'.$html.'</div>');
    }
}
