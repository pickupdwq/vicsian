$(()=>{
	let navHeight=$('nav').height();
	let footerHeight=$('footer').height();
	let totalHeight=navHeight+footerHeight;
	$('#main-content').css('min-height',$(window).height()-totalHeight);

	// slider
})