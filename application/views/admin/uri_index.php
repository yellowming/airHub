
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?=base_url('admin')?>">首页</a></li>
        <li class="breadcrumb-item">系统与设置</li>
        <li class="breadcrumb-item active" aria-current="page">路由管理</li>
    </ol>
</nav>
<div class="container-fluid pb-3">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">名称</th>
                <th scope="col">图标</th>
                <th scope="col">路由</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($uris as $uri):?>
                <tr>
                    <th scope="row"><?=$uri['_id']?></th>
                    <td><?=$uri['name']?></td>
                    <td><i class="<?=$uri['icon']?>"></i></td>
                    <td><?=$uri['uri']?></td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>

    
</div>