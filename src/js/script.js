$(".hamburger").on("click", ()=>{$(".hamburger").toggleClass("d-none");$(".hamburger-unclickable").toggleClass("d-none");setTimeout(( ) => {
	$(".hamburger-unclickable").toggleClass("d-none");
$(".hamburger-close").toggleClass("d-none");

}, 500);
});$(".hamburger-close").on("click", ()=>{$(".hamburger-close").toggleClass("d-none");$(".hamburger-unclickable").toggleClass("d-none");setTimeout(( ) => {
	$(".hamburger-unclickable").toggleClass("d-none");
$(".hamburger").toggleClass("d-none");

}, 500);
});$('.carousel').carousel({interval: 4000})