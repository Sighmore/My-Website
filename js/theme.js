;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();
	
	
//	$('.courses_area').imagesLoaded(function(){
//        $('.courses_inner').isotope({ 
//            layoutMode: 'masonry',
//			percentPosition: true,
//			masonry: {
//				columnWidth: 1,
//			}
//        })
//    });
	
	
	
	
	/*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
   
//	$('.courses_inner').imagesLoaded(function(){
//        $('.courses_inner').isotope({ 
//            layoutMode: 'masonry',
//            percentPosition:true,
//            masonry: {
//                columnWidth: 1,
//            }            
//        })
//    });
	
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
//    function clients_slider(){
//        if ( $('.clients_slider').length ){
//            $('.clients_slider').owlCarousel({
//                loop:true,
//                margin: 30,
//                items: 5,
//                nav: false,
//                autoplay: false,
//                smartSpeed: 1500,
//                dots:false, 
//                responsiveClass: true,
//                responsive: {
//                    0: {
//                        items: 1,
//                    },
//                    400: {
//                        items: 2,
//                    },
//                    575: {
//                        items: 3,
//                    },
//                    768: {
//                        items: 4,
//                    },
//                    992: {
//                        items: 5,
//                    }
//                }
//            })
//        }
//    }
//    clients_slider();
	/*----------------------------------------------------*/
    /*  MailChimp Slider
    /*----------------------------------------------------*/
    function mailChimp(){
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
	
	$('select').niceSelect();
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();
	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	
	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
            // Activate isotope in container
			$(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
            // Add isotope click function
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}); 
	
	/*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
     
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ]
        });
    }
	
	// Navigation and Section Highlighting
	$(document).ready(function() {
		// Get current page path
		var path = window.location.pathname;
		var page = path.split("/").pop() || 'index.html';
		
		// Handle page-level active state
		$('.navbar-nav .nav-item').each(function() {
			var href = $(this).find('a').attr('href');
			// Check if href matches current page or section
			if (href === page || 
				(page === 'index.html' && href.startsWith('#')) || 
				(href === 'portfolio.html' && page === 'portfolio.html') ||
				(href === 'services.html' && page === 'services.html') ||
				(href === 'contact.html' && page === 'contact.html')) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		// Only apply scroll highlighting on index page
		if (page === 'index.html') {
			const sections = document.querySelectorAll('section[id]');
			const navItems = document.querySelectorAll('.nav-link[data-section]');
			
			function highlightNavOnScroll() {
				const scrollY = window.pageYOffset;
				
				sections.forEach(section => {
					const sectionHeight = section.offsetHeight;
					const sectionTop = section.offsetTop - 100;
					const sectionId = section.getAttribute('id');
					
					if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
						navItems.forEach(item => {
							const itemSection = item.getAttribute('data-section');
							if (itemSection === sectionId) {
								item.parentElement.classList.add('active');
							} else {
								item.parentElement.classList.remove('active');
							}
						});
					}
				});
			}

			// Smooth scroll for index page sections
			navItems.forEach(item => {
				item.addEventListener('click', function(e) {
					if (this.getAttribute('href').startsWith('#')) {
						e.preventDefault();
						const targetId = this.getAttribute('href');
						const targetSection = document.querySelector(targetId);
						
						window.scrollTo({
							top: targetSection.offsetTop - 80,
							behavior: 'smooth'
						});
					}
				});
			});

			// Add scroll event listener
			window.addEventListener('scroll', function() {
				highlightNavOnScroll();
			});
		}
	});

	// Add this function to handle PDF download
	function downloadCV() {
		// Create a loading animation in the button
		const downloadBtn = document.querySelector('.download_btn');
		const originalContent = downloadBtn.innerHTML;
		downloadBtn.innerHTML = `
			<span class="material-icons loading">sync</span>
			<span>Downloading...</span>
		`;
		
		fetch('assets/SimonKuria_CV.pdf')
			.then(response => response.blob())
			.then(blob => {
				// Create blob link to download
				const url = window.URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'SimonKuria_CV.pdf');
				
				// Add link to body and trigger download
				document.body.appendChild(link);
				link.click();
				link.parentNode.removeChild(link);
				
				// Restore button content
				setTimeout(() => {
					downloadBtn.innerHTML = originalContent;
				}, 1000);
			})
			.catch(err => {
				console.error('Error downloading CV:', err);
				downloadBtn.innerHTML = `
					<span class="material-icons error">error</span>
					<span>Download failed</span>
				`;
				setTimeout(() => {
					downloadBtn.innerHTML = originalContent;
				}, 2000);
			});
	}

	// Add this to your existing document ready function
	$(document).ready(function() {
		// Existing code...
		
		// Add click handler for CV download
		$('.download_btn').on('click', function(e) {
			e.preventDefault();
			downloadCV();
		});
	});

	// Add this to your existing JavaScript
	$(document).ready(function() {
		// Mobile menu toggle
		$('.navbar-toggler').click(function() {
			$('.navbar-collapse').toggleClass('show');
			// Toggle icon between menu and close
			const icon = $(this).find('.material-icons');
			if (icon.text() === 'menu') {
				icon.text('close');
			} else {
				icon.text('menu');
			}
		});

		// Close menu when clicking outside
		$(document).click(function(event) {
			if (!$(event.target).closest('.navbar').length) {
				$('.navbar-collapse').removeClass('show');
				$('.navbar-toggler .material-icons').text('menu');
			}
		});

		// Close menu when clicking a link
		$('.nav-link').click(function() {
			$('.navbar-collapse').removeClass('show');
			$('.navbar-toggler .material-icons').text('menu');
		});

		// Remove previous chat toggle handlers
		$(document).ready(function() {
			// Remove old handlers
			$('.chat-toggle').off('click');
			$(document).off('click', '.image-overlay');

			// Add new click handler for chat toggle
			$('.chat-toggle').click(function(e) {
				e.preventDefault();
				$('.simon-image, .image-overlay').addClass('show');
			});

			// Close image when clicking overlay
			$('.image-overlay').click(function() {
				$('.simon-image, .image-overlay').removeClass('show');
			});
		});
	});

})(jQuery)