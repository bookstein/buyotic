function googleMapsLoaded() {

  var map;

  // event handler: on click, geocode
  function searchUserInformationOnClick () {
    var zipcode = $("#zip-entry").val();
    var userLocationAndPreferencesObj = {
      city: "",
      zipcode: zipcode
    }
    // show "loading"
    $(".map-container").css("display", "block");
    // geocode input zipcode
    sendGeocodeRequest(userLocationAndPreferencesObj.zipcode);
    console.log(userLocationAndPreferencesObj.zipcode);
  }

  function sendGeocodeRequest (location) {
    //geocode request object literal + callback
    var geocodeRequest = {
        address: location
    };

    // initiates new Geocoder service object
    var geocodingService = new google.maps.Geocoder();

    // sends geocode request (object, callback)
    geocodingService.geocode(geocodeRequest, geocodeCallback);
  }

  function geocodeCallback (results, status) {
    //success
      //return zipcode as latlng
      //pass info to text search request
      // remove loading text
    if (status == google.maps.GeocoderStatus.OK) {
      var latlng = results[0].geometry.location;

      //run text search request
      initializeWithTextSearchRequest(latlng);
    }

    // error
      // show error message
    else {
      alert("We're sorry, there was an error: " + status);
    }

  }

  function initializeWithTextSearchRequest (latlng) {
    // create text request object
    var textSearchRequest = {
      query: "grocery stores",
      location: latlng,
      radius: 16000 // 16,000 meters, or almost 10 miles
    }

    // new map
    map = new google.maps.Map(document.getElementById("map-canvas"), {
      center: latlng,
      zoom: 15
    });

    // make request to Places Service
    var placesService = new google.maps.places.PlacesService(map); // bug: map is not defined here

    // pass in request and callback, send search request
    placesService.textSearch(textSearchRequest, textSearchCallback);
  }

  function textSearchCallback (results, status) {
    //on success
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      //add markers
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }

    //on error
    else {
      alert("We're sorry, there was an error: " + status)
    }
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
