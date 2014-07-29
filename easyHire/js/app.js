// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function(){
	// scroll body to 0px on click
	$('#top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});