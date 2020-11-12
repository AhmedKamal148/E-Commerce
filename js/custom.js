/* -------------------------------------------------------------------------- */
/*                     Start Handel DrobDown Menu In Second_Ul                */
/* -------------------------------------------------------------------------- */

// $(".special_dropdown_menu").addClass("none");
// $("#test").css({


// })
// $("#parent").click(function() {

//     if ($(".special_dropdown_menu").hasClass("none")) {
//         $(".special_dropdown_menu").addClass("flex").removeClass("none")

//     } else {
//         $(".special_dropdown_menu").addClass("none").removeClass("flex")
//     }

// });
/* -------------------------------------------------------------------------- */
/*                      End Handel DrobDown Menu In Second_Ul                 */
/* -------------------------------------------------------------------------- */




$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            nav: false,
            smartSpeed: 1000,

            loop: true
        },
        600: {
            items: 1,
            nav: false,
            smartSpeed: 1000,

            loop: true
        },
        1000: {
            items: 1,
            nav: false,
            smartSpeed: 1000,

            loop: true
        }
    }
})



/* -------------------------------------------------------------------------- */
/*                      Start Handel Nav_items_in_product_Section             */
/* -------------------------------------------------------------------------- */
$(" .nav-tabs .nav-item").css('paddingTop', '23px')
$(" .nav-tabs .nav-item").click(function () {
    $(" .nav-tabs li").removeClass('active')

    $(this).addClass('active').css('paddingTop', '23px')



});
/* -------------------------------------------------------------------------- */
/*                      End Handel Nav_items_in_product_Section               */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*             Start Handel Item-Icons_In_Product_Item_product_Section        */
/* -------------------------------------------------------------------------- */
var arrIcons = document.querySelectorAll("#icons a");
var arrproduct = document.querySelectorAll(".product .tab-content .product_item");
var indexOffset = 0;
var arr = [];




// for (let j = 0; j < arrproduct.length; j++) {
//     indexOffset = j;
//     $(arrproduct[j]).hover(function() {

//             if ($(this).children().children().css('top') == '60px') {
//                 $(this).children().children().eq(0).animate({
//                     top: '0px'
//                 }, 50);
//                 $(this).children().children().eq(1).animate({
//                     top: '0px'
//                 }, 150)
//                 $(this).children().children().eq(2).animate({
//                     top: '0px'
//                 }, 200)
//                 $(this).children().children().eq(3).animate({
//                     top: '0px'
//                 }, 300)
//             }
//         },
//         function() {
//             $(this).children().children().eq(0).animate({
//                 top: '100px'
//             }, 50);
//             $(this).children().children().eq(1).animate({
//                 top: '100px'
//             }, 150)
//             $(this).children().children().eq(2).animate({
//                 top: '200px'
//             }, 200)
//             $(this).children().children().eq(3).animate({
//                 top: '600px'
//             }, 300)

//         });
// }

/* -------------------------------------------------------------------------- */
/*              End Handel Item-Icons_In_Product_Item_product_Section         */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                          Start Second_Owl_Carousel                         */
/* -------------------------------------------------------------------------- */

$('.owl-second-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



/* -------------------------------------------------------------------------- */
/*                          Start Second_Owl_Carousel                         */
/* -------------------------------------------------------------------------- */




// $(document).ready(function () {
//     $('.slider-slick').slick({
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         fade: true,
//         asNavFor: '.slider-nav'

//     });
//     $('.slider-nav').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         asNavFor: '.slider-slick',
//         dots: true,
//         centerMode: true,
//         focusOnSelect: true
//     });
// });

// $('.slider-slick').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    // autoplay: true,

});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,


});


$('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav2',
    // autoplay: true,

});
$('.slider-nav2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,


});