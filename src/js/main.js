$(function() {
	/*-------------------------------------------------*/
	/*  home - carousel
	/*-------------------------------------------------*/
    var beforeAfterCarousel = $('#jsBeforeAfterCarousel').owlCarousel({
    	items: 1,
    	loop: true
    });

    var beforeAfterNav = $('.before-after__carousel .carousel-nav');

    $(beforeAfterNav).find('.prev').click(function(){
    	beforeAfterCarousel.trigger('prev.owl.carousel');
    });

    $(beforeAfterNav).find('.next').click(function(){
    	beforeAfterCarousel.trigger('next.owl.carousel');
    });
    /*-------------------------------------------------*/
    /*  home - questions
    /*-------------------------------------------------*/
    $('.questions__item').click(function(e){
    	var s = $(this).find('.answer');
    	(s.is(':hidden'))?s.slideDown():s.slideUp();
    });
    /*-------------------------------------------------*/
    /*  home - tickets (equal height)
    /*-------------------------------------------------*/
    equalHeight('.tickets__list','.tickets__item span');
    $(window).resize(function(){
    	equalHeight('.tickets__list','.tickets__item span');
    })
});

function equalHeight(wrap, element){
    $(wrap).each(function(){
        var maxHeight = [],
            className = element;
        $(this).find(className).each(function(){
            $(this).height('auto');
        });
        $(this).find(className).each(function(){
            maxHeight.push($(this).height());
        });
        maxHeight = Math.max.apply(null, maxHeight);
        $(this).find(className).each(function(){
            $(this).height(maxHeight);
        });
    });
}