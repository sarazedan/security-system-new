$(function(){
	
	 //featured work shuflle
    $('.gallery ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
	 
	    //console.log($(this).data('class'));
		if($(this).data('class')==='all'){
			$('.shuffle-imgs .col-sm').css('opacity',1);
		}
		else{
		
			$('.shuffle-imgs .col-sm').css('opacity','.09');
			$($(this).data('class')).parent().css('opacity',1);
			
		}
			
		});
			 $(window).scroll(function(){
		 
		 var navbar=$('.navbar');
		 if($(window).scrollTop() >= navbar.height()){
			 
			 navbar.addClass('scrolled');
		 }
		 else{
			 
			 navbar.removeClass('scrolled');
			 
		 }
	 
	 });