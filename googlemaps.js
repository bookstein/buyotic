function initialize() {
  //need asynchronous request and callback for Geocoding service
  initializeGeocoder();


  var mapOptions = {
    center: // center of requested zip code
    zoom: 8
};

function initializeGeocoder () {
  var geocoder = new google.maps.Geocoder();
  console.log(geocoder);
  var zip = $("#zip").val(); // set zip code equal to user zip code input!!!
  var geocodeRequest = {
    address: zip,
    getGeocode: function(result, status) {

    }
  };


// if there's a geocoding error
var reasons=[];

reasons[G_GEO_SUCCESS]            = "Success";

reasons[G_GEO_MISSING_ADDRESS]    = "Missing Address: The address was either missing or had
                                    no value.";

reasons[G_GEO_UNKNOWN_ADDRESS]    = "Unknown Address:  No corresponding geographic location
                                    could be found for the specified address.";

reasons[G_GEO_UNAVAILABLE_ADDRESS]= "Unavailable Address:  The geocode for the given address
                                    cannot be returned due to legal or contractual reasons.";

reasons[G_GEO_BAD_KEY]            = "Bad Key: The API key is either invalid or does not match
                                    the domain for which it was given";

reasons[G_GEO_TOO_MANY_QUERIES]   = "Too Many Queries: The daily geocoding quota for this site
                                    has been exceeded.";

reasons[G_GEO_SERVER_ERROR]       = "Server error: The geocoding request could not be
                                      successfully processed.";


  geocoder.geocode(geocodeRequest);
}

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
