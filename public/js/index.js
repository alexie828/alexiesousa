/**
 * DOESN'T WORK
 *
$(document).ready(function() {
	$('#main').click(showMain);
	$('#about').click(showAbout);
})

$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".proj-container").height();
    var viewPortSize = $(window).height();

    var triggerAt = 400;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('#proj1-contents').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});

function showMain() {
	$('#main').css('display', 'block');
	$('#about').css('display', 'none');
}

function showAbout(){
	$('#main').css('display', 'none');
	$('#about').css('display', 'none');
}
*/