document.addEventListener( 'DOMContentLoaded', function() {
  var sliders = document.getElementsByClassName('splide');
  for (var i = 0; i < sliders.length; i++){
    new Splide(sliders[i], {
      keyboard:     true,
      rewind:       true,
      gap:          '1.5em',
    }).mount();
  }
});