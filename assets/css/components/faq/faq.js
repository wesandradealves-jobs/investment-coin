$(document).ready(function () {
    $(".faq-list h4").click(function() {
        $(this).closest("li").toggleClass("-active");
        $(this).closest("ul").find(".-active")
        .not($(this).closest("li")).removeClass("-active")
        .find("p").slideToggle();

        $(this).closest("ul")
        .not($(this).closest("li"))
        .find(".open-faq i").text("+");

        if($(this).closest("li").is(".-active")){
            $(this).closest("li").find(".open-faq i").text("-");
        } else {
            $(this).closest("li").find(".open-faq i").text("+");
        }

        $(this).closest("li").find("p").slideToggle();
    });  
}); 
      
      