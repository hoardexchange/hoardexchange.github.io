	/* show bootstrap tab on on click */
	function activateTab(tab){
		$('.nav-tabs a[href="#' + tab + '"]').tab('show');
	}







$(document).ready(function(){


	// Page scrolling to element
	$('a.page-scroll').click(function(event) {
		var $anchor = $(this);
		var offset = $(this).attr('scroll-offset');
		if (typeof offset == 'undefined') offset = 0;
		console.log(offset);

		$('html, body').clearQueue().animate({
				scrollTop: ($($anchor.attr('href')).offset().top + parseInt(offset))
		}, 1250, 'easeInOutExpo');

		event.preventDefault();
	});




	/* Quotes red block navigation */
	$(".qBlock .nav").click(function() {
		$(this).parent().siblings('.row:hidden').stop().clearQueue().fadeIn().siblings('.row').stop().hide();		
	});



	// Subnavigation - pin to the side
	if ( $( "#main-submenu" ).length && $( "#submenu-trigger" ).length ) {
		
		$('#main-submenu').affix({
				offset: {
						top: jQuery('#submenu-trigger').offset().top - 10
				}
		});
	}


	// Email address - antispam
	$('.email').each(function() {
		var $email = $(this);
		var address = $email.text()
			.replace(/\s*\[at\]\s*/, '@')
			.replace(/\s*\[dot\]\s*/g, '.');
		$email.html('<a href="mailto:' + address + '">' + address +'</a>');
	});




	// Roadmap interaction
	$('.milestone').click(function(event) {
		event.stopPropagation();			
		if ( $(this).hasClass("active") ) {}
		else {
			$(".roadmap .details").hide();
			$(".roadmap .milestone").removeClass('active');
			$(this).addClass('active');
			$(this).children(".details").slideDown();	
		}
	});
	


	// Roadmap interaction
	$('.section-problems .box3d').click(function() {
		$(this).toggleClass('active');
		$(this).parent().siblings().children().removeClass('active');
		$(this).siblings().removeClass('active');
	});




	// Team - show more persons
	$(".person-more").click(function() {
		$(this).parent().hide();		
		$(".person-hidden").fadeIn("slow");		
	});





	// Owl carousel
	$(".owl-carousel.owl01").owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		autoplay: true,			
		responsive:{
				0:{
						items:1
				},
				500:{
						items:2
				},
				1000:{
						items:3
				}
		}
	});

	$(".owl-carousel.owl02").owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,			
		responsive:{
				0:{
						items:1
				}
		}
	});




	/* Open/hide mobile menu */
	$(".navbar-toggle").click(function() {
		$(".navbar-collapse.collapse").toggle();
	});


	/* Disable scrolling in the background when mobile menu is open */
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.navbar-collapse').on('shown.bs.collapse', function() { 
			 $('body').css('position', 'fixed').css('width','100%');
		});
		$('.navbar-collapse').on('hidden.bs.collapse', function() {
			 $('body').css('position', 'static').css('width','auto');
		});
	}


	/* Modal triggers */
  $(".trigger-videModal").click(function(){
    $("#videoModal").modal("show");
		$('#video-explanation')[0].play();
  });
  $("#videoModal").on('hidden.bs.modal', function(){
		$('#video-explanation')[0].pause();
  });

  $(".trigger-soonModal").click(function(){
    $("#soonModal").modal("show");
  });

  $(".bio-trigger").click(function(){
    $(this).parents().next(".modal-bio").modal("show");
  });

  $(".trigger-subscribe").click(function(){
    $("#subscribeModal").modal("show");
  });



	
});











/* Form validation */
$(function() {
	
	if ( $("form[name='mc-embedded-subscribe-form']").length ) {
	
		$.validator.addMethod("checkboxes", function(value, element) {
				return $('input[type=checkbox]:checked').length > 0;
		});
	
		$("form[name='mc-embedded-subscribe-form']").validate({
			rules: {
				'email': { required: true, email: true },
				'gdpr[18417]' : { checkboxes: true }
			},
			messages: {
				'email': "Please enter a valid email address.",
				'gdpr[18417]': "Please select at least one checkbox."
			},
			submitHandler: function(form) { form.submit(); }
		});
		
	}
	
});



