// Start

$(document).ready(function(){
	
	$(this).scrollTop(0);
	setTimeout(function(){$('.loader-img').addClass('loading');}, 200);
	setTimeout(function(){$('#loader').addClass('loading');}, 1200);
	setTimeout(function(){$('html').addClass('is-ready');}, 1900);
	
});

$(window).on('beforeunload', function(){

	$('body').addClass('unload');

});



// Scroll

if (window.matchMedia("(min-width:790px)").matches) {
	
	setTimeout(() => {
		
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.defaults({markers: false});
		
		const pageContainer = document.querySelector(".smooth-scroll");
		const scroller = new LocomotiveScroll({
		  el: pageContainer,
		  smooth: true,
		  inertia:.6,
		  tablet: { smooth: true },
		  smartphone: { smooth: true }
		});
		
		document.querySelector('.go-top').addEventListener('click', (function(){scroller.scrollTo(0)}));
		
		scroller.on('scroll', (position) => {
			
		  if ((position.scroll.y) > 50) {
			  
			document.querySelector('.overlay-logo').classList.add('scroll');
			
		  } else {
			  
			document.querySelector('.overlay-logo').classList.remove('scroll');
		  
		  }
		  
		});
		
		scroller.on("scroll", ScrollTrigger.update);
		
		ScrollTrigger.scrollerProxy(".smooth-scroll", {
		  scrollTop(value) {
			return arguments.length
			  ? scroller.scrollTo(value, 0, 0)
			  : scroller.scroll.instance.scroll.y;
		  },
		  getBoundingClientRect() {
			return {
			  left: 0,
			  top: 0,
			  width: window.innerWidth,
			  height: window.innerHeight
			};
		  },
		});
		
		// BG rounded homepage
		
		$(".homepage").each(function (index) {
		  let triggerElement = $(this);
		  let targetElement = $(".fullheight");

		  let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: triggerElement,
			  scroller: pageContainer,
			  start: "top top",
			  end: "bottom bottom",
			  scrub: 1
			}
		  });
		  tl.fromTo(
			targetElement,
			{duration: 1, borderRadius: "0"},
			{duration: 1, borderRadius: "0 0 50rem 50rem"}
		);
		});
		
		// Scale
		
		$(".scale").each(function (index) {
		let triggerElement = $(this);
		let targetElement = $(".scale-fx");

		let tl = gsap.timeline({
			scrollTrigger: {
			trigger: triggerElement,
			scroller: pageContainer,
			start: "top 100%",
			end: "bottom -100%",
			scrub: 1
			}
		});
		tl.fromTo(
			targetElement,
			{scale:.6},
			{scale:1}
		);
		});
		
		// Sticky img
		
		$(".wrapper-sticky").each(function (index) {
		let triggerElement = $(this);
		let targetElement = $(".sticky-element");

		let tl = gsap.timeline({
			scrollTrigger: {
			trigger: triggerElement,
			scroller: pageContainer,
			start: "top top",
			end: "bottom bottom",
			scrub: 1
			}
		});
		tl.fromTo(
			targetElement,
			{width: "35rem", height: "35rem", duration: 1, borderRadius: "35rem"},
			{width: "100vw", height: "100vh", duration: 1, borderRadius: "35rem"}
		);
		});
		
		// Grid Image Move 1
		
		$(".grid-item:nth-child(3n+1)").each(function (index) {
		  let triggerElement = $(this);
		  let targetElement = $(this);

		  let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: triggerElement,
			  scroller: pageContainer,
			  start: "top bottom",
			  end: "bottom top",
			  scrub: 1
			}
		  });
		  tl.to(targetElement, {y: "-30%", duration: 1}
			);
		});
		
		// Grid Image Move 2
		
		$(".grid-item:nth-child(3n+2)").each(function (index) {
		  let triggerElement = $(this);
		  let targetElement = $(this);

		  let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: triggerElement,
			  scroller: pageContainer,
			  start: "top bottom",
			  end: "bottom top",
			  scrub: 2
			}
		  });
		  tl.to(targetElement, {y: "-50%", duration: 1 }
		  );
		});

		// Grid Image Move 3

		$(".grid-item:nth-child(3n+3)").each(function (index) {
		  let triggerElement = $(this);
		  let targetElement = $(this);

		  let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: triggerElement,
			  scroller: pageContainer,
			  start: "top bottom",
			  end: "bottom top",
			  scrub: 1.5
			}
		  });
		  tl.to(targetElement, {y: "-70%", duration: 1}
		  );
		});
		
	}, 200)

} else {
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
		   $('.overlay-logo').addClass('scroll');
		} else {
		   $('.overlay-logo').removeClass('scroll');
		}
	});
	
}