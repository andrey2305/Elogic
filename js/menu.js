
$(function(){
    var open = $('.menu-btn');
    var menu = $('.m-menu');


    open.click(function(event){
        event.preventDefault(); 
        open.toggleClass('menu-btn-active');
        menu.toggleClass('m-menu-active');
    });

    

    $('.m-menu ul li a').click(function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu-active');
        open.toggleClass('menu-btn-active');
    });
});


