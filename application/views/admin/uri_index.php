

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
