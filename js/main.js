jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate({'scrollTop':target.offset().top},600);
	}
});

/*loading*/
window.addEventListener('load', () =>{
  const preload=document.querySelector('.loading');
  preload.classList.add('loading-finish');

});


var body = document.getElementsByTagName("body")[0]; 
/* Open the sidenav */
function openNav() {
  document.getElementById("mysidenav").style.width = "100%";
  document.getElementsByClassName("navcontent")[0].style.display = "block";
  document.getElementsByClassName("navcontent")[0].style.visibility = "visible";
  body.style.overflow = "hidden";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementsByClassName("navcontent")[0].style.display = "none";
  body.style.overflow = "auto";
}


//Get the button:
gtp = document.getElementById("gtp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gtp.style.display = "block";
  } else {
    gtp.style.display = "none";
  }
}
$("#gtp").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
});

/*跑馬燈*/
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}