$(document).ready(function(){


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:3,
            
        }
    }
})


});

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

exports.default = series(scssTask, jsTask);