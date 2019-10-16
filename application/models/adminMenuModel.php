<?php defined('BASEPATH') OR exit('No direct script access allowed');
class AdminMenuModel extends CI_Model {
    public $allMenu;
    function __construct()
    {
        parent::__construct();
        $this->allMenu = $this->get_all();
        
	}
    

    public function get_tree($pid = null)
    {
        $menuTree = $this->get_children_by_id($pid);
        foreach($menuTree as $k=>$menu){
            $children = $this->get_tree($menu['id']);
            if(count($children) > 0) $menuTree[$k]['children'] = $children;
        }
        return $menuTree;
    }
    public function get_children_by_id($id){
        $result = [];
        foreach($this->allMenu as $menu){
            if($menu['parent_id'] === $id) $result[] = $menu;
        }
        return $result;
    }
    public function get_all()
    {
        return [
            [
                'id' => 0,
                'name' => '首页',
                'icon' => 'fas fa-tachometer-alt',
                'uri' => 'admin',
                'parent_id' => null
            ],
            [
                'id' => 1,
                'name' => '系统与设置',
                'icon' => 'fas fa-wrench',
                'uri' => null,
                'parent_id' => null
            ],
            [
                'id' => 2,
                'name' => '网站设置',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
            [
                'id' => 3,
                'name' => '用户管理',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
            [
                'id' => 4,
                'name' => '角色与权限',
                'icon' => null,
                'uri' => 'admin',
                'parent_id' => 1
            ],
            [
                'id' => 5,
                'name' => '菜单管理',
                'icon' => null,
                'uri' => 'admin/menu',
                'parent_id' => 1
            ],
            [
                'id' => 6,
                'name' => '图标',
                'icon' => 'fas fa-icons',
                'uri' => 'admin/icon',
                'parent_id' => null
            ],
        ];
    }
}