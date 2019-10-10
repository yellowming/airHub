<div class="sidebar align-items-start bg-dark text-light" style="width:15rem">
    <ul id="menu">
      <li class="">
        <a class="iconfont icon-dashboard" href="<?=base_url('admin')?>">首页</a>
      </li>
      <li class="active">
        <a class="iconfont icon-dashboard" href="#menu1" data-toggle="collapse"> Link 1</a>
        <ul class="collapse" id="menu1" data-parent="#menu">
          <li class="">
            <a class="iconfont icon-cc-dot-o" href="#menu1_1" data-toggle="collapse">Link 1</a>
            <ul class="collapse" id="menu1_1" data-parent="#menu1">
              <li class="">
                <a class="iconfont icon-cc-dot-o" href="#">Link 1</a>
              </li>
              <li class="">
                <a class="iconfont icon-cc-dot-o" href="#">Link 2</a>
              </li>
              <li class="">
                <a class="iconfont icon-cc-dot-o" href="#">Link 3</a>
              </li>
            </ul>
          </li>
          <li class="">
            <a class="iconfont icon-cc-dot-o" href="#">Link 2</a>
          </li>
          <li class="">
            <a class="iconfont icon-cc-dot-o" href="#">Link 3</a>
          </li>
        </ul>
      </li>
      <li class="">
        <a class="iconfont icon-cc-dot-o" href="#menu2" data-toggle="collapse">Link 2</a>
        <ul class="collapse" id="menu2" data-parent="#menu">
          <li class="">
            <a class="iconfont icon-cc-dot-o" href="#">Link 1</a>
          </li>
          <li class="">
            <a class="iconfont icon-cc-dot-o" href="#">Link 2</a>
          </li>
          <li class="">
            <a class="iconfont icon-cc-dot-o" href="#">Link 3</a>
          </li>
        </ul>
      </li>
      <li class="">
        <a class="iconfont icon-cc-dot-o" href="#">Link 3</a>
      </li>
    </ul>
</div>