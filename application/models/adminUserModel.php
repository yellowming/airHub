<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminUserModel extends CI_Model {
    private $DB;
	public function __construct()
    {
		parent::__construct();
		$this->DB = mongo_connection('local')->FinTV;
    }
	public function getAll()
	{
		$collection_user = $this->DB->Admin_user;
        $cursor_user = $collection_user->find();
        $users = [];
		foreach($cursor_user as $user){
            $users[] = $user;
        }
        return $users;
	}
}