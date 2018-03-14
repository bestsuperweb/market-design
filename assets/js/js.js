$(document).ready(function(){

	AOS.init({
	  offset: 300,
      duration: 500,
      easing: 'ease-in-out-cubic',
      delay: 100,
	});

	$('table.gallery td[rowspan="3"]').height($('td').width()*0.75);
	$('table.gallery td[rowspan="6"]').height($('td').width()*1.5);
	$('table.gallery td[rowspan="2"]').height($('td').width()*0.5);

	$( window ).resize(function() {
	  	$('table.gallery td[rowspan="3"]').height($('td').width()*0.75);
		$('table.gallery td[rowspan="6"]').height($('td').width()*1.5);
		$('table.gallery td[rowspan="2"]').height($('td').width()*0.5);
	});

	$(window).scroll(function(event) {
		event.preventDefault();
		/* Act on the event */
		var top = $(this).scrollTop();
		if( top > 50){
			$('nav.navbar-fixed-top').fadeOut(300);
		}else{
			$('nav.navbar-fixed-top').fadeIn(300);
		}
	});

});