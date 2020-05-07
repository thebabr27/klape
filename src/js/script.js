$(".hamburger").on("click", ()=>{$(".overlay").toggleClass("h-100");$(".hamburger span").toggleClass("fa-bars");$(".hamburger span").toggleClass("fa-times");$(".hamburger").toggleClass("unclickable");setTimeout(( ) => {
	$(".hamburger").toggleClass("unclickable");

}, 500);
});$("#headingOne").on("click", ()=>{$("#headingOne .fa").toggleClass("fa-chevron-right");$("#headingOne .fa").toggleClass("fa-chevron-down");$("#headingOne").toggleClass("unclickable");setTimeout(( ) => {
	$("#headingOne").toggleClass("unclickable");

}, 500);
});$("#headingTwo").on("click", ()=>{$("#headingTwo .fa").toggleClass("fa-chevron-right");$("#headingTwo .fa").toggleClass("fa-chevron-down");$("#headingTwo").toggleClass("unclickable");setTimeout(( ) => {
	$("#headingTwo").toggleClass("unclickable");

}, 500);
});$("#headingThree").on("click", ()=>{$("#headingThree .fa").toggleClass("fa-chevron-right");$("#headingThree .fa").toggleClass("fa-chevron-down");$("#headingThree").toggleClass("unclickable");setTimeout(( ) => {
	$("#headingThree").toggleClass("unclickable");

}, 500);
});$('.carousel').carousel({interval: 4000})