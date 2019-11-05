<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends Admin_Controller {
    function __construct(){
        parent::__construct();
        
    }
	public function login_post(){
        $input = json_decode($this->input->raw_input_stream);
        $userCursor = $this->adminUserModel->collection->findOne(['email'=>$input->email]);
        if(!$userCursor){
            return $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'NotFound']))
            ->set_status_header(404);
        }
        $user = MongoVal($userCursor);
        if(!password_verify($input->password, $user['pwd'])){
            return $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'Password Error']))
            ->set_status_header(400);
        }
        $token = $this->jwt->login($user);
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['token'=>$token]));
    }
    
    public function user_get(){
        $token = $this->jwt->token;
        $user_id = $token->getHeader('jti');
        $userCursor = $this->adminUserModel->collection->findOne(['_id'=>new MongoDB\BSON\ObjectId($user_id)]);
        $user = MongoVal($userCursor);
        unset($user['pwd']);
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['user'=>$user]));
    }
}
