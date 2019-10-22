

<div class="container-fluid pb-3">
    <div class="clearfix pb-2">
        <a class="btn btn-primary float-right" href="<?=base_url('admin/user/add')?>" role="button">新增用户</a>
    </div>

    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">邮箱</th>
                <th scope="col">名称</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($users as $user):?>
                <tr>
                    <th scope="row"><?=$user['email']?></th>
                    <td><?=$user['name']?></td>
                    <td><button type="button" class="btn btn-sm btn-warning">修改</button></td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>

    
</div>