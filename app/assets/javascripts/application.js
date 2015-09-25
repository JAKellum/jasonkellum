// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require modernizr
//= require selectivizr
//= require jquery
//= require jquery_ujs
//= require smoothState
//= require windows.min

$(document).ready(function() {
  var hookEvents = function() {
    $('#nav-icon').click(function() {
  	   $('.overlay').slideToggle( 'show' );
  		 $(this).toggleClass('open');
  	});

    if ($('.aiga').length > 0) {

      $('select.div-toggler').change(function() {
        var target = $(this).data('target');
        $(target).children().addClass('hide');

        var show = $("option:selected", this).data('show');
        $(show).removeClass('hide');
      });
    }
  }

  var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

        hookEvents();
      }
    },
    onBefore: function($currentTarget, $container) {
      $('#nav-icon').off('click');
    }
  };

  window.smoothState = $('#main').smoothState(options).data('smoothState');
  hookEvents();
});
