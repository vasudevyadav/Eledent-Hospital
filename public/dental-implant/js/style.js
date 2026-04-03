$('.excellence-owl').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: { items: 1 },
        767: { items: 2 },
        992: { items: 3 }
    },
    margin: 30
});


$('.owl-cost').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: { items: 1 },
        767: { items: 2 },
        992: { items: 3 }
    },
    margin: 30
});


$('.ind-testi-owl').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: { items: 1 },
        767: { items: 2 },
        992: { items: 2 }
    },
    margin: 30
});


$('.testi-owl').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots: false,
    autoplay: true,
    responsive: {
        0: { items: 1 },
        767: { items: 1 },
        992: { items: 1 }
    },
    margin: 30
});

$('.owl-theme').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    dots: false,
    autoplay: true,
    responsive: {
        0: { items: 1 },
        767: { items: 1 },
        992: { items: 2 }
    },
    margin: 30
});

$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//header fixed//
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".header-area-n").addClass("fixed");
    } else {
        $(".header-area-n").removeClass("fixed");
    }
});

// mobile header 
$('.megamenu-column-header').on('click', function () {
    $(this).toggleClass('active').parent().siblings().children().removeClass('active');
});


window.addEventListener('DOMContentLoaded', function () {
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    jQuery(function ($) {
        function AddReadMore() {
            //This limit you can set after how much characters you want to show Read More.
            var carLmt = 200;
            // Text to show when text is collapsed
            var readMoreTxt = " ...read more";
            // Text to show when text is expanded
            var readLessTxt = " read less";

            //Traverse all selectors with this class and manipulate HTML part to show Read More
            $(".add-read-more").each(function () {
                if ($(this).find(".first-section").length)
                    return;

                var allstr = $(this).text();
                if (allstr.length > carLmt) {
                    var firstSet = allstr.substring(0, carLmt);
                    var secdHalf = allstr.substring(carLmt, allstr.length);
                    var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
                    $(this).html(strtoadd);
                }
            });

            //Read More and Read Less Click Event binding
            $(document).on("click", ".read-more,.read-less", function () {
                $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
            });
        }

        AddReadMore();
    });
});


window.addEventListener('scroll', () => {
    const banner = document.querySelector('.home-banner-area');
    const btn = document.querySelector('.sticky-call-btn');
    if (!banner || !btn) return;

    const show = window.scrollY > (banner.offsetTop + banner.offsetHeight * 0.6);
    btn.style.opacity = show ? '1' : '0';
    btn.style.visibility = show ? 'visible' : 'hidden';
    btn.style.transition = 'opacity 0.4s ease, visibility 0.4s ease';
});



$('.gogle-review-owl').owlCarousel({
   loop: true,
   nav: false,
   dots: true,
   autoplay: true,
   responsive: {
      0: { items: 1},
      767: { items: 2 },
      992: { items: 3}
   },
   margin:30
});
