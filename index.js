document.getElementById('toggleButton').addEventListener('click', function() {
    var headers = document.getElementsByClassName('header2');
    for (var i = 0; i < headers.length; i++) {
      headers[i].classList.toggle('hide-header');
    }
  });
  