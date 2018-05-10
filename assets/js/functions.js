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
    $(".token-sale-steps > li.-active").prevAll().addClass("-active");
    $(".navigation.-mobile ul").append("<li></li>");
    $( ".header-footer" ).find(".social-networks").clone().appendTo( ".navigation.-mobile ul li:last-child" )
}); 
      
      