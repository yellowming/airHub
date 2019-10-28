
<div class="container-fluid pb-3">
    <div class="row" id="icon_row">
        <?php foreach($icons as $key=>$icon): ?>
            <?php foreach($icon['styles'] as $style): ?>
                <div class="col-3 py-1">
                    <div class="card">
                        <div class="card-header"><?=$key?></div>
                        <div class="card-body text-center">
                            <i style="font-size:2rem" class="text-primary fa<?=substr( $style, 0, 1 )?> fa-<?=$key?>"></i>
                        </div>
                    </div>
                </div>
            <?php endforeach;?>
        <?php endforeach;?>
    </div>
</div>
