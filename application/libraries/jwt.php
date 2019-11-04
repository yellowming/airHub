<?php
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
class jwt{
  protected $CI;
  private $iss;
  private $signer_key;
  public $user;
  function __construct(){
    $this->CI =& get_instance();
    $this->iss = rtrim($this->CI->config->item('base_url'), '/');
    $this->signer_key = $this->CI->config->item('encryption_key');
  }
  
  public function login($user){
    $this->user = $user;
    $signer = new Sha256();
    $token = (new Builder())->setIssuer($this->iss) // Configures the issuer (iss claim)
    ->setAudience(current_url()) // Configures the audience (aud claim)
    ->setId((string)$user['_id'], true) // Configures the id (jti claim), replicating as a header item
    ->setIssuedAt(time()) // Configures the time that the token was issued (iat claim)
    ->setExpiration(time() + 3600) // Configures the expiration time of the token (exp claim)
    ->sign($signer, $this->signer_key) // creates a signature using "testing" as key
    ->getToken(); // Retrieves the generated token
    return (string)$token;
  }

}