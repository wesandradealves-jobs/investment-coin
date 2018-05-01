$(document).ready(function () {
    var homeSections = ($("body").is(".pg-home")) ? $(".main").children().length : false,
        ids = [],
        idsInterna = [],
        lastScrollTop = 0,
        url = (window.location.href) ? window.location.href : false,
        patch = (url) ? url.split("/").pop() : false,
        currentPage = (patch) ? patch.substring(0, patch.indexOf(".html")) : false,        
        positions = [];

    if(homeSections){
        for(var a = 1; a < homeSections; a++){
            ids.push($(".main section").eq(a).attr("id")); 
            positions.push($(".main section").eq(a).offset().top);

            $(".navigation li:nth-child("+a+")")
            .find("a")
            .click(function() {
                var scrollTo = $(this).parent().index();
                
                $(this).closest("ul")
                .find(".-active").not($(this).parent())
                .removeClass("-active");
                
                $(this).parent().addClass("-active");
                
                $("html, body").animate({scrollTop: positions[scrollTo]}, 500); 
            }); 
        }
        $(window).scroll(function(event){
            var st = $(this).scrollTop();
            closeMenu();
            for(var b = 0; b < homeSections; b++){
                var section = $(".main section#"+ids[b]).find(".grid"),
                    navItem = $(".navigation ul li:nth-child("+(b+1)+")");
                if(st + $(".header").outerHeight() * 2 >= positions[b]){

                    navItem.closest("ul")
                    .find(".-active").not(navItem)
                    .removeClass("-active");

                    section.addClass("-animated"),
                    navItem.addClass("-active")
                } else {
                    section.removeClass("-animated"),
                    navItem.removeClass("-active")
                }
            }
        }); 
        $(window).resize(function() {
            closeMenu();
            setTimeout(function(){
                window.location.reload();
            });
        });
        if(location.hash){
            getSection = location.hash;
            setTimeout(function(){
                $("html, body").animate({scrollTop: $(getSection).offset().top + 10}, 500); 
            });
        }        
    } else {
        var anchorsLength = $(".footer .navigation ul li").length;
        for(var a = 0; a < anchorsLength; a++){
            idsInterna.push("index.html#" + $(".footer .navigation ul li").eq(a).find("a").attr("title").toLowerCase().replace(/\s/g, '-'));  
        }
        $.each(idsInterna, function (index, value) {
            if($(".navigation ul li:nth-child("+(index+1)+") a").attr("href") === "javascript:void(0)"){
                $(".navigation ul li:nth-child("+(index+1)+") a").attr("href", value)
            }
        });
    }
});  