var $win = $(window);
var $animationFadeIn = $('.animation-element__fadeIn');
var $animationFadeInLeft = $('.animation-element__fadeInLeft'); 
var $animationFadeInRight = $('.animation-element__fadeInRight');
var $animationFadeInDown = $('.animation-element__fadeInDown');
var $animationFadeInUp = $('.animation-element__fadeInUp');


$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $animationFadeIn.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        if ( (scrollTop + $win.height() - prev.top) > 10) {
          $self.css('opacity', '1').addClass('animate__animated animate__fadeIn');
        } 
    });

    $animationFadeInLeft.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        if ( (scrollTop + $win.height() - prev.top) > 100) {
          $self.css('opacity', '1').addClass('animate__animated animate__fadeInLeft');
        }

    });

    $animationFadeInRight.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        if ( (scrollTop + $win.height() - prev.top) > 100) {
          $self.css('opacity', '1').addClass('animate__animated animate__fadeInRight');
        }
    });

    $animationFadeInDown.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        if ( (scrollTop + $win.height() - prev.top) > 100) {
          $self.css('opacity', '1').addClass('animate__animated animate__fadeInDown');
        }
    });

    $animationFadeInUp.each(function () {
        var $self = $(this);
        var prev=$self.offset();
        if ( (scrollTop + $win.height() - prev.top) > 100) {
          $self.css('opacity', '1').addClass('animate__animated animate__fadeInUp');
        }
    });

}).scroll();
