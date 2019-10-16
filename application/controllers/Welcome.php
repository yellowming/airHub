<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Welcome extends CI_Controller {
	private $sourceDB;
	private $targetDB;
	public function __construct()
    {
		parent::__construct();
		$this->sourceDB = mongo_connection()->FinTV;
		$this->targetDB = mongo_connection('target')->FinTV;
        
    }
	//mongodb迁移
	public function migrate()
	{
		$collection_Channel = $this->sourceDB->Channel;
		$collection_Programme = $this->sourceDB->Programme;
		$collection_Video = $this->sourceDB->Video;

		$cursor_Channel = $collection_Channel->find(['status'=>'APPROVED']);
		foreach($cursor_Channel as $channel){
			//$this->targetDB->channel->insert($channel);
			$cursor_Programme = $collection_Programme->find(['status'=>'APPROVED','channel_id'=>$channel['channel_id']]);
			foreach ($cursor_Programme as $programme) {
				//$this->targetDB->programme->insert($programme);
				$cursor_Video = $collection_Video->find(['status'=>'APPROVED','programme_id'=>$programme['programme_id']])->sort(['video_id' => -1])->limit(50);
				foreach($cursor_Video as $video){
					//$this->targetDB->video->insert($video);
				}
				
			}
		}
		
		
	}
}
