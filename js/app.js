$(function(){

	//window height

	var vH = $(window).height();

	$(".banner-wrap, .mobile-nav-wrap").height(vH);



	$(".mobile-menu-bar").click(function(){
		$(this).toggleClass('open');
		$(".mobile-nav-wrap").toggleClass('active');
	});

	//Mobile Menu
	$(".mob-menu").on('click', function(){
    	if($(this).hasClass('open')){
    		$(this).removeClass('open');
    		$(".mob-nav").removeClass('active');
    	} else {
    		$(".mob-nav").addClass('active');
    		$(this).addClass('open');
    	}
    });

    //Nav
    $('nav a, .mob-nav a').click(function(){
    	$('nav a, .mob-nav a').removeClass('active');
    	$(this).addClass('active');
    });
    $('.mob-nav a').click(function(){
    	$('.mob-menu').removeClass('open');
    	$(".mob-nav").removeClass('active');
    });

    $('.close-btn').click(function(){
    	$(".become-sponser").removeClass('active');
    });

    //Slick Our Certificate
    $("#ourCertificate").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }); 

    //Window Scroll
    $(window).scroll(function() {
		if ($(document).scrollTop() > 1) {
			$('header').addClass('stick');
			//$('.header-row').addClass('fixed-header')
		} else {
			$('header').removeClass('stick');
			//$('.header-row').removeClass('fixed-header');
	  }
	});

	//Animation Effect
	var delay= 0;
	if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
		$("[data-animation-effect]").each(function() {
			var item = $(this),
				animationEffect = item.attr("data-animation-effect");

			if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
				item.appear(function() {
					if(item.attr("data-effect-delay")) item.css("effect-delay", delay + "ms");
					setTimeout(function() {
						item.addClass('animated object-visible ' + animationEffect);

					}, item.attr("data-effect-delay"));
				}, {accX: 0, accY: -130});
			} else {
				item.addClass('object-visible');
			}
		});
	};
});