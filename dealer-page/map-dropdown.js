$( function() {
  $("#stateSelector").selectmenu({
    change: function( event, data ) {
      $(".dealerInfoPopup").css({
        display: "none"
      });
      $("#" + data.item.value + "").css({
        fill: "#f05423",
      });
      $("#" + data.item.value + "-content").css({
        display: "block"
      });
    }
  });
});