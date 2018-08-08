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

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
    $("#wrapper").after(s);

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
        } else if (testTwo == '-49') {
            vwTarget = -0.49;
        } else if (testTwo == '-40') {
            vwTarget = -0.40;
        } else if (testTwo == '-27') {
            vwTarget = -0.27;
        } else if (testTwo == '-17') {
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
        var currentWindowWidth = $(window).width();
        var scrollPixels = -220;
        if (currentWindowWidth < 768) {
            scrollPixels = -75;
        } else {
            scrollPixels = -220;
        }
        $("html, body").animate({
            scrollTop: $(section).offset().top + scrollPixels
        });
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }


    //    SLICK RESPONSIVE CAROUSEL - http://kenwheeler.github.io/slick/
    $('.responsive-product-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });




});
