$(document).ready(function() {

    // Hiden menu

    $('.btn-menu').click(function () {
        if ( $('.hidden-menu').is(':hidden')) {
            $('.hidden-menu').show();
        }

        else {
            $('.hidden-menu').hide()
        }

    });


    // Page scroll

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset:60

    });

    // Owl carusell

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            320:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
        }
    });

    // Responsite Tabs

    $('#history__responsive-tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

});