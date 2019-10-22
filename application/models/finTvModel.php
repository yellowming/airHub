<?php defined('BASEPATH') OR exit('No direct script access allowed');
class FinTvModel extends CI_Model {
    private $sourceVideoCollection;
    private $targetVideoCollection;
    function __construct()
    {
        parent::__construct();
        $this->sourceVideoCollection = $this->DB('source')->FinTV->Video;
        $this->targetVideoCollection = $this->DB('target')->FinTV->video;
	}
    
    public function getAll(){
        $cursorTarget = $this->targetVideoCollection->find()->limit(10);
        $cursorSource = $this->sourceVideoCollection->find()->limit(10);
        
        return [];
    }
    
}