$( function() {
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
        "stroke-width": "5px",
      });
      $("#" + data.item.value + "-content").css({
        "display": "block"
      });
    }
  });
});