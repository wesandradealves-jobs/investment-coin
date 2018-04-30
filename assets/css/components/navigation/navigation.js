$(document).ready(function () {
    var offsets = [],
        s = 0,
        k = 0,
        lastScrollTop = 0,
        sections = $(".pg-home main section").length
        ids = [];

        for(var j = 0; j < $(".footer .navigation ul li").length; j++){
            if($(".footer .navigation ul li").eq(j).find("a").attr("href") == "javascript:void(0)"){
                var id = $(".footer .navigation ul li").eq(j).find("a").attr("title");
                ids.push("./#" + id.toLowerCase().replace(/\s/g, '-'));                
            }
        }

        if($("body").is(".pg-interna")){
            for(var l = 0; l < ids.length; l++){
                k++;
                $(".navigation li:nth-child("+k+")").find("a").attr("href", ids[l]);
            }
        } else {
            if(location.hash){
                sectionId = location.hash,
                sectionOffset = $(sectionId).offset();
                $("html, body").animate({scrollTop: sectionOffset.top  - $(".header").outerHeight()}, 500);
            }
        }

        if(sections){
            for(var i = 0; i < sections; i++) { 
                var offset = $(".pg-home .main section").eq(i).offset();
                offsets.push(offset.top);
            }
            $(window).scroll(function(event){
                var st = $(this).scrollTop();
                if (st > lastScrollTop){
                    var direction = "baixo"
                } else {
                    var direction = "cima"
                }
                lastScrollTop = st;
                
                var stHeader = $(window).scrollTop() + ($(".header").outerHeight() + 180);
    
                closeMenu();
                
                (direction == "baixo") ? s++ : (s > 0) ? s-- : '';

                for(var o = 0; o < sections; o++) { 
                    if(stHeader>=offsets[o]){
                        $(".pg-home .navigation ul li:nth-child("+o+")")
                        .addClass("-active")
                        .prevAll().removeClass("-active");  
                        
                        $(".pg-home .navigation ul li:nth-child("+o+")")
                        .not($(".navigation ul li:nth-child("+o+")"))
                        .removeClass("-active");
        
                        $(".pg-home .navigation ul li:nth-child("+o+")")
                        .nextAll()
                        .removeClass("-active");

                        $(".main section")
                        .eq(o)
                        .find(".grid")
                        .addClass("-animated");
                    } else {
                        $(".pg-home .navigation ul li:nth-child("+o+")")
                        .removeClass("-active");

                        $(".pg-home .main section").eq(o)
                        .find(".grid")
                        .removeClass("-animated");
                    }
                }
            });  

            $(".navigation ul li")
            .find("a")
            .click(function() {
                if(offsets){
                    var index = $(this).parent().index(),
                        scrollTo = offsets[index+1];
                    closeMenu();

                    if($(this).attr("href") == "javascript:void(0)" && $("body").is(".pg-home")){
                        $(".navigation ul li:nth-child("+(index+1)+")")
                        .addClass("-active")
                        .prevAll().removeClass("-active");  
                        
                        $(".navigation ul li:nth-child("+(index+1)+")")
                        .not($(".navigation ul li:nth-child("+(index+1)+")"))
                        .removeClass("-active");
        
                        $(".navigation ul li:nth-child("+(index+1)+")")
                        .nextAll()
                        .removeClass("-active");
                        
                        $(".main section").eq(index+1)
                        .find(".grid").addClass("-animated")
                        .prevAll().find(".grid").addClass("-animated"); 
        
                        $(".main section").eq(index+1)
                        .not($(".main section").eq(index+1))
                        .find(".grid").addClass("-animated")
                        .removeClass("-animated");
        
                        $(".main section").eq(index+1)
                        .nextAll().find(".grid")
                        .removeClass("-animated");
        
                        $("html, body").animate({scrollTop: scrollTo  - $(".header").outerHeight()}, 500); 
                    }
                }
            });  
    
            $(window).resize(function() {
                $(".navigation ul li").removeClass("-active");
                closeMenu();
            });
        }
});  
    
    