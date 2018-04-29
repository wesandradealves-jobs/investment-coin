var nav = $(".navigation.-mobile"),
    tcon = $(".tcon");

function mobileNavigation(e){
    nav.toggleClass("-active");
} 
function closeMenu(){
    nav.removeClass("-active"),
    tcon.removeClass("tcon-transform")            
}

$(document).ready(function () {
    transformicons.add('.tcon');
    setTimeout(function(){  
        $(".header:not(.-sticky)").addClass("-animated");
    }, 500);
    setTimeout(function(){  
        $(".header:not(.-sticky) .cotation, .banner .coin-section .coin-text").addClass("-animated");
    }, 3000);
    setTimeout(function(){  
        $(".header:not(.-sticky) .social-networks").addClass("-animated");
    }, 4000);
    $(".token-sale-steps > li.-active").prevAll().addClass("-active");
    $(window).scroll(function(event){
        closeMenu();
	}); 
}); 
      
      