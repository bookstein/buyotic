function googleMapsLoaded() {

  // event handler: on click, geocode
  function searchUserInformationOnClick () {
    var zipcode = $("#zip-entry").val();
    var userLocationAndPreferencesObj = {
      city: "",
      zipcode: zipcode
    }
    // show "loading"

    // geocode input zipcode
    sendGeocodeRequest(userLocationAndPreferencesObj.zipcode);
    console.log(userLocationAndPreferencesObj.zipcode);
  }

  function sendGeocodeRequest (location) {
    //geocode request object literal + callback
    var geocodeRequest = {
        address: location
    };

    // creates new Geocoder service object
    var geocodingService = new google.maps.Geocoder();

    // sends geocode request (object, callback)
    geocodingService.geocode(geocodeRequest, geocodeCallback);
  }

  function geocodeCallback (results, status) {
    //success
      //return zipcode as latlng
      //pass info to text search request
      // remove loading text
    // error
      // show error message

    if (status == google.maps.GeocoderStatus.OK) {
      var latlng = results[0].geometry.location;
      //initializeMap(latlng);
      //run text search request
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
    $("#zip-search").on("click", searchUserInformationOnClick);
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
