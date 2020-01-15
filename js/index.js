import JQuery from './jquery-3.4.1.min.js'


jQuery(function($)
{
    $scrollTo(0)
    $('.backToTop').click(function() { $.scrollTo($('body'), 1000); });
});


$(window).scroll(function(){
    if($(this).scrollTop()>300) $('.backToTop').fadeIn();
    else $('.backToTop').fadeOut();
})