import $ from 'jquery';
import 'bootstrap';

import './src/scss/app.scss';
import 'prismjs/themes/prism-tomorrow.css';

window.$ = $;

$(document).ready(function() {
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 75) {
      $('.navbar').addClass('sticky');
      $('.scroll-to-top').show();
    } else {
      $('.navbar').removeClass('sticky');
      $('.scroll-to-top').hide();
    }
  });

  $('.scroll-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
