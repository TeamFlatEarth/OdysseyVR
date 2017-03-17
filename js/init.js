(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	
	$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  }); // end of document ready
  
  $('.pushpin-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
  
  
  
  
   $(document).ready(function(){
    $('.target').pushpin({
      top: 0,
      bottom: Infinity,
      offset: 0
    });
  });
  
  $(document).ready(function(){
      $('.slider').slider();
    });
  
    //Removes pushpin and pushpin classes
  /*$('.tabs-wrapper .row').pushpin('remove');*/
  
var banner = document.querySelector('.banner');
var bannerVideo = document.querySelector('.banner__video');


$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });



  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });





$(document).ready(function(){
      $('.carousel').carousel();
    });
	
	
// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);
	
$('.carousel.carousel-slider').carousel({fullWidth: true});

})(jQuery); // end of jQuery name space