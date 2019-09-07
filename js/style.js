$(function () {
  $('.jumper').hide();

  $('.portfolio').mouseenter(function () {
    $(this).next().animate({width:'toggle'}, 350)
  })

  $('.jumper').mouseenter(function () {
    $('.jumper').hide(600);
  })
});
