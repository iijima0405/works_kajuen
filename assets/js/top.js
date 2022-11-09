$(function () {
  // スライド
  $('.mainvisual').slick({
    autoplay: true,
    fade: true,
    speed: 1700,
    interval: 3000,
    
  });

  var $win = $(window),
    $main = $('main'),
    $nav = $('nav'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';
  // var marTop,
  // marTop = 210; 戻すときセミコロン直すの忘れずに

  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });


});