
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?=base_url('admin')?>">首页</a></li>
        <li class="breadcrumb-item">系统与设置</li>
        <li class="breadcrumb-item active" aria-current="page">用户管理</li>
    </ol>
</nav>
<div class="container-fluid pb-3">
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