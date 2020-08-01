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

  // IE Canvas event
  function ieCanvas(navigation) {
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

  // Toggle button event
  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');

    // Canvas menu left blank
    $('.c-off-canvas-blank').toggleClass('is-active');

    // IE Check
    if (window.document.documentMode) {
      ieCanvas($('.c-off-canvas-content'));
    }
  });

  // Canvas left blank event
  $('.c-off-canvas-blank').click(function(e) {
    if ($(this).hasClass('is-active')) {
      $('.js-off-canvas-toggle').toggleClass('is-active');
      $('.js-off-canvas-container').toggleClass('is-active');

      // Canvas menu left blank
      $(this).toggleClass('is-active');

      // IE Check
      if (window.document.documentMode) {
        ieCanvas($('.c-off-canvas-content'));
      }
    }
  });

  // IE alert message
  if (window.document.documentMode) {
    document.getElementById('mIEssage').style.display = 'block';
    document.body.style.paddingTop = '27px';
  }

  // Day & Night
  document.getElementById('day-night').onclick = function() {
    if (document.body.classList.contains('day')) {
      document.body.classList.remove('day');
      document.body.classList.add('night');

      setCookie('DAYNIGHT', 'NIGHT', {
        secure    : true, 
        samesite  : 'Strict', 
        path      : '/', 
        'max-age' : 2600000 // About 30 days
      });
    } else {
      document.body.classList.remove('night');
      document.body.classList.add('day');

      setCookie('DAYNIGHT', 'DAY', {
        secure    : true, 
        samesite  : 'Strict', 
        path      : '/', 
        'max-age' : 2600000
      });
    }
  }

});