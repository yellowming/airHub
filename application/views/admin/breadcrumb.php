<?php if($breadcrumb):?>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?=base_url('admin')?>"><i class="fas fa-home"></i> 首页</a></li>
        <?php foreach($uriPath as $item):?>
        <li class="breadcrumb-item">
            <?php if($item['uri']):?>
                <a href="<?=base_url($item['uri'])?>"><?=$item['name']?></a>
            <?php else:?>
                <?=$item['name']?>
            <?php endif;?>
        </li>
        <?php endforeach;?>
    </ol>
</nav>
<?php endif;?>