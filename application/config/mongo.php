<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------
| mongodb配置
| -------------------------------------------------------------------
| 详细文档见https://docs.mongodb.com/php-library/current/
| -------------------------------------------------------------------
| 配置详解
| -------------------------------------------------------------------
|
|	mongodb://myUsername:myPassword@rs1.example.com,rs2.example.com/?ssl=true&replicaSet=myReplicaSet&authSource=admin
|	
*/
$config['mongo'] = [
    'source' => 'mongodb://root:jKVSHNCgT5WA@192.168.115.83:27017/admin',
    'target' => 'mongodb://FinTV:123456@192.168.111.225:27017/FinTV',
    'target_read' => 'mongodb://test:test1231@192.168.111.225:27017/FinTV',
    'default' => 'mongodb://127.0.0.1:27017'
];

 