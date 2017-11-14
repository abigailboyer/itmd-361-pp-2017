$(document).ready(function() {
  var doorbell = new Audio('media/doorbell.mp3');
  //turn the thing into a button ??
  $("#doorbell").replaceWith('<button id="doorbellButton">play doorbell</button>');
  //yes
  $("#doorbellButton").click(function() {
    ringDoorbell();
  });
  //yes ,,beautiful  Good

  $(document).on("keypress", function(press) {
    if (press.key === "d") {
      ringDoorbell();
    }
  });

  // hell !!!! yea !!

  function ringDoorbell() {
    doorbell.play();
  }
});
