function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8
};

var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
};

// adds <script> to HTML only after page has loaded, uses callback to call initialize()
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcAyejmYX9-FWjezJw1Ywh-8tOXV_sFFg&sensor=true' +
      'callback=initialize';
  document.body.appendChild(script);
};

window.onload = loadScript;
