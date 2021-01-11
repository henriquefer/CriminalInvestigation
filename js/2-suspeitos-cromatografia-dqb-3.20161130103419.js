(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-47').attr('src', (dpi>1) ? 'images/logo-272.png' : 'images/logo-136.png');
$('.js-48').attr('src', (dpi>1) ? 'images/pasted-image-247.jpg' : 'images/pasted-image-123.jpg');
$('.js-49').attr('src', (dpi>1) ? 'images/pasted-image-300.jpg' : 'images/pasted-image-150.jpg');
$('.js-50').attr('src', (dpi>1) ? 'images/pasted-image-353.jpg' : 'images/pasted-image-177.jpg');
$('.js-51').attr('src', (dpi>1) ? 'images/igv24fawzwpxobbtofje-430.jpeg' : 'images/igv24fawzwpxobbtofje-215.jpeg');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-52').attr('src', 'images/code22355ca8f6f70179c4410ce0e86869ee-205.png');
$('.js-53').attr('src', 'images/code4d24c4c226913c4cdf3cb0039f5498a4-208.png');
$('.js-54').attr('src', 'images/code9d15ac1af7d303072ab86d25f46ec27f-204.png');
$('.js-55').attr('src', 'images/code629c93b11c502bd908474639e422b247-187.png');

}

});