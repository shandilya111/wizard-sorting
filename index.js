$(".first-line").delay(1000).fadeOut();
$(".second-line").hide();
$(".third-line").hide();
$(".house").hide();
$(".qualities").hide();
$(".apparate").hide();
// $(".thunder").hide();

setTimeout(function() {
  $(".second-line").fadeIn();
}, 2000);
setTimeout(function() {
  $(".second-line").fadeOut();
}, 4000);
setTimeout(function() {
  $(".third-line").fadeIn();
}, 5000);
setTimeout(function() {
  $(".third-line").fadeOut();
}, 8000);
setTimeout(function() {
  $(".qualities").fadeIn();
}, 9000);
setTimeout(function() {
  $(".qualities").fadeOut();
}, 12000);
setTimeout(function() {
  $(".house").fadeIn();
}, 13300);
setTimeout(function() {
  $(".apparate").fadeIn();
}, 15000);
