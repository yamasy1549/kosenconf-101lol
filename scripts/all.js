$(document).ready(function(){open=new Boolean(!1),$(".wrapper a[href^=#]").click(function(){var t=500,e=$(this).attr("href"),n=$("#"==e||""==e?"html":e),a=n.offset().top-20;$("body,html").animate({scrollTop:a},t,"swing")}),"/"!=location.pathname&&$('.global-nav .nav-item a[href^="./'+location.pathname.split("/")[1]+'"]').addClass("active"),$(".menu-btn").click(function(){1==open?($(".menu").animate({height:"60px"},300),$(".nav-item").animate({display:"none"},{duration:300,complete:function(){$(".nav-item").css("display","none"),$(".nav-item:first-child").css("display","block")}}),open=!1):($(".menu").animate({height:"370px"},300),$(".nav-item").css("display","block"),open=!0)}),$(window).scroll(function(){$(this).scrollTop()>100?$(".backtotop").fadeIn():$(".backtotop").fadeOut()}),$(".backtotop #backToTopBtn").click(function(){return $("body, html").animate({scrollTop:0},500),!1}),!function(t,e,n){var a,o=t.getElementsByTagName(e)[0],i=/^http:/.test(t.location)?"http":"https";t.getElementById(n)||(a=t.createElement(e),a.id=n,a.src=i+"://platform.twitter.com/widgets.js",o.parentNode.insertBefore(a,o))}(document,"script","twitter-wjs")}),function(t,e,n,a,o,i,c){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,i=e.createElement(n),c=e.getElementsByTagName(n)[0],i.async=1,i.src=a,c.parentNode.insertBefore(i,c)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-68509620-3","auto"),ga("send","pageview");