var nav = $(".navigation.-mobile"),
    tcon = $(".tcon");

function mobileNavigation(e){
    var e = $(e);
    nav.toggleClass("-active");
    e.addClass("tcon-transform");
} 

function closeMenu(){
    nav.removeClass("-active");
    tcon.removeClass("tcon-transform");
}

$(document).ready(function () {
    setTimeout(function(){  
        $(".pg-home .header:not(.-sticky)").addClass("-animated");
    }, 100);
    setTimeout(function(){  
        $(".pg-home .header:not(.-sticky) .cotation, .banner .coin-section .coin-text").addClass("-animated");
    }, 1500);
    setTimeout(function(){  
        $(".pg-home .header:not(.-sticky) .social-networks").addClass("-animated");
    }, 2000);
    $(".token-sale-steps > li.-active").prevAll().addClass("-active");
}); 
      
      