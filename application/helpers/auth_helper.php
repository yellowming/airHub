<?php
use Lcobucci\JWT\Signer\Key;
class jwt{
  private $url;
  private $key;
  public $user;
  function __construct(){
    $CI =& get_instance();
    $this->url = rtrim($CI->config->item('base_url'), '/');
    $this->key = $key = new Key($CI->config->item('encryption_key'));
	}

}