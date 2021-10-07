$(document).ready(function(){

$('.content-row__button').click(function(){
	$('.popup').addClass('active');
	$('body').addClass('lock');
})
$('.popup-bg').click(function(){
	$('.popup').removeClass('active');
	$('body').removeClass('lock');
})
$('.popup-close').click(function(){
	$('.popup').removeClass('active');
	$('body').removeClass('lock');
})

$('.popup-type__btn_premium').click(function(){
	$('.subPopup').addClass('active');
	$('body').addClass('lock');
})
$('.subPopup-bg').click(function(){
	$('.subPopup').removeClass('active');
	$('body').removeClass('lock');
})
$('.subPopup-close').click(function(){
	$('.subPopup').removeClass('active');
	$('body').removeClass('lock');
})

$('.popup-checkbox').click(function(){
	$(this).toggleClass('active');
	if($(this).hasClass('active')){
		$(this).find('input').attr('checked',true);
	}else{
		$(this).find('input').attr('checked',false);
	}
})

})