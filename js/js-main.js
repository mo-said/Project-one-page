// ===== Scroll to Top ==== //
    $( document ).ready(function() {

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});
$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
});

    // ===== Nav bar ==== //
    $( document ).ready(function() {

  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    } 
    
  }); 

});

// ===== the weather buttons ===== //
    $( document ).ready(function() {

       $(function(){
        $('.targetDiv').hide();
           $('#div1').show();
        $('.btn-weather').click(function(){
              $('.targetDiv').hide();
              $('#div'+$(this).attr('target')).show();
        });
});
});

// ===== item img slide ===== //
    $( document ).ready(function() {

       $(function() {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
    });   
});

});