$(document).ready(function() {
  if (window.location.pathname != '/resume/') {
    $('body').keydown(function(e) {
      var code = e.keyCode || e.which;
      if (code == 39) { //right arrow
        var next = $(this).find('a.next');
        window.location.href = next[0]['href'];
      }
      else if (code == 37) { //left arrow
        var prev = $(this).find('a.prev');
        window.location.href = prev[0]['href'];
      }
    });
  }
});