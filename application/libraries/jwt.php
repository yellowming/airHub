<?php
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Signer\Hmac\Sha256;
class jwt{
  protected $CI;
  private $iss;
  private $aud;
  private $signer_key;
  public $token;
  function __construct(){
    $this->CI =& get_instance();
    $this->iss = base_url();
    $this->aud = base_url('auth/login');
    $this->signer_key = $this->CI->config->item('encryption_key');
  }
  
  public function login($user){
    $signer = new Sha256();
    $token = (new Builder())->setIssuer($this->iss) // Configures the issuer (iss claim)
    ->setAudience($this->aud) // Configures the audience (aud claim)
    ->setId((string)$user['_id'], true) // Configures the id (jti claim), replicating as a header item
    ->setIssuedAt(time()) // Configures the time that the token was issued (iat claim)
    ->setExpiration(time() + 3600*24) // Configures the expiration time of the token (exp claim)
    ->sign($signer, $this->signer_key) // creates a signature using "testing" as key
    ->getToken(); // Retrieves the generated token
    $this->token = $token;
    return (string)$token;
  }

  public function verify($token){
    if(!$token) return false;
    $token = (new Parser())->parse((string) $token);
    $this->token = $token;
    $data = new ValidationData(); // It will use the current time to validate (iat, nbf and exp)
    $data->setIssuer($this->iss);
    $data->setAudience($this->aud);
    $data->setId($token->getHeader('jti'));
    return $token->validate($data);
  }

}