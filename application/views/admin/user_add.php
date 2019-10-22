
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?=base_url('admin')?>"><i class="fas fa-home"></i> 首页</a></li>
        <li class="breadcrumb-item">系统与设置</li>
        <li class="breadcrumb-item"><a href="<?=base_url('admin/user')?>">用户管理</a></li>
        <li class="breadcrumb-item active" aria-current="page">新增用户</li>
    </ol>
</nav>

<div class="container-fluid pb-3">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form class="row" method="post">
                        <div class="col-8">
                            <div class="form-group">
                                <label for="inputEmail">邮箱</label>
                                <input type="email" name="email" class="form-control" id="inputEmail">
                            </div>
                            <div class="form-group">
                                <label for="inputUserName">用户名</label>
                                <input type="text" name="username" class="form-control" id="inputUserName">
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">密码</label>
                                <input type="password" name="password" class="form-control" id="inputPassword">
                            </div>
                            <div class="form-group">
                                <label for="inputPasswordConfirm">重复密码</label>
                                <input type="password" name="passwordConfirm" class="form-control" id="inputPasswordConfirm">
                            </div>
                            <div class="form-group">
                                <label for="inputRole">角色</label>
                                <select class="form-control" name="role_id" id="inputRole">
                                    <option value="1">管理员</option>
                                    <option value="2">编辑员</option>
                                    <option value="3">审核员</option>
                                    <option value="4">实习生</option>
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