window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
// hero
$('#hero-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// CATEGORIES
$('#categories').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
// TESIMONIALS
$('#tesimals-slide').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// FROM THE BLOG
$('#bloggs').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// BRAND
$('#brand-in').owlCarousel({
    loop:true,
    margin:100,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:true
        }
    }
})