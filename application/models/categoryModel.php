<?php defined('BASEPATH') OR exit('No direct script access allowed');
class CategoryModel extends CI_Model {
  public $collection;
	public function __construct(){
    parent::__construct();
    $this->collection = $this->DB()->FinTV->category;
  }
}