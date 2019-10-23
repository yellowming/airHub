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
    public $viewData;
    public $loginUri;
    public $currentUri;
    function __construct()
    {
        parent::__construct();
        $this->load->model('adminUriModel');
        $this->currentUri[] = $this->router->directory.$this->router->class.'/'.$this->router->method;
        if($this->router->method === 'index') $this->currentUri[] = $this->router->directory.$this->router->class;
        if($this->router->class === $this->router->default_controller) $this->currentUri[] = rtrim($this->router->directory, "/");
        $this->loginUri = 'admin/user/login';
        $this->login_verify();//检查登录
        $this->viewData = [
            'metal' => [],
            'siderMenu' => '',
            'title' => '',
            'data' => [],
            'template' => [
                'path' => '',
                'prepend' => '',
                'append' => ''
            ],
            'alert' => [],
            'breadcrumb' => false,
            'uriPath' => []
        ];
    }

    public function _remap($method, $params = array())
    {
        $is_ajax = $this->input->is_ajax_request();
        $is_pjax = $this->input->server('HTTP_X_PJAX');
        $this->viewData['template']['path'] = $this->router->directory.$this->router->class.'_'.$method;
        if($is_ajax && !$is_pjax) $method = $method.'_'.$this->input->method();
        if (method_exists($this, $method)){
            call_user_func_array(array($this, $method), $params);
            if($is_ajax){
                if($is_pjax){
                    $this->setUriPath();
                    echo $this->viewData['template']['prepend'];
                    echo $this->load->view('admin/breadcrumb',['breadcrumb'=>$this->viewData['breadcrumb'],'uriPath'=>$this->viewData['uriPath']],true);
                    echo $this->load->view('admin/alert',['alert'=>$this->viewData['alert']],true);
                    echo $this->load->view($this->viewData['template']['path'],$this->viewData['data'],true);
                    echo $this->viewData['template']['append'];
                    return;
                }
                return $this->output->set_content_type('application/json')->set_output(json_encode($this->viewData['data']));
            }
            $dirArr = explode("/", rtrim($this->router->directory, "/"));
            if(in_array($this->loginUri, $this->currentUri)){
                return $this->load->view($dirArr[0].'/login', $this->viewData);
            }else{
                $this->setUriPath();
                $this->viewData['siderMenu'] = $this->renderSiderMenuTree();
                return $this->load->view($dirArr[0].'/index', $this->viewData);
            }
        }else{
            show_404();
        }
    }

    public function _output($output)
    {
        echo $output;
        //dump($this->router);
    }

    private function login_verify(){
        $isLoginPage = in_array($this->loginUri, $this->currentUri);
        $logined = isset($_SESSION['admin_logined']);
        if(!$logined && !$isLoginPage){
            redirect($this->loginUri);
        }elseif($logined && $isLoginPage){
            redirect('/admin');
        }
    }

    
    private function renderSiderMenuTree($prefix = 'menu', $pid = null){
        $uris = $this->adminUriModel->getChildrenById($pid);
        $html = '';
        $hasActive = false;
        foreach($uris as $index=>$uri){
            $isActive = in_array($uri, $this->viewData['uriPath']);
            if($isActive) $hasActive = true;
            if($uri['uri']){
                $html .= '<li'.($isActive?' class="active"':'').'><a href="'.base_url($uri['uri']).'"><i class="'.($uri['icon']?$uri['icon']:'far').'"></i> '.$uri['name'].'</a></li>';
            }else{
                $new_prefix = $prefix.'_'.$index;
                $sub_menu = $this->renderSiderMenuTree($new_prefix, $uri['_id']);
                $html .= '<li'.($isActive?' class="active"':'').'><span data-target="#'.$new_prefix.'" data-toggle="collapse"><i class="'.($uri['icon']?$uri['icon']:'far').'"></i> '.$uri['name'].'</span>';
                $html .= $sub_menu;
                $html .= '</li>';
            }
        }
        if($pid == null){
            return '<ul id="'.$prefix.'" style="width:15rem">'.$html.'</ul>';
        }else{
            $prefix_arr = explode("_", $prefix);
            array_pop($prefix_arr);
            return '<ul class="collapse'.($hasActive?' show':'').'" id="'.$prefix.'" data-parent="#'.implode("_", $prefix_arr).'">'.$html.'</ul>';
        }
    }
    private function setUriPath(){
        $this->viewData['uriPath'] = $this->adminUriModel->getCurrentPath($this->currentUri);
    }
    public function breadcrumb(){
        $this->viewData['breadcrumb'] = true;
    }

    public function alert($content = '', $type = 'primary'){
        $this->viewData['alert'][] = [
            'content' => $content,
            'type' => $type
        ];
    }
    public function setData($key,$val){
        $this->viewData['data'][$key] = $val;
    }
    public function viewPrepend($html){
        $this->viewData['template']['prepend'] .= $html;
    }
    public function viewAppend($html){
        $this->viewData['template']['append'] .= $html;
    }
    
}