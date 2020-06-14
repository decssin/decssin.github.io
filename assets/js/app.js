$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================

  $('.o-wrapper').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // =================
  // Off Canvas menu
  // =================

  $('.js-off-canvas-toggle, .js-off-canvas-container.is-active').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');

    // IE Check
    if (window.document.documentMode) {
      let navigation = $('.c-off-canvas-content');

      if (!navigation.attr('data-ie')) {
        navigation.attr('data-ie', window.document.documentMode);

        navigation.css({
          'transition':'transform .4s cubic-bezier(0.16, 0.68, 0.43, 0.99)',
          'transform':'translate3d(0px, 0px, 0px)',
          'z-index':'1'
        });
      } else {
        navigation.removeAttr('data-ie')

        navigation.css({
          'transition':'transform .4s cubic-bezier(0.16, 0.68, 0.43, 0.99)',
          'transform':'translate3d(300px, 0px, 0px)',
          'z-index':'1'
        });
      }
    }
  });

});