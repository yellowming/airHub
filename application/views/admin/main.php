<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title><?=$meta['title']?></title>
	<link href="https://cdn.bootcss.com/bootstrap-material-design/4.0.2/bootstrap-material-design.min.css" rel="stylesheet">
	<link href="https://cdn.bootcss.com/tether/1.4.7/css/tether.min.css" rel="stylesheet">
</head>
<body>

<div id="main" class="container-fluid">
<?=$content?>	
</div>
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/tether/1.4.7/js/tether.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-material-design/4.0.2/bootstrap-material-design.iife.min.js"></script>
<script src="https://cdn.bootcss.com/jquery.pjax/2.0.1/jquery.pjax.min.js"></script>
<script>
$(function(){
	$('body').bootstrapMaterialDesign();
	$(document).pjax('a[data-pjax]', '#main')
})

</script>
</body>
</html>