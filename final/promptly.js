//calendar widget

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sáturday'];
var current = new Date();
document.getElementById('week_day').innerHTML = weekDay[current.getDay()];
document.getElementById('big_day').innerHTML = current.getDate();
document.getElementById('month').innerHTML = months[current.getMonth()];


// local storage

$(function() {

	$('.content-textarea').each(function(){
		var $textarea = $(this);
		var $textarea_id = $textarea.attr('data-textarea-id');
		if(localStorage.getItem('textarea'+$textarea_id) === null){
			$textarea.val('');
		} else {
			$textarea.val(localStorage.getItem('textarea'+$textarea_id));
		}
	})

	// saves textarea status
	$('.content-textarea').on( "keyup", function() {
		var $textarea = $(this);
  	var content = $textarea.val();
		var storageName = 'textarea'+$textarea.attr('data-textarea-id')
  	localStorage.setItem(storageName, content);
	});

	// loads
});

// end local storage



//cardflip

$(document).ready(function(){
  $('.card').click(function(){
   $(this).toggleClass("flipped", true);
  });

  $('.done-btn').click(function(){
   $(this).toggleClass("flipped", false);
  });
});

function flipCardBack(e) {
  e.stopPropagation();
  $(this).parents('.card').removeClass('flipped');
}
$('.done-btn').on('click', flipCardBack);

//end cardflip---
