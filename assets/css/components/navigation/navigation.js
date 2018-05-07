$(document).ready(function () {
    if($('body').is('.pg-home')){
        for(var a = 1; a < $('.main').children().length; a++){
            $('.navigation li:nth-child('+a+')')
            .find('a')
            .click(function(e) {
                if (/#/.test(this.href)) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $($.attr(this, 'href')).offset().top
                    }, 500);                    
                }
                $(this).closest('ul')
                .find('.-active').not($(this).parent())
                .removeClass('-active');
                
                $(this).parent().addClass('-active');
            }); 
        }
        $(window).scroll(function(event){
            closeMenu();
            var st = $(this).scrollTop();

            $( 'section' ).each(function() {
                if($(this).offset().top >= st + $('.header').outerHeight()){
                    $('.navigation ul li:nth-child('+$(this).index()+')').removeClass('-active');
                    $(this).find('.grid').removeClass('-animated');
                } else {
                    $('.navigation ul li:not(:nth-child('+$(this).index()+'))').removeClass('-active');
                    $('.navigation ul li:nth-child('+$(this).index()+')').addClass('-active');
                    $(this).find('.grid').addClass('-animated');
                }
            });
        }); 
        $(window).resize(function() {
            closeMenu();
            setTimeout(function(){
                window.location.reload();
            });
        });
    } else {
        $( '.navigation ul li a' ).each(function(e) {
            if (/#/.test(this.href)) {
                $(this).attr("href", "index.html" + '#' + $(this).attr('href').split('#').pop())
            }
        });
    }
    if(location.hash){
        setTimeout(function(){
            $( '.navigation ul li a' ).each(function() {
                if('#' + $(this).attr('href').split('#').pop() == location.hash){
                    $(this).parent().addClass('-active');
                }
            });
            $('html, body').animate({scrollTop: $(location.hash).offset().top + $(".header").outerHeight()}, 500); 
        });
    }
});  