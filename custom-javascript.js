/* CUSTOM JAVASCRIPT */
/* --------------------------------------------
TABLE OF CONTENTS:
1. Home Page "Select Your Truck Section"
2. Dealer Page map selection

----------------------------------------------- */
$(document).ready(function(){
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js");
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js");
var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
jqueryScript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jqueryScript);

var jqueryUiScript = document.createElement('script');
jqueryUiScript.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js';
jqueryUiScript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jqueryUiScript);

var jqueryUiCss = document.createElement('link');
jqueryUiCss.rel = 'stylesheet';
jqueryUiCss.type = 'css/text';
jqueryUiCss.href = 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';
document.getElementsByTagName('head')[0].appendChild(jqueryUiCss);


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



/* ----------------------------------------------- */
/* ------------------2. Dealer Page - Map--------- */
/* ----------------------------------------------- */
$( function() {
  $("#canada").css({
    "fill": "#f05423",
    "stroke": "#f05423",
    "stroke-width": "2px",
  });
  $("#canada-content").css({
    "display": "block"
  });
  $("#stateSelector").selectmenu({
    change: function( event, data ) {
      $(".dealerInfoPopup").css({
        "display": "none"
      });
      $(".active-dealer").css({
        "fill": "#c5370a",
        "stroke-width": "0",
      });
      $("#" + data.item.value + "").css({
        "fill": "#f05423",
        "stroke": "#f05423",
        "stroke-width": "2px",
      });
      $("#" + data.item.value + "-content").css({
        "display": "block"
      });
    }
  });
});
/* ----------------------------------------------- */
/* ------------------Dealer Page - Map END-------- */
/* ----------------------------------------------- */
});