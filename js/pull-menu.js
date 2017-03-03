$(function() {
    var pull = $('#pull');
    	menu = $('.menu ul');
    	menuHeight = menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});


$(function() {
    var selectionPull = $('#selection-pull');
        selectionMenu = $('.selection-menu ul');
        menuHeight = selectionMenu.height();
    $(selectionPull).on('click', function(e) {
        e.preventDefault();
        selectionMenu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && selectionMenu.is(':hidden')) {
            selectionMenu.removeAttr('style');
        }
    });
});