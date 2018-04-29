$(document).ready(function () {
    var offsets = [],
        s = 0,
        l = $(".main section").length;

        $("html, body").animate({scrollTop: 0}, 500); 

        for(var i = 0; i < l; i++) { 
            var offset = $(".main section").eq(i).offset();
            offsets.push(offset.top);
        }

        $("body").on('mousewheel', function(event) {
            var st = $(window).scrollTop();
            
            (event.deltaY == -1) ? s++ : (s > 0) ? s-- : '';

            for(var o = 0; o < l; o++) { 
                if(st >= offsets[o] - ($(".header").outerHeight() + 150)){
                    // $(".navigation.-main-navigation ul li:nth-child("+o+")")
                    // .addClass("-active");

                    $(".navigation.-main-navigation ul li:nth-child("+o+")")
                    .addClass("-active")
                    .prevAll().removeClass("-active");  
                    
                    $(".navigation.-main-navigation ul li:nth-child("+o+")")
                    .not($(".navigation.-main-navigation ul li:nth-child("+o+")"))
                    .removeClass("-active");
    
                    $(".navigation.-main-navigation ul li:nth-child("+o+")")
                    .nextAll()
                    .removeClass("-active");                    

                    $(".main section")
                    .eq(o)
                    .find(".grid")
                    .addClass("-animated");
                } else {
                    $(".navigation.-main-navigation ul li:nth-child("+o+")")
                    .removeClass("-active");

                    $(".main section").eq(o).find(".grid")
                    .removeClass("-animated");
                }
            }
        });  
        for(var x = 1; x < l; x++) {
            $(".navigation.-main-navigation ul li:nth-child("+x+")")
            .find("a")
            .click(function() {
                var scroll = offsets[($(this).parent().index() + 1)];
                
                if($(this).attr("href") == "javascript:void(0)"){
                    $(".navigation.-main-navigation ul li:nth-child("+($(this).parent().index() + 1)+")")
                    .addClass("-active")
                    .prevAll().removeClass("-active");  
                    
                    $(".navigation.-main-navigation ul li:nth-child("+($(this).parent().index() + 1)+")")
                    .not($(".navigation.-main-navigation ul li:nth-child("+($(this).parent().index() + 1)+")"))
                    .removeClass("-active");
    
                    $(".navigation.-main-navigation ul li:nth-child("+($(this).parent().index() + 1)+")")
                    .nextAll()
                    .removeClass("-active");
                    
                    $(".main section").eq($(this).parent().index() + 1)
                    .find(".grid").addClass("-animated")
                    .prevAll().find(".grid").addClass("-animated"); 
    
                    $(".main section").eq($(this).parent().index() + 1)
                    .not($(".main section").eq($(this).parent().index() + 1))
                    .find(".grid").addClass("-animated")
                    .removeClass("-animated");
    
                    $(".main section").eq($(this).parent().index() + 1)
                    .nextAll().find(".grid")
                    .removeClass("-animated");
    
                    $("html, body").animate({scrollTop: scroll - $(".header").outerHeight()}, 500); 
                }

            });          
        }

        $(window).resize(function() {
            $(".navigation.-main-navigation ul li").removeClass("-active");
            $("html, body").animate({scrollTop: 0}, 500); 
        });
});  
    
    