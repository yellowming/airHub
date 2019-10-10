/* globals Chart:false, feather:false */

(function () {
    'use strict'
    
    if ($.support.pjax) {
      $(document).pjax('a', '#main')
    }
    $(document).on('pjax:error', function(xhr,status) {
      console.log(status)
      xhr.abort();
      return
    })
    
    $(document).on('pjax:click', function(xhr,op) {
      console.log(xhr)
      return
      xhr.abort();
    })
  }())