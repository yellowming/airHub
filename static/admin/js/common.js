/* globals Chart:false, feather:false */

(function () {
    'use strict'
    NProgress.configure({ showSpinner: false });
    if ($.support.pjax) {
      $.pjax.defaults.timeout = 6000
      $(document).pjax('a:not(.pjax-disabled)', '#main').on('submit', 'form:not(.pjax-disabled)', function(event) {
        $.pjax.submit(event, '#main')
      }).on('pjax:send', function() {
        NProgress.start()
        NProgress.set(0.4)
      }).on('pjax:beforeReplace', function() {
        NProgress.set(0.8)
        NProgress.inc()
      }).on('pjax:end', function() {
        NProgress.done()
        $('.modal-backdrop').remove();
      }).on('pjax:error',function(){
        
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