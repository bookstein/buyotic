function googleMapsLoaded() {
  // event handler: on click, geocode
  function searchZipCodeOnClick () {
    var zipcode = $("#zip-entry").val();
    // show "loading"
    // geocode input zipcode
    sendGeocodeRequest(zipcode);
  }

  function sendGeocodeRequest (zipcode) {
    //geocode request object literal + callback
    var geocodeRequest = {
        address: zipcode
    };

    // creates new Geocoder service object
    var geocodingService = new google.maps.Geocoder();

    // sends geocode request (object, callback)
    geocodingService.geocode(geocodeRequest, geocodeCallback);
  }

  function geocodeCallback (results, status) {
    //success
      //return zipcode as latlng
      //initialize map
      // remove loading text
    // error
      // show error message

    if (status == google.maps.GeocoderStatus.OK) {
      var latlng = results[0].geometry.location;
      initializeMap(latlng);
    }

    else {
      alert("We're sorry, we couldn't process your address: " + status);
    }

  }

  function sendTextSearchRequest () {
    // create text request object

    // make request to Places Service
    //service = new google.maps.places.PlacesService(map);

    // pass in request and callback, send search request
    //service.textSearch(request, callback);
  }

  function textSearchCallback () {
    //on success


    //on error
  }

  function initializeMap (latlng) {
    // map options
     var mapOptions = {
        zoom: 10,
        center: latlng,
      };

    // new map
    $("#map-canvas").css("display", "block");
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }


  function initialize() {
    $("#zip-search").on("click", searchZipCodeOnClick);
  }

  initialize();
};

$(function() {
  // adds <script> to HTML only after page has loaded, uses callback to call initialize()
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCcAyejmYX9-FWjezJw1Ywh-8tOXV_sFFg&sensor=true&' +
        'callback=googleMapsLoaded';
    document.body.appendChild(script);
  };

  loadScript();

});
