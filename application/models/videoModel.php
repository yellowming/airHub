<?php defined('BASEPATH') OR exit('No direct script access allowed');
class videoModel extends CI_Model {
    public $collection;
    function __construct()
    {
        parent::__construct();
        $this->collection = $this->DB('source')->FinTV->Video;
	}
}