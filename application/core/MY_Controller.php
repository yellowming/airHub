<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller 
{
    function __construct()
    {
		parent::__construct();
        
	}
}

class Admin_Controller extends MY_Controller
{
    public $user;
    public $roles;
    public $permissionApis;
    function __construct()
    {
        parent::__construct();
        
    }

    public function _remap($method, $params = array()){
        $input_method = $this->input->method();
        if($input_method === 'options'){
            return $this->setJwtHeader();
        }
        $this->setJwtHeader();
        $jwtMethod = $method.'_'.$input_method;
        if (!method_exists($this, $jwtMethod)){
            return $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(['message'=>'NotFound,undefined {$method}_{$input_method}']))
                ->set_status_header(404);
        }
        $this->load->model(['apiModel','adminUserModel','adminRoleModel', 'categoryModel']);
        if($this->authVerify()) call_user_func_array(array($this, $jwtMethod), $params);
    }

    public function _output($output){
        echo $output;
    }

    private function setJwtHeader(){
        $this->output->set_header("Access-Control-Allow-Origin: * ");
        $this->output->set_header("Access-Control-Allow-Headers: content-type,Authorization");
        $this->output->set_header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, PATCH");
    }

    private function getUser(){
        $token = $this->jwt->token;
        $user_id = $token->getHeader('jti');
        $userCursor = $this->adminUserModel->collection->findOne(['_id'=>new MongoDB\BSON\ObjectId($user_id)]);
        if(!$userCursor){
            return $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'user has been deleted']))
            ->set_status_header(400);
        }
        $user = MongoVal($userCursor);
        unset($user['pwd']);
        $this->user = $user;
        $rolesCursor = $this->adminRoleModel->collection->find(['_id'=>['$in'=>array_map('toMongoID',$user['roles'])]]);
        $roles = MongoVal($rolesCursor);
        $this->roles = $roles;
        $accessApis = [];
        foreach($roles as $role){
            $accessApis = array_unique(array_merge($accessApis, $role['apis']));
        }
        $accessApisIds = [];
        foreach($accessApis as $uriID){
            $accessApisIds[] = new MongoDB\BSON\ObjectId($uriID);
        }
        $apiCursor = $this->apiModel->collection->find(['_id'=>['$in'=>$accessApisIds]]);
        $permissions = [];
        foreach($apiCursor as $api) $permissions[$api['name']] = MongoVal($api);
        $this->permissionApis = $permissions;
    }

    private function authVerify(){
        $apis = $this->apiModel->collection->find();
        $apis = $apis ? MongoVal($apis) : [];
        foreach($apis as $api){
            if($this->input->method() === $api["method"] && $this->uri->uri_string === 'api'.$api["uri"]){
                if(!$api["authentication"]) return true; //如果接口不需要认证
                if(!$this->jwt->verify($this->input->get_request_header('Authorization', TRUE))){ //认证
                    $this->output
                        ->set_content_type('application/json')
                        ->set_output(json_encode(['message'=>'Unauthorized']))
                        ->set_status_header(401);
                    return false;
                }
                $this->getUser();
                if($api["authorization"] && !in_array($api, $this->permissionApis)){ //验证用户权限
                    $this->output
                        ->set_content_type('application/json')
                        ->set_output(json_encode(['message'=>'Forbidden']))
                        ->set_status_header(403);
                    return false;
                }
                return true;
            }
        }
        //没有符合的接口
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'NotFound']))
            ->set_status_header(404);
        return false;
    }

    
    
}