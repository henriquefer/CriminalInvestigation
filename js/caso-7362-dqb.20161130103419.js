(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-3').attr('src', (dpi>1) ? 'images/logo-272.png' : 'images/logo-136.png');
var a='data-src'; if($('.js-4 .slide0').hasAttr('src')) { a='src'; } $('.js-4 .slide0').attr(a, (dpi>1) ? 'images/man-856.jpg' : 'images/man-428.jpg');
var a='data-src'; if($('.js-4 .slide1').hasAttr('src')) { a='src'; } $('.js-4 .slide1').attr(a, (dpi>1) ? 'images/og2ol20-856.jpg' : 'images/og2ol20-428.jpg');
var a='data-src'; if($('.js-4 .slide2').hasAttr('src')) { a='src'; } $('.js-4 .slide2').attr(a, (dpi>1) ? 'images/boots-1868027-856.jpg' : 'images/boots-1868027-428.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/pasted-image-247.jpg' : 'images/pasted-image-123.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-300.jpg' : 'images/pasted-image-150.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/pasted-image-353.jpg' : 'images/pasted-image-177.jpg');};
if(!window.HTMLPictureElement){r();}
$('form').h5Validate();$('.js-4 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1650,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 2100});
});