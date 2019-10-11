<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!doctype html>
<html lang="zh-cn" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <title>Dashboard Template · Bootstrap</title>
    <link href="/static/plugins/bootstrap-4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/admin/css/common.css" rel="stylesheet">
    <link href="//at.alicdn.com/t/font_890924_fj1rnfuxyon.css" rel="stylesheet">
    <?=$template['prepend']?>
</head>
<body class="d-flex flex-column h-100">
    <?=$this->load->view('admin/header',[],true)?>
    <div class="d-flex flex-row h-100">
        <?=$this->load->view('admin/menu',[],true)?>
        <div class="flex-grow-1 p-2 bg-gradient-primary" id="main">
            <?=$this->load->view($template['path'],$data,true)?>
        </div>
    </div>
    <script src="/static/plugins/jquery-3.4.1.min.js"></script>
    <script src="/static/plugins/jquery.pjax.js"></script>
    <script src="/static/plugins/bootstrap-4.3.1/js/bootstrap.min.js"></script>
    <script src="/static/admin/js/common.js"></script>
    <?=$template['append']?>
</body>
</html>