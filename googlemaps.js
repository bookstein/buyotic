function googleMapsLoaded() {

  var map, retailerResults, infowindow;

  // event handler: on click, geocode
  function searchUserInformationOnClick (zipcode) {
    var userLocationAndPreferencesObj = {
      city: "",
      zipcode: zipcode
    }
    console.log("Now loading map for "+ userLocationAndPreferencesObj.zipcode);
    // show "loading"
    $(".map-container").css("display", "block");
    // geocode input zipcode
    sendGeocodeRequest(userLocationAndPreferencesObj.zipcode);
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
      types: ['store', 'establishment'],
      location: latlng,
      radius: 16000 // 16,000 meters, or almost 10 miles
    }

    // new map
    map = new google.maps.Map(document.getElementById("map-canvas"), {
      center: latlng,
      zoom: 16 // zoom level isn't working
    });

    // make request to Places Service
    var placesService = new google.maps.places.PlacesService(map);

    // pass in request and callback, send search request
    placesService.textSearch(textSearchRequest, textSearchCallback);
  }

  function textSearchCallback (results, status, pagination) {
    //on success
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      //add markers
      createMarkers(results);
      // create infowindow
        // createInfoWindow(results);
      //add pagination

    }

    //on error
    else {
      alert("We're sorry, there was an error: " + status)
    }
  }

  function createMarkers (places) {
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0, place; place = places[i]; i++) {
      // icon image for each place
      var image = "images/buyotic-logo-sm.png";

      // Format place address as only street address
      var addressSnippet = place.formatted_address.split(",", 2);

      var retailerListItem = $('<li><button class="btn btn-default btn-sm retailer-results-btn"><span class="place-name">' + place.name + '</span><span class="retailer-results-list-address">  ' + addressSnippet + '</span></button></li>');

      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      retailerListItem.appendTo("#retailer-results-list");
      console.log(addressSnippet);
      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  }

  /*
  // SEE http://duncan99.wordpress.com/2011/10/08/google-maps-api-infowindows/ for help!
  function createInfoWindow (places) {

    var info = "<div id='window-content'><h3>" + results.name + "</h3><br><h5>" + results.vicinity + "</h5></div>";


    infowindow = new google.maps.InfoWindow({
      content: info,
      map: map
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(map, this);
    });

    // assuming you also want to hide the infowindow when user mouses-out
    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
    });
  }
*/

  function initialize() {
    retailerResults = $("#retailer-results-list");
    $("form#zip-search-demand").submit(function (event) {
      var zipcode = $("#zip-entry").val();
      searchUserInformationOnClick(zipcode);
      event.preventDefault();
    });
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
