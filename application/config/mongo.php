<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['mongo'] = [
    'default' => [
        'host' => '192.168.115.83:27017',
        'db'   => 'admin',
        'user' => 'root',
        'pass' => 'jKVSHNCgT5WA'
    ],
    'target' => [
        'host' => '192.168.111.225:27017',
        'db'   => 'FinTV',
        'user' => 'FinTV',
        'pass' => '123456'
    ],
    'target_read' => [
        'host' => '192.168.111.225:27017',
        'db'   => 'FinTV',
        'user' => 'test',
        'pass' => 'test1231'
    ],
    'local' => [
        'host' => '127.0.0.1:27017',
        'db'   => 'FinTV',
        'user' => '',
        'pass' => ''
    ]
];

 