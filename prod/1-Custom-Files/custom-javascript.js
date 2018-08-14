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



    /* ----------------ADAPTIVE TABS----------------- */
    // Variables
    var clickedTab = $(".adaptive-tabs > .active-adaptive-tab");
    var tabWrapper = $(".tab__content");
    var activeTab = tabWrapper.find(".active-adaptive-tab");
    var activeTabHeight = activeTab.outerHeight();

    // Show tab on page load
    activeTab.show();

    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);

    $(".adaptive-tabs > li").on("click", function () {

        // Remove class from active tab
        $(".adaptive-tabs > li").removeClass("active-adaptive-tab");

        // Add class active to clicked tab
        $(this).addClass("active-adaptive-tab");

        // Update clickedTab variable
        clickedTab = $(".adaptive-tabs .active-adaptive-tab");

        // fade out active tab
        activeTab.fadeOut(250, function () {

            // Remove active class all tabs
            $(".tab__content > li").removeClass("active-adaptive-tab");

            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $(".tab__content > li").eq(clickedTabIndex).addClass("active-adaptive-tab");

            // update new active tab
            activeTab = $(".tab__content > .active-adaptive-tab");

            // Update variable
            activeTabHeight = activeTab.outerHeight();

            // Animate height of wrapper to new tab height
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function () {

                // Fade in active tab
                activeTab.delay(50).fadeIn(250);

            });
        });
    });
    /* ----------------ADAPTIVE TABS----------------- */

    /* ----------------IMAGE CAROUSEL BASIC----------------- */
    var t = setInterval(function () {
        var moveImage = $(".tuner-image-carousel").width() * -1;
        $(".tuner-image-carousel ul").animate({
            marginLeft: moveImage
        }, 1500, function () {
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({
                marginLeft: 0
            });
        })
    }, 6000);
    /* ----------------IMAGE CAROUSEL BASIC----------------- */

    /* ----------------tuner steps----------------- */
    //    $(".tuner-steps-child-one").hover().find("h1").addClass( "gdp-that-thing" );
    $(".tuner-steps-child-one").hover(function () {
        $(".tuner-steps-child-one").find("h1").addClass("gdp-that-thing");
    }, function () {
        $(".tuner-steps-child-one").find("h1").removeClass("gdp-that-thing");
    });
    $(".tuner-steps-child-two").hover(function () {
        $(".tuner-steps-child-two").find("h1").addClass("gdp-that-thing");
    }, function () {
        $(".tuner-steps-child-two").find("h1").removeClass("gdp-that-thing");
    });
    $(".tuner-steps-child-three").hover(function () {
        $(".tuner-steps-child-three").find("h1").addClass("gdp-that-thing");
    }, function () {
        $(".tuner-steps-child-three").find("h1").removeClass("gdp-that-thing");
    });
    $(".tuner-steps-child-four").hover(function () {
        $(".tuner-steps-child-four").find("h1").addClass("gdp-that-thing");
    }, function () {
        $(".tuner-steps-child-four").find("h1").removeClass("gdp-that-thing");
    });
    /* ----------------tuner steps----------------- */

});
