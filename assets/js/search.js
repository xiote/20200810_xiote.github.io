$(document).ready(function() {
    $('.message').hide();

    $('#search').submit(function (event) {
      event.preventDefault();
      var tagname = $('#tagname').val().toLowerCase();
      $('#tagname').val("");
      $('.posts, .message').hide();
      if (tagname=="") {
        $('.posts').show();
              } else {
      $('.posts[data-name~="'+tagname+'"]').show();
                      }
      if ($('.posts:visible').length < 1) {
        $('.message').show();
      }
    });
});
