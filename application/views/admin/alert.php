<?php if(!empty($alert)):?>
<div class="px-3">
    <?php foreach($alert as $item):?>
    <div class="alert alert-dismissible fade show alert-<?=$item['type']?>" role="alert">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <?=$item['content']?>
    </div>
    <?php endforeach;?>
</div>
<?php endif;?>