// swiper js code



    var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       

    });





// hamberger-menu js


var sidebar =document.getElementById('sidemenu');


    function openMenu(){
      sidebar.classList.toggle('extra');
    };



// owl carousel for service-slider

$('.owl-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
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
});



