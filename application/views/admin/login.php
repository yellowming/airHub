<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!doctype html>
<html lang="zh-cn" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <title>登录</title>
    <link href="/static/plugins/bootstrap-4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/admin/css/common.css" rel="stylesheet">
    <link href="/static/plugins/fontawesome-free-5.11.2-web/css/all.min.css" rel="stylesheet">
</head>
<body class="h-100">
    <div class="container-fluid h-100 bg-dark text-light">
        <div class="row h-100">
            <div class="col-8">
            </div>
            <div class="col-4 h-100 d-flex flex-column justify-content-between bg-info">
                <div class="p-2"></div>
                <div class="p-2">
                    <form action="<?=current_url()?>" method="post">
                        <div class="form-group">
                            <label for="email">邮箱:</label>
                            <input type="email" class="form-control" id="email" placeholder="请输入邮箱">
                        </div>
                        <div class="form-group">
                            <label for="pwd">密码:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="请输入密码">
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"> 保持登录状态
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">登录</button>
                    </form>
                </div>
                <div class="p-2"></div>
            </div>
        </div>
    </div>
    <script src="/static/plugins/jquery-3.4.1.min.js"></script>
    <script src="/static/plugins/bootstrap-4.3.1/js/bootstrap.min.js"></script>
</body>
</html>