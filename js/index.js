

/*function scrollToTop() { 
    $(window).scrollTop(0); 
} */

$(document).ready(function(){
      $(".backToTop").on('click', function () {
          $("html, body").animate({scrollTop: 0}, 400);
      });
  });
  
$(window).scroll(function(){
    if($(this).scrollTop()>300) $('.backToTop').fadeIn();
    else $('.backToTop').fadeOut();
})

function white()
{
    let el = document.getElementById( 'mainbox' );
    if( el )
    el.className = 'MainContentWhite';
    document.body.style.background = "#f3f3f3"
}