

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
                    <td scope="row"><?=$user['email']?></td>
                    <td><?=$user['name']?></td>
                    <td>
                        <a class="btn btn-sm btn-warning" href="<?=base_url('admin/user/edit/'.$user['_id'])?>" role="button">修改</a>
                        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#userDeleConfirmModal" data-id="<?=$user['_id']?>" data-name="<?=$user['name']?>">删除</button>
                    </td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>

    
</div>

<!-- Modal -->
<div class="modal fade" id="userDeleConfirmModal" tabindex="-1" role="dialog" aria-labelledby="userDeleConfirmModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="userDeleConfirmModalLabel">警告</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        确定要删除用户<span class="text-info" id="confirmUserName"></span>吗？
      </div>
      <div class="modal-footer">
            <form method="post">
                <input type="hidden" name="_id" id="confirmUserId"/>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                <button type="submit" class="btn btn-primary">确定</button>
            </form>
      </div>
    </div>
  </div>
</div>