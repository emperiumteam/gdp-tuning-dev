/* CUSTOM JAVASCRIPT */
/* --------------------------------------------
TABLE OF CONTENTS:
1. Home Page "Select Your Truck Section"


----------------------------------------------- */






/* ----------------------------------------------- */
/* ------------------1. SELECT YOUR TRUCK--------- */
/* ----------------------------------------------- */

var scaleVal = 1.2;
var scaleValOrigin = 1;
var vwTarget = -0.5;
var vwOrigin = -0.9;
var duration = 500;

$("#powerstrokeImg").hover(function(){
  $(this).css({
    '-webkit-transform': 'scale(' + scaleVal + ')',
    '-moz-transform': 'scale(' + scaleVal + ')',
    '-ms-transform': 'scale(' + scaleVal + ')',
    '-o-transform': 'scale(' + scaleVal + ')',
    'transform': 'scale(' + scaleVal + ')'
  });
  $("#powerstrokeTruck").animate({right: $(window).width()*vwTarget}, duration);
}, function() {
  $(this).css({
    '-webkit-transform': 'scale(' + scaleValOrigin + ')',
    '-moz-transform': 'scale(' + scaleValOrigin + ')',
    '-ms-transform': 'scale(' + scaleValOrigin + ')',
    '-o-transform': 'scale(' + scaleValOrigin + ')',
    'transform': 'scale(' + scaleValOrigin + ')'
  });
  $("#powerstrokeTruck").animate({right: $(window).width()*vwOrigin}, duration);
});


$("#duramaxImg").hover(function(){
  $(this).css({
    '-webkit-transform': 'scale(' + scaleVal + ')',
    '-moz-transform': 'scale(' + scaleVal + ')',
    '-ms-transform': 'scale(' + scaleVal + ')',
    '-o-transform': 'scale(' + scaleVal + ')',
    'transform': 'scale(' + scaleVal + ')'
  });
  $("#duramaxTruck").animate({right: $(window).width()*vwTarget}, duration);
  }, function() {
  $(this).css({
    '-webkit-transform': 'scale(' + scaleValOrigin + ')',
    '-moz-transform': 'scale(' + scaleValOrigin + ')',
    '-ms-transform': 'scale(' + scaleValOrigin + ')',
    '-o-transform': 'scale(' + scaleValOrigin + ')',
    'transform': 'scale(' + scaleValOrigin + ')'
  });
  $("#duramaxTruck").animate({right: $(window).width()*vwOrigin}, duration);
});


$("#cumminsImg").hover(function(){
  $(this).css({
    '-webkit-transform': 'scale(' + scaleVal + ')',
    '-moz-transform': 'scale(' + scaleVal + ')',
    '-ms-transform': 'scale(' + scaleVal + ')',
    '-o-transform': 'scale(' + scaleVal + ')',
    'transform': 'scale(' + scaleVal + ')'
  });
  $("#cumminsTruck").animate({right: $(window).width()*vwTarget}, duration);
  }, function() {
  $(this).css({
    '-webkit-transform': 'scale(' + scaleValOrigin + ')',
    '-moz-transform': 'scale(' + scaleValOrigin + ')',
    '-ms-transform': 'scale(' + scaleValOrigin + ')',
    '-o-transform': 'scale(' + scaleValOrigin + ')',
    'transform': 'scale(' + scaleValOrigin + ')'
  });
  $("#cumminsTruck").animate({right: $(window).width()*vwOrigin}, duration);
});
/* ----------------------------------------------- */
/* ------------------SELECT YOUR TRUCK END-------- */
/* ----------------------------------------------- */