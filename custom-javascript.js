/* CUSTOM JAVASCRIPT */
/* --------------------------------------------
TABLE OF CONTENTS:
1. Home Page "Select Your Truck Section"


----------------------------------------------- */




/* ----------------------------------------------- */
/* ------------------1. SELECT YOUR TRUCK--------- */
/* ----------------------------------------------- */
var vwTarget = -0.15;
var vwOrigin = -1.0;
var duration = 400;

$("#logosGroup").hover(function () {
  $("#powerstrokeTruck").animate({right: $(window).width() * vwOrigin}, duration);

  $("#powerstrokeImg").hover(function () {
    $("#powerstrokeTruck").animate({right: $(window).width() * vwTarget}, duration);
  }, function () {
    $("#powerstrokeTruck").animate({right: $(window).width() * vwOrigin}, duration);
  });

  $("#duramaxImg").hover(function () {
      $("#duramaxTruck").animate({right: $(window).width() * vwTarget}, duration);
  }, function () {
      $("#duramaxTruck").animate({right: $(window).width() * vwOrigin}, duration);
  });

  $("#cumminsImg").hover(function () {
      $("#cumminsTruck").animate({right: $(window).width() * vwTarget}, duration);
  }, function () {
      $("#cumminsTruck").animate({right: $(window).width() * vwOrigin}, duration);
  });
  
}, function () {
    $("#powerstrokeTruck").animate({right: $(window).width() * vwTarget}, duration);
});
/* ----------------------------------------------- */
/* ------------------SELECT YOUR TRUCK END-------- */
/* ----------------------------------------------- */