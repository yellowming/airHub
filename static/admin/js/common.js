/* globals Chart:false, feather:false */

(function () {
    'use strict'
    NProgress.configure({ showSpinner: false });
    if ($.support.pjax) {
      $.pjax.defaults.timeout = 6000
      $(document).pjax('a', '#main').on('submit', 'form', function(event) {
        $.pjax.submit(event, '#main')
      }).on('pjax:send', function() {
        NProgress.start()
        NProgress.set(0.4)
      }).on('pjax:beforeReplace', function() {
        NProgress.set(0.8)
        NProgress.inc()
      }).on('pjax:end', function() {
        NProgress.done()
      }).on('pjax:error',function(){
        //alert(1)
      })
    }
    var $menuItems = $('#menu li>a,#menu li>span');
    $menuItems.click(function(){
      if($(this)[0].tagName == 'A'){
        $menuItems.parent().removeClass('active')
        $(this).parents('li').addClass('active')
      }
    })
    
    
    
    
    
  }())