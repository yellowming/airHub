<?php $is_post = $this->input->method() === 'post'; ?>
<div class="container-fluid pb-3">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                   <form class="row" method="post" action="<?=current_url()?>">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="inputName">权限名称</label>
                                <input type="text" name="name" value="<?=$is_post?set_value('name'):$name ?>" class="form-control<?=$is_post?(empty(form_error('name'))?' is-valid':' is-invalid'):''?>" id="inputName">
                                <div class="invalid-feedback"><?=form_error('name')?></div>
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">描述</label>
                                <input type="description" name="description" value="<?=$is_post?set_value('description'):$description ?>" class="form-control<?=$is_post?(empty(form_error('description'))?' is-valid':' is-invalid'):''?>" id="inputDescription">
                                <div class="invalid-feedback"><?=form_error('description')?></div>
                            </div>
                            <div class="form-group">
                                <label>权限</label>
                                <div class="card py-3"><?=$uriHtml?></div>
                            </div>
                        </div>
                        
                        <div class="form-group col-12">
                            <button type="submit" class="btn btn-primary float-right">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>