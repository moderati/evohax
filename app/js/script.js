$(document).ready(function() {
	var tl = new TimelineMax();

	tl.staggerFromTo('.stagg1', .35, {alpha:0, y: 100}, {alpha:1, y:80}, .5, "+=1");
	tl.to('.stagg1', .35,{y:0, ease:Power1.easeOut}, "+=.5");
	tl.staggerFromTo('.stagg2', .35, {alpha:0, y: 20}, {alpha:1, y:0, ease:Power1.easeInOut}, .4,"-=.35");

	$('button.stagg2').on('click', function(){
		TweenMax.fromTo('#start-up', .35, {alpha:0, y:0}, {alpha:0, y:50, ease:Power1.easeOut});
		TweenMax.fromTo('#priority', .35, {alpha:0, y:'-80%'}, {alpha:1, y:'-100%', ease:Power1.easeOut});
		TweenMax.staggerFromTo('.stagg3', .35, {alpha:0, y:20}, {alpha:1, y:0, ease:Power1.easeOut, delay: .3}, .35);
		TweenMax.staggerFromTo('.stagg4', .35, {alpha:0, y:'-40%'}, {alpha:1, y:'-50%', ease:Power1.easeOut, delay: 1}, .3);
	});

	$('li.email:eq(1)').on('click', function(){
		if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
			TweenMax.fromTo('#full-email', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});	
		};
	});
	$('li.email:eq(2)').on('click', function(){
		if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
			TweenMax.fromTo('#full-email', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});	
		};
	});
	$('li.email:eq(3)').on('click', function(){
		if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
			TweenMax.fromTo('#full-email', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});	
		};
	});
	$('li.event:eq(1)').on('click', function(){
		if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
			TweenMax.fromTo('#full-event', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});
		};
	});
	$('li.event:eq(2)').on('click', function(){
		if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
			TweenMax.fromTo('#full-event', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});
		};
	});
	$('li.event:eq(3)').on('click', function(){
		if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
			TweenMax.fromTo('#full-event', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});
		};
	});

	// Button listeners

	$('li.email:eq(1)').on('keydown', function(e){
		if (e.keyCode == 13) { 	
			if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
				TweenMax.fromTo('#full-email', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
				TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});	
			};
		}
	});
	$('li.email:eq(2)').on('keydown', function(e){
		if (e.keyCode == 13) { 	
			if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
				TweenMax.fromTo('#full-email', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
				TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});	
			};
		}
	});
	$('li.email:eq(3)').on('keydown', function(e){
		if (e.keyCode == 13) { 	
			if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
				TweenMax.fromTo('#full-email', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
				TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});	
			};
		}
	});
	$('li.event:eq(1)').on('keydown', function(e){
		if (e.keyCode == 13) { 	
			if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
				TweenMax.fromTo('#full-event', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
				TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});
			};
		}
	});
	$('li.event:eq(2)').on('keydown', function(e){
		if (e.keyCode == 13) { 	
			if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
				TweenMax.fromTo('#full-event', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
				TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});
			};
		}
	});
	$('li.event:eq(3)').on('keydown', function(e){
		if (e.keyCode == 13) { 	
			if($('#full-email').css('opacity') < 1 && $('#full-event').css('opacity') < 1){
				TweenMax.fromTo('#full-event', .35, {alpha:0, x:'-50%', y:'-40%', zIndex:10000}, {alpha:1, x:'-50%', y:'-50%', ease:Power1.easeOut});
				TweenMax.to('.lists', .35, {alpha:.05, ease:Power1.easeOut});
			};
		}
	});


	$('#priority').on('click keydown',function(){
		if($('#full-email').css('opacity') >= 1 && $('li.email:eq(3)').hasClass('active')){
			TweenMax.fromTo('#full-email', .35, {alpha:1, x:'-50%', y:'-50%'}, {alpha:0, x:'-50%', y:'-40%', zIndex:-10000, ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:1, ease:Power1.easeOut, delay:.35});
			TweenMax.to('li.email:eq(3)', .25, {alpha:0, x:-200, ease:Power1.easeOut, delay:.35});
		}
		else if($('#full-email').css('opacity') >= 1 && $('li.email:eq(2)').hasClass('active')){
			TweenMax.fromTo('#full-email', .35, {alpha:1, x:'-50%', y:'-50%'}, {alpha:0, x:'-50%', y:'-40%', zIndex:-10000, ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:1, ease:Power1.easeOut, delay:.35});
			TweenMax.to('li.email:eq(2)', .25, {alpha:0, x:-200, ease:Power1.easeOut, delay:.35});
			TweenMax.to(['li.email:eq(3)'], .35, {alpha:1, y:-236, ease:Power1.easeOut, delay:.35});

			setTimeout(function(){
				$('li.email:eq(3)').addClass('active');
			},300);
		}
		else if($('#full-email').css('opacity') >= 1 && $('li.email:eq(1)').hasClass('active')){
			TweenMax.fromTo('#full-email', .35, {alpha:1, x:'-50%', y:'-50%'}, {alpha:0, x:'-50%', y:'-40%', zIndex:-10000, ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:1, ease:Power1.easeOut, delay:.35});
			TweenMax.to('li.email:eq(1)', .25, {alpha:0, x:-200, ease:Power1.easeOut, delay:.35});
			TweenMax.to(['li.email:eq(2)', 'li.email:eq(3)'], .35, {alpha:1, y:-118, ease:Power1.easeOut, delay:.35});

			setTimeout(function(){
				$('li.email:eq(2)').addClass('active');
			},300);
		}
		else if($('#full-event').css('opacity') >= 1 && $('li.event:eq(3)').hasClass('active')){
			TweenMax.fromTo('#full-event', .35, {alpha:1, x:'-50%', y:'-50%'}, {alpha:0, x:'-50%', y:'-40%', zIndex:-10000, ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:1, ease:Power1.easeOut, delay:.35});
			TweenMax.to('li.event:eq(3)', .25, {alpha:0, x:-200, ease:Power1.easeOut, delay:.35});
		}
		else if($('#full-event').css('opacity') >= 1 && $('li.event:eq(2)').hasClass('active')){
			TweenMax.fromTo('#full-event', .35, {alpha:1, x:'-50%', y:'-50%'}, {alpha:0, x:'-50%', y:'-40%', zIndex:-10000, ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:1, ease:Power1.easeOut, delay:.35});
			TweenMax.to('li.event:eq(2)', .25, {alpha:0, x:-200, ease:Power1.easeOut, delay:.35});
			TweenMax.to(['li.event:eq(3)'], .35, {alpha:1, y:-236, ease:Power1.easeOut, delay:.35});

			setTimeout(function(){
				$('li.event:eq(3)').addClass('active');
			},300);
		}
		else if($('#full-event').css('opacity') >= 1 && $('li.event:eq(1)').hasClass('active')){
			TweenMax.fromTo('#full-event', .35, {alpha:1, x:'-50%', y:'-50%'}, {alpha:0, x:'-50%', y:'-40%', zIndex:-10000, ease:Power1.easeOut});
			TweenMax.to('.lists', .35, {alpha:1, ease:Power1.easeOut, delay:.35});
			TweenMax.to('li.event:eq(1)', .25, {alpha:0, x:-200, ease:Power1.easeOut, delay:.35});
			TweenMax.to(['li.event:eq(2)', 'li.event:eq(3)'], .35, {alpha:1, y:-118, ease:Power1.easeOut, delay:.35});

			setTimeout(function(){
				$('li.event:eq(2)').addClass('active');
			},300);
		};
	});

});