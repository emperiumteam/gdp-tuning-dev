/* CUSTOM JAVASCRIPT */
/* --------------------------------------------
TABLE OF CONTENTS:
1. Home Page "Select Your Truck Section"
2. Dealer Page map selection

----------------------------------------------- */
$(document).ready(function () {
    /* ----------------------------------------------- */
    /* ------------------1. SELECT YOUR TRUCK--------- */
    /* ----------------------------------------------- */
    
    var vwTarget = -0.15;
    var vwOrigin = -1.0;
    var duration = 400;
    
    //Function to the css rule
    function checkSize() {
//        var size = parseInt(document.getElementById("#powerstrokeTruck").style.right);
        var size = parseInt($("#powerstrokeTruck").css("right"));
        var currentVW = $(window).width();
        var test = size / currentVW;
        var testTwo = Math.round(test * 100);

        if (testTwo == '-53') {
            vwTarget = -0.53;
        } else if(testTwo == '-49') {
            vwTarget = -0.49;
        } else if(testTwo == '-40') {
            vwTarget = -0.40;
        } else if(testTwo == '-27') {
            vwTarget = -0.27;
        } else if(testTwo == '-17') {
            vwTarget = -0.17;
        } else {
            vwTarget = -0.15;
        }
    }

    $("#logosGroup").hover(function () {
        $("#powerstrokeTruck").animate({
            right: $(window).width() * vwOrigin
        }, duration);

        $("#powerstrokeImg").hover(function () {
            $("#powerstrokeTruck").animate({
                right: $(window).width() * vwTarget
            }, duration);
        }, function () {
            $("#powerstrokeTruck").animate({
                right: $(window).width() * vwOrigin
            }, duration);
        });

        $("#duramaxImg").hover(function () {
            $("#duramaxTruck").animate({
                right: $(window).width() * vwTarget
            }, duration);
        }, function () {
            $("#duramaxTruck").animate({
                right: $(window).width() * vwOrigin
            }, duration);
        });

        $("#cumminsImg").hover(function () {
            $("#cumminsTruck").animate({
                right: $(window).width() * vwTarget
            }, duration);
        }, function () {
            $("#cumminsTruck").animate({
                right: $(window).width() * vwOrigin
            }, duration);
        });

    }, function () {
        $("#powerstrokeTruck").animate({
            right: $(window).width() * vwTarget
        }, duration);
    });
    
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
    
    /* ----------------------------------------------- */
    /* ------------------SELECT YOUR TRUCK END-------- */
    /* ----------------------------------------------- */



    /* ----------------------------------------------- */
    /* ------------------2. Dealer Page - Map--------- */
    /* ----------------------------------------------- */
    var headTag = document.getElementsByTagName('head')[0];
    var jqueryUiCss = document.createElement('link');
    jqueryUiCss.rel = 'stylesheet';
    jqueryUiCss.type = 'text/css';
    jqueryUiCss.href = 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';
    headTag.insertBefore(jqueryUiCss, headTag.firstChild);

    $(function () {
        $("#texas").css({
            "fill": "#f05423",
            "stroke": "#f05423",
            "stroke-width": "2px",
        });
        $("#texas-content").css({
            "display": "block"
        });
        $("#stateSelector").selectmenu({
            change: function (event, data) {
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

    $(".manualTruckLogosFigure").find("a").click(function (e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 380
        });
    });
});
