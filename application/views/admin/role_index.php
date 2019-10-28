<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>


<div class="container-fluid pb-3">
    <div class="clearfix pb-2">
        <a class="btn btn-primary float-right" href="<?=base_url('admin/role/add')?>" role="button">新增角色</a>
    </div>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">名称</th>
                <th scope="col">描述</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($roles as $role): ?>
                <tr>
                    <th scope="row"><?=$role['name']?></th>
                    <td><?=$role['description']?></td>
                    <td>
                        <a class="btn btn-sm btn-warning" href="<?=base_url('admin/role/edit/'.$role['_id'])?>" role="button">修改</a>
                        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#roleDeleConfirmModal" data-id="<?=$role['_id']?>" data-name="<?=$role['name']?>">删除</button>    
                    </td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>

    
</div>


