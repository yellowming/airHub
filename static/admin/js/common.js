/* globals Chart:false, feather:false */

(function () {
    'use strict'

    NProgress.configure({ showSpinner: false });
    if ($.support.pjax) {
      $.pjax.defaults.timeout = 6000
      $(document).pjax('a', '#main')
      $(document).on('pjax:send', function() {
        NProgress.start()
        NProgress.set(0.4)
        
      })
      $(document).on('pjax:complete', function() {
        NProgress.set(0.8)
        NProgress.inc()
      })
      $(document).on('pjax:complete', function() {
        NProgress.done()
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