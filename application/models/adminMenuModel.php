<?php defined('BASEPATH') OR exit('No direct script access allowed');
class Blog_model extends CI_Model {

    function __construct()
    {
		parent::__construct();
        
	}
    

    public function get_tree($pid = null)
    {
        $menuTree = $this->get_children_by_id($pid);
        foreach($menuAll as &$menu){

        }
    }
    public function get_children_by_id($id){
        $result = [];
        $menuAll = $this->get_all();
        foreach($menuAll as $menu){
            if($menu['parent_id'] === $id) $result[] = $menu;
        }
        return $result;
    }
    public function get_all()
    {
        return [
            [
                'id' => 0,
                'title' => '首页',
                'icon' => 'dashboard',
                'uri' => 'admin',
                'parent_id' => null
            ],
            [
                'id' => 1,
                'title' => '系统与设置',
                'icon' => null,
                'uri' => null,
                'parent_id' => null
            ],
            [
                'id' => 2,
                'title' => '网站设置',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
            [
                'id' => 3,
                'title' => '用户管理',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
            [
                'id' => 4,
                'title' => '角色与权限',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
            [
                'id' => 3,
                'title' => '菜单管理',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
        ];
    }
}