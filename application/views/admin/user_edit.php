
<div class="container-fluid pb-3">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                   <form class="row" method="post" action="<?=current_url()?>">
                        <div class="col-8">
                            <div class="form-group">
                                <label for="inputUserName">用户名</label>
                                <input type="text" name="name" value="<?=$is_post?set_value('name'):$name ?>" class="form-control<?=$is_post?(empty(form_error('name'))?' is-valid':' is-invalid'):''?>" id="inputUserName">
                                <div class="invalid-feedback"><?=form_error('username')?></div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">邮箱</label>
                                <input type="email" name="email" value="<?=$is_post?set_value('email'):$email ?>" class="form-control<?=$is_post?(empty(form_error('email'))?' is-valid':' is-invalid'):''?>" id="inputEmail">
                                <div class="invalid-feedback"><?=form_error('email')?></div>
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">密码</label>
                                <input type="password" name="pwd" value="<?=$is_post?set_value('pwd'):'' ?>" class="form-control<?=$is_post?(empty(form_error('pwd'))?' is-valid':' is-invalid'):''?>" id="inputPassword">
                                <small id="passwordHelpBlock" class="form-text text-muted">为空则不修改密码</small>
                                <div class="invalid-feedback"><?=form_error('pwd')?></div>
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