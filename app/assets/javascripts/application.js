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
//= require windows.min

$(document).ready();

$('#nav-icon').click(function(){
	  $('.overlay').slideToggle( 'show' );
		$(this).toggleClass('open');
	});

$('select.div-toggler').change(function(){
    var target = $(this).data('target');
    $(target).children().addClass('hide');
    var show = $("option:selected", this).data('show');
    $(show).removeClass('hide');
});
