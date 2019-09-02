<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CallBack extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function GitHubHook()
	{
		$hookSecret = '17328378001';
		log_message('debug', $this->input->raw_input_stream);
		$json = $this->input->raw_input_stream;
		$content = json_decode($json, true);
		
		//github发送过来的签名
		$signature = $this->input->server('HTTP_X_HUB_SIGNATURE')
		if (!$signature) {
		   show_404();
		}

		list($algo, $hash) = explode('=', $signature, 2);
		//计算签名  
		$payloadHash = hash_hmac($algo, $json, $secret);

		// 判断签名是否匹配  
		if ($hash === $payloadHash) {
			//$cmd = "cd $target && git pull";
			//$res = shell_exec($cmd);

			$res_log = 'Success:'.PHP_EOL;
			$res_log .= $content['head_commit']['author']['name'] . ' 在' . date('Y-m-d H:i:s') . '向' . $content['repository']['name'] . '项目的' . $content['ref'] . '分支push了' . count($content['commits']) . '个commit：' . PHP_EOL;
			$res_log .= $res.PHP_EOL;
			$res_log .= '======================================================================='.PHP_EOL;
		  } else {
				$res_log  = 'Error:'.PHP_EOL;
				$res_log .= $content['head_commit']['author']['name'] . ' 在' . date('Y-m-d H:i:s') . '向' . $content['repository']['name'] . '项目的' . $content['ref'] . '分支push了' . count($content['commits']) . '>个commit：' . PHP_EOL;
				$res_log .= '密钥不正确不能pull'.PHP_EOL;
				$res_log .= '======================================================================='.PHP_EOL;
		  }
		  log_message('debug', $this->input->raw_input_stream);
	}
}
