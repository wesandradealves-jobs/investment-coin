function mobileNavigation(){
    $(".tcon").toggleClass("tcon-transform");
    if($(".tcon").is(".tcon-transform")){
        $(".navigation.-mobile").addClass("-active");
    } else {
        $(".navigation.-mobile").removeClass("-active");
    }
} 

function closeMenu(){
    $(".navigation.-mobile").removeClass("-active");
    if($(".tcon").is(".tcon-transform")){
        $(".tcon").removeClass("tcon-transform")
    }
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
      
      