<?php if($breadcrumb && !empty($uriPath)):?>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?=base_url('admin')?>"><i class="fas fa-home"></i> 首页</a></li>
        <?php foreach($uriPath as $item):?>
        <li class="breadcrumb-item">
            <?php if($item['uri']):?>
                <?php if(isset($item['parame'])):?>
                    <?php 
                        $uri = $item['uri'];
                        $name = $item['name'];
                        foreach($item['parame'] as $k=>$v){
                            $uri .= isset($this->viewData['data'][$k]) ? ('/'.$this->viewData['data'][$k]) : '';
                            $name .= isset($this->viewData['data'][$v]) ? '['.$this->viewData['data'][$v].']' : '';
                        }
                    ?>
                    <a href="<?=base_url($uri)?>"><?=$name?></a>
                <?php else:?>
                    <a href="<?=base_url($item['uri'])?>"><?=$item['name']?></a>
                <?php endif;?>
            <?php else:?>
                <?=$item['name']?>
            <?php endif;?>
        </li>
        <?php endforeach;?>
    </ol>
</nav>
<?php endif;?>