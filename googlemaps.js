$(document).ready(function () {


// event handler: on click, geocode
  function searchZipCodeOnClick () {
    // show "loading"
    // geocode input zipcode
  }


// event handler: on click, geocode
  function searchZipCodeOnClick () {
    // show "loading"
    // geocode input zipcode
  }

  function sendGeocodeRequest () {
    //geocode request object literal + callback
    // sends geocode request with object + callback
  }

  function geocodeCallback () {
    //success
      //return zipcode as latlng
      //initialize map
      // remove loading text
    // error
      // show error message
  }

  function initializeMap (latlng) {
    // unpack zip code into latlong
    // map options
    // new map
  }


  function initialize() {
    $("#zip-search").on("click", searchZipCodeOnClick);
  }



});





  var geocoder;
  var map;

  function initializeMap() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(42.095287, -79.3185139); //????
    var mapOptions = {
      zoom: 8,
      center: //latlng,
      //mapTypeId:
    };

    $("#map-canvas").css("display", "block");
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  };


  var geocodeAddress = (function () {
      var address = $("#zip-entry").val(); // use zip value from user input!!!
      var GeocodeRequest = {
        address: address,
        callback: resultsCallback();
      };

      function resultsCallback (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
          }

          else {
            alert("We're sorry, we couldn't process your address: " + status);
          }
      });

      geocoder.geocode(geocodeRequest, resultsCallback);
  })();

  // adds <script> to HTML only after page has loaded, uses callback to call initialize()
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcAyejmYX9-FWjezJw1Ywh-8tOXV_sFFg&sensor=true&' +
        'callback=initializeMap';
    document.body.appendChild(script);
  };

  $("#zip-search").on("click", loadScript);
