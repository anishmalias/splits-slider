// JavaScript Document

	$(window).load(function(){
		var sum=0;
		$('.banner-container li img').each(function(){ 
			sum += $(this).width();
		});
		$('.banner-container ul').width(sum);
	});
	$(function(){
		var winWidth = $(".banner-container").width();
		var ulWidthCount = 0;
		ulWidthCount = $('.banner-container li').size();
		$(".banner-container li").width(winWidth/ulWidthCount);
		$(".banner-container li").hover(function(){			
			ulWidthCount = $('.banner-container li').size();
			var imgWidth = $(this).find("img").width();
			var bannerLi = winWidth - imgWidth;
			var remWidth = ulWidthCount - 1;
			var appWidth = bannerLi/remWidth;
			$(".banner-container li").stop(true, false).animate({width: appWidth},700);
			$(this).stop(true, false).animate({width: imgWidth},700);
			$(this).find("span.overlay").stop(true, false).fadeOut();
		}, function(){
			$(this).animate({width: winWidth/ulWidthCount},700);
			$(".banner-container li").animate({width:winWidth/ulWidthCount},700);
			$(this).find("span.overlay").fadeIn();
		});	
	});