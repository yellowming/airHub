<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Welcome extends CI_Controller {
	private $sourceDB;
	private $targetDB;
	public function __construct()
    {
		parent::__construct();
		$this->sourceDB = mongo_connection('source')->FinTV;
		$this->targetDB = mongo_connection('target')->FinTV;
        
    }
	//mongodb迁移
	public function index()
	{
		
		$collection_Video = $this->sourceDB->Video;
		$last = $this->targetDB->video->find()->sort(['video_id' => -1])->limit(1);
		foreach($last as $t){
			$last = $t;
		}
		$cursor_Video = $collection_Video->find(['video_id'=>['$gt' => $last['video_id']],'status'=>'APPROVED','publish_time'=>['$gt' => new MongoDate(strtotime("-10 day")), '$lt' => new MongoDate(strtotime("-1 day"))]])->sort(['video_id' => -1])->limit(50);
		foreach($cursor_Video as $video){
			dump($video);
			//$this->targetDB->video->insert($video);
		}
			
		
		
	}
}
