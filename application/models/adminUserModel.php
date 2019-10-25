<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminUserModel extends CI_Model {
    public $collection;
	public function __construct()
    {
        parent::__construct();
        $this->collection = $this->DB()->FinTV->Admin_user;
    }
	public function getAll()
	{
        $cursor_user = $this->collection->find();
        $users = [];
		foreach($cursor_user as $user){
            $users[] = $user;
        }
        return $users;
    }
    public function getOneByEmail($email)
	{
        return $this->collection->findOne(['email'=>$email]);
    }
    
    public function getOneByName($username){
        return $this->collection->findOne(['name'=>$username]);
    }
    public function insert($user){
        return $this->collection->insertOne($user);
    }
    public function update($filter, $update){
        return $this->collection->updateOne($filter, $update);
    }
    public function deleteOne($where){
        return $this->collection->insertOne($where);
    }
}