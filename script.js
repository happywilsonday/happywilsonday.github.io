$(document).on("click", '[data-toggle="lightbox"]', function (event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

$(document).ready(function () {
	randomPhoto();
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

// random image loader

const pape_photos = [
	"assets/pape_photos/@apricotcosplay_Canada.webp", 
	"assets/pape_photos/@kiirojay__Canada.webp", 
	"assets/pape_photos/@kiirojay__Canada2.webp", 
	"assets/pape_photos/@kiirojay__USA.webp", 
	"assets/pape_photos/@kiirojay__USA2.webp", 
	"assets/pape_photos/@lush_step_SaudiArabia.webp", 
	"assets/pape_photos/@lush_step_WilsoneerLand.webp", 
	"assets/pape_photos/@lush_step_WilsoneerLand2.webp", 
	"assets/pape_photos/@lush_step_WilsoneerLand3.webp", 
	"assets/pape_photos/@Lythtia0315_China.webp", 
	"assets/pape_photos/@Lythtia0315_WilsoneerLand.webp", 
	"assets/pape_photos/@mocha_oz_USA.webp", 
	"assets/pape_photos/@PastelPeachStar_USA.webp", 
	"assets/pape_photos/@PastelPeachStar_USA2.webp", 
	"assets/pape_photos/@PastelPeachStar_USA3.webp", 
	"assets/pape_photos/@tyunflan_USA.webp", 
	"assets/pape_photos/@xiao_xxY_Japan.webp", 
	"assets/pape_photos/@xiao_xxY_Japan2.webp", 
	"assets/pape_photos/@xiao_xxY_Japan3.webp", 
	"assets/pape_photos/@yy_imemma_WilsoneerLand.webp", 
	"assets/pape_photos/Anonymous_China.webp", 
	"assets/pape_photos/Anonymous_USA.webp", 
	"assets/pape_photos/des (@hrtsreki)_USA.webp", 
	"assets/pape_photos/des (@hrtsreki)_USA2.webp", 
	"assets/pape_photos/des (@hrtsreki)_USA3.webp", 
	"assets/pape_photos/Haru (@PurPleLaNd14)_France.webp", 
	"assets/pape_photos/Haru (@PurPleLaNd14)_France2.webp", 
	"assets/pape_photos/Haru (@PurPleLaNd14)_France3.webp", 
	"assets/pape_photos/Haru (@PurPleLaNd14)_France4.webp", 
	"assets/pape_photos/Haru (@PurPleLaNd14)_France5.webp", 
	"assets/pape_photos/Haru (@springbytheday)_France.webp", 
	"assets/pape_photos/Haru (@springbytheday)_France2.webp", 
	"assets/pape_photos/Haru (@springbytheday)_Indonesia.webp", 
	"assets/pape_photos/Haru (@springbytheday)_Singapore.webp", 
	"assets/pape_photos/Lemon_Kuwait.webp", 
	"assets/pape_photos/Lemon_Kuwait2.webp", 
	"assets/pape_photos/Lunacian_USA.webp", 
	"assets/pape_photos/Lunacian_USA2.webp", 
	"assets/pape_photos/luvmoona (@minna4740)_BruneiDarassalam.webp", 
	"assets/pape_photos/luvmoona (@minna4740)_BruneiDarassalam2.webp", 
	"assets/pape_photos/luvmoona (@minna4740)_WilsoneerLand.webp", 
	"assets/pape_photos/luvmoona (@minna4740)_WilsoneerLand2.webp", 
	"assets/pape_photos/luvmoona (@minna4740)_WilsoneerLand3.webp", 
	"assets/pape_photos/madz (@clawdrickclamar)_USA.webp", 
	"assets/pape_photos/meng_USA.webp", 
	"assets/pape_photos/Mumi (@hKoriMumi)_USA.webp", 
	"assets/pape_photos/myabunny_USA.webp", 
	"assets/pape_photos/myabunny_USA2.webp", 
	"assets/pape_photos/Nitsuki_日葵_Japan.webp", 
	"assets/pape_photos/Nitsuki_日葵_Japan2.webp", 
	"assets/pape_photos/Nitsuki_日葵_Japan3.webp", 
	"assets/pape_photos/Nitsuki_日葵_Japan4.webp", 
	"assets/pape_photos/Nitsuki_日葵_Japan5.webp", 
	"assets/pape_photos/pinkmustyegg_China.webp", 
	"assets/pape_photos/pinkmustyegg_China2.webp", 
	"assets/pape_photos/Pinkpaperheart_Barcelona.webp", 
	"assets/pape_photos/Pinkpaperheart_France.webp", 
	"assets/pape_photos/Pinkpaperheart_Ibiza.webp", 
	"assets/pape_photos/Pinkpaperheart_Ibiza2.webp", 
	"assets/pape_photos/Pinkpaperheart_Italy.webp", 
	"assets/pape_photos/ro (@ohnyo_ro)_USA.webp", 
	"assets/pape_photos/ro (@ohnyo_ro)_USA2.webp", 
	"assets/pape_photos/zed pwease_BaNaHills.webp"
];

function randomPhoto() {
	let randomNum1 = Math.floor(Math.random() * pape_photos.length);
	let randomNum2 = Math.floor(Math.random() * pape_photos.length);
	document.getElementById("papeGallery1").src = pape_photos[randomNum1];
	document.getElementById("papeGallery2").src = pape_photos[randomNum2];
}