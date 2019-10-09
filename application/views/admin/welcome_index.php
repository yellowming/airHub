<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<?=$this->load->view('admin/header',[],true)?>
<div class="d-flex flex-row shadow">
  <div class="p-2 bg-warning"  style="width:220px">brand</div>
  <div class="flex-grow-1"></div>
  <ul class="nav p-2">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
  
</div>
<div class="d-flex flex-row h-100">
  <nav class="navbar align-items-start" style="width:220px">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  </nav>
  <div class="flex-grow-1 p-2 bg-light">Flex item 3</div>
</div>
<?=$this->load->view('admin/footer',[],true)?>