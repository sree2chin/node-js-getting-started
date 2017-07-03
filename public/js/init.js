(function($){
  $(function(){

    $('.button-collapse').sideNav();
    
    // Swipeable Tabs Demo Init
    if ($('#tabs-swipe-demo').length) {
      $('#tabs-swipe-demo').tabs({ 'swipeable': true });
    }
    $(document).ready(function(){
      $('.s-img-carousel').carousel();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space