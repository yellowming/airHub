<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminUserModel extends CI_Model {
    private $collection;
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
}