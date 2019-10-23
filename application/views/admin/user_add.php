
<div class="container-fluid pb-3">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                <?php //echo form_open('',['class'=>'row']); ?>
                   <form class="row" method="post" action="<?=current_url()?>">
                        <div class="col-8">
                            <div class="form-group">
                                <label for="inputUserName">用户名</label>
                                <input type="text" name="username" value="<?php echo set_value('username'); ?>" class="form-control is-valid" id="inputUserName">
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">邮箱</label>
                                <input type="email" name="email" value="<?php echo set_value('email'); ?>" class="form-control" id="inputEmail">
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">密码</label>
                                <input type="password" name="password" value="<?php echo set_value('password'); ?>" class="form-control" id="inputPassword">
                            </div>
                            <div class="form-group">
                                <label for="inputPasswordConfirm">重复密码</label>
                                <input type="password" name="password_confirm" class="form-control" id="inputPasswordConfirm">
                            </div>
                            <div class="form-group">
                                <label for="inputRole">角色</label>
                                <select class="form-control" name="role_id" id="inputRole">
                                    <option value="1" <?=set_value('role_id')=='1'?'selected':''?>>管理员</option>
                                    <option value="2" <?=set_value('role_id')=='2'?'selected':''?>>编辑员</option>
                                    <option value="3" <?=set_value('role_id')=='3'?'selected':''?>>审核员</option>
                                    <option value="4" <?=set_value('role_id')=='4'?'selected':''?>>实习生</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="inputAvatar">头像</label>
                                <input type="file" class="form-control-file" id="inputAvatar">
                                <img id="image" src="../images/picture.jpg" alt="Picture">
                            </div>
                        </div>
                        <div class="form-group col-12">
                            <button type="submit" class="btn btn-primary">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>