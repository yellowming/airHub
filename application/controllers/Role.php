<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Role extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
    }
	public function index_get()
	{
        $_id = $this->input->get('_id');
        $where = $_id ? ["_id"=>toMongoID($_id)] : [];
        $role = $this->adminRoleModel->collection->find($where);
        $role = $role ? MongoVal($role) : [];
        $result = ['role'=>$role];
        $withAuthApis = $this->input->get('withAuthApis');
        if($withAuthApis){
            $apiGroupRoot = $this->categoryModel->collection->findOne(['name'=>"API_GROUP"]);
            $apiGroupRoot = Mongoval($apiGroupRoot);
            $apiGroups = $this->categoryModel->collection->find(['parent_id'=>$apiGroupRoot["_id"]]);
            $apiGroups = $apiGroups ? Mongoval($apiGroups) : [];
            $apis = $this->apiModel->collection->find(['authorization'=>true]);
            $apis = $apis ? MongoVal($apis) : [];
            $apiGroupMap = [];
            foreach($apiGroups as $index=>$apiGroup){
                $apiGroup["apis"] = [];
                $apiGroupMap[$apiGroup["_id"]] = $apiGroup;
            }
            $apiGroupMap["extra"] = ["title"=>"其它","name"=>"EXSTRA","apis"=>[]];
            foreach($apis as $api){
                if(isset($apiGroupMap[$api["category_id"]])){
                    $apiGroupMap[$api["category_id"]]["apis"][] = $api;
                }else{
                    $apiGroupMap["extra"]["apis"][] = $api;
                }
            }
            $result["authApis"] = $apiGroupMap;
        }
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($result));
    }

    public function index_put(){
        $update = $this->input->get();
        if(!$update["_id"]) show_404();
        $objectID = toMongoID($update["_id"]);
        unset($update["_id"]);
        $re = $this->adminRoleModel->collection->updateOne(['_id' => $objectID],[ '$set' => $update]);
        if($re->getMatchedCount() === 0) show_404();
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(["msg"=>"ok"]));
    }
    
}
