<?php defined('BASEPATH') OR exit('No direct script access allowed');
function renderMenuTree($menuTree,$level_id = 'menu'){
    $html = '';
    foreach($menuTree as $menu){
        if(isset($menu['children'])){
            $html .= '<li><a href="#'.$level_id.'_'.$menu['id'].'" data-toggle="collapse"><i class="'.($menu['icon']?$menu['icon']:'far fa-circle').'"></i> '.$menu['name'].'</a>';
            $html .= '<ul class="collapse" id="'.$level_id.'_'.$menu['id'].'" data-parent="#'.$level_id.'">';
            $html .= renderMenuTree($menu['children']);
            $html .= '</ul>';
        }else{
            $html .= '<li><a href="'.base_url($menu['uri']).'"><i class="'.($menu['icon']?$menu['icon']:'far fa-circle').'"></i> '.$menu['name'].'</a>';
        }
        $html .= '</li>';
    }
    return $html;
}