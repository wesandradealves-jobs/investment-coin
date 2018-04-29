$(document).ready(function () {
    var offsets = [],
        s = 0,
        l = $(".main section").length;

        for(var i = 0; i < l; i++) { 
            var offset = $(".main section").eq(i).offset();
            offsets.push(offset.top);
        }

        $("body").on('mousewheel', function(event) {
            var st = $(window).scrollTop();

            closeMenu();
            
            (event.deltaY == -1) ? s++ : (s > 0) ? s-- : '';

            for(var o = 0; o < l; o++) { 
                if(st >= offsets[o] - ($(".header").outerHeight() + 150)){
                    $(".navigation ul li:nth-child("+o+")")
                    .addClass("-active")
                    .prevAll().removeClass("-active");  
                    
                    $(".navigation ul li:nth-child("+o+")")
                    .not($(".navigation ul li:nth-child("+o+")"))
                    .removeClass("-active");
    
                    $(".navigation ul li:nth-child("+o+")")
                    .nextAll()
                    .removeClass("-active");                    

                    $(".main section")
                    .eq(o)
                    .find(".grid")
                    .addClass("-animated");
                } else {
                    $(".navigation ul li:nth-child("+o+")")
                    .removeClass("-active");

                    $(".main section").eq(o).find(".grid")
                    .removeClass("-animated");
                }
            }
        });  
        for(var x = 1; x < l; x++) {
            $(".navigation ul li:nth-child("+x+")")
            .find("a")
            .click(function() {
                var scroll = offsets[($(this).parent().index() + 1)];

                closeMenu();
                
                if($(this).attr("href") == "javascript:void(0)"){
                    $(".navigation ul li:nth-child("+($(this).parent().index() + 1)+")")
                    .addClass("-active")
                    .prevAll().removeClass("-active");  
                    
                    $(".navigation ul li:nth-child("+($(this).parent().index() + 1)+")")
                    .not($(".navigation ul li:nth-child("+($(this).parent().index() + 1)+")"))
                    .removeClass("-active");
    
                    $(".navigation ul li:nth-child("+($(this).parent().index() + 1)+")")
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
    
                    if($(window).width() <= 1024){
                        $("html, body").animate({scrollTop: scroll + $(".header").outerHeight()}, 500); 
                    } else{
                        $("html, body").animate({scrollTop: scroll - $(".header").outerHeight()}, 500); 
                    }
                }

            });          
        }

        $(window).resize(function() {
            $(".navigation ul li").removeClass("-active");
            closeMenu();
        });
});  
    
    