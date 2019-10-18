<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<div class="d-flex flex-row bg-primary shadow top-nav">
    <a class="top-nav-brand text-center bg-dark" href="<?=base_url('admin')?>"  style="width:15rem;">
        <img src="/static/admin/images/logo.png" style="height:3rem" />
    </a>
    <a class="px-3" href="javascript:void(0);" style="font-size:1.5rem;text-decoration:none"><i class="fas fa-bars"></i></a>
    <div class="flex-grow-1 d-flex flex-row justify-content-end px-2"><a href="<?=base_url('admin/user/logout')?>">退出</a></div>
</div>
    