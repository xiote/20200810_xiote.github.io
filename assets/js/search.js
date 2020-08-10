$(document).ready(function() {
    $('#tagname').focus();
    $('.message').hide();

});

$('#tagname').live('keyup', function() {
  var tagname = $('#tagname').val().toLowerCase();
  $('.posts, .message').hide();
  if (tagname=="") {
    $('.posts').show();
  } else {
    $('.posts[data-name*="'+tagname+'"]').show();
  }
  if ($('.posts:visible').length < 1) {
    $('.message').show();
  }
});
