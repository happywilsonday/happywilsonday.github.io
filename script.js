/*$(".carousel").carousel({
	interval: 0,
});*/

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

$(document).ready(function () {
	var owl = $(".owl-carousel");

	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		center: true,
	});

	/*keyboard navigation*/
	$(document.documentElement).keyup(function (event) {
		if (event.keyCode == 37) {
			/*left key*/
			owl.trigger("prev.owl.carousel", [700]);
		} else if (event.keyCode == 39) {
			/*right key*/
			owl.trigger("next.owl.carousel", [700]);
		}
	});
});
