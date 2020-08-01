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

  // setCookie
  // example: setCookie('user', 'John', {secure: true, 'max-age': 3600});
  function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // Default values can be set if required
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  // deleteCookie
  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
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

  // Change comment color
  switch (getCookie('DAYNIGHT')) {
    case 'DAY': 
      $('.utterances-frame').attr('src', 'https://utteranc.es/utterances.html?src=https://utteranc.es/client.js&repo=dnessi/dnessi.github.io&issue-term=url&theme=github-light&crossorigin=anonymous&url={{ site.url }}{{ page.url }}&origin={{ site.url }}&pathname={{ page.url }}&title=Comments&descrption=Comments');
    break;
    case 'NIGHT': 
      $('.utterances-frame').attr('src', 'https://utteranc.es/utterances.html?src=https://utteranc.es/client.js&repo=dnessi/dnessi.github.io&issue-term=url&theme=github-dark&crossorigin=anonymous&url={{ site.url }}{{ page.url }}&origin={{ site.url }}&pathname={{ page.url }}&title=Comments&descrption=Comments');
    break;
  }
});