function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }

function checkCookie() {
    var theme = getCookie("theme");
    if (theme != "") {
        if(theme==1) {
            white()
        }
        else {
            black()
        }
    } else {
        setCookie("theme", 0, 365);
        checkCookie()
    }
}

$(document).ready(function(){
      $((getCookie("theme")>0) ? '.backToTopwhite' : '.backToTopblack').on('click', function () {
          $("html, body").animate({scrollTop: 0}, 400);
      });
  });

$(window).scroll(function(){
    if($(this).scrollTop()>300) $((getCookie("theme")>0) ? '.backToTopwhite' : '.backToTopblack').fadeIn();
    else $((getCookie("theme")>0) ? '.backToTopwhite' : '.backToTopblack').fadeOut();
})

function white()
{

    document.body.style.background = "#f3f3f3"

    const mainBox = document.getElementById("mainbox")
    mainBox.style.background = "#4BABFF"
    mainBox.style.color = "#000"

    let a = document.querySelectorAll( '.navbar a' )
    for(let i=0; i<a.length; i++ ) {
      a[i].style.color = "#000"
    }

    a = document.querySelectorAll( '.header > h2' )
    a[0].style.color = "#000"
    
    a = document.querySelectorAll( 'footer > p' )
    a[0].style.color = "#000"

    document.getElementById("fot").style.background = "#4BABFF"

    let el = document.getElementById( 'bt' );
    el.className = 'backToTopwhite';

    setCookie("theme",1,365)

 
    
}

function black()
{
    document.body.style.background = "#12141a"

    const mainBox = document.getElementById("mainbox")
    mainBox.style.background = "#151d22"
    mainBox.style.color = "#ddddee"


    let a = document.querySelectorAll( '.navbar a' )
    for(let i=0; i<a.length; i++ ) {
      a[i].style.color = "#d9d9e4"
    }

    a = document.querySelectorAll( '.header > h2' )
    a[0].style.color = "#e7e7f3"
    
    a = document.querySelectorAll( 'footer > p' )
    a[0].style.color = "#c8c8d4"

    document.getElementById("fot").style.background = "#151d22"

    let el = document.getElementById( 'bt' );
    el.className = 'backToTopblack';

    setCookie("theme",0,365)
}

window.onload = function() {
    this.checkCookie()
 }
