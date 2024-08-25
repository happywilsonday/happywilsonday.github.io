$(".carousel").carousel({
	interval: 0,
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		center: true,
	});
});
