//$(document).ready(function () {	// page load

	var zipcode, demandView, demandModel, demandController;

	// View: (no logic)
		// new demand page: this thing shows user results, shows user selection
		function DemandView () {
			this.$zipSubmit = $("#zip-search");
			this.$zipForm = $("#zip-search-demand");
			this.$demand = $("#demand-page");
			this.$resultsList = $("#retailer-results-list");

		// what happens when user clicks "submit" button?
			// reveal google maps results section (list)
			//this.$zipSubmit.on("click", this.showDemandPage.bind(this)); MUST COMMENT THIS OUT IN ORDER FOR GMAPS TO WORK
			$("#new-search").on('click', this.newSearch.bind(this));
		// what happens when user clicks retailer button?
			// retailer added to "To" in message with "X" symbol (selection)
			// retailer button appears pushed
			this.$resultsList.on("load", this.targetAdded.bind(this));

			// what happens if user clicks "X" on retailer button ("to" field)?
			// retailer removed from "To" in message
			// button unpushed
			this.$resultsList.on("load", this.targetRemoved.bind(this));

		// what happens when user edits message text?
			// if user has empty message, highlight field in red
		// what happens when user submits message?
			// gray modal background
			// "share" dialog pop-up
		}

		// show search results and message

		DemandView.prototype.showDemandPage = function () {
			this.$demand.show();
			this.$zipSubmit.prop("disabled", true);
			var newSearchBtnHTML = "<input class='btn btn-default' id='new-search' type='button' value='New Search'/>"
			this.$zipForm.append(newSearchBtnHTML);
		}

		DemandView.prototype.newSearch = function () {
			this.$demand.hide();
			$("#new-search").hide();
			this.$zipSubmit.prop("disabled", false);
		}

		function targetAdded () {
			// this contains an event handler though...!
			this.$resultsList.on("click", "button", function (event) {
				event.preventDefault();
				var targetName = $(this).find(".place-name").text();
				$(this).addClass("active");
				$(this).clone().text(targetName).appendTo("#message-targets");
			});
		}

		function targetRemoved () {

		}

		// submit message

	// Model: (no logic)
		// demand object
		// demand class!!!

		function DemandModel (zipcode) {
			this.zipcode = zipcode;
			this.demandTargets = [];

			// bind event handler for adding to demandTargets, email Addresses, twitterHandles -- contacts callback?
		}

		// Firebase init
		// AJAX request
		function getContacts () {
			$.ajax({
				url: "retailerData.json",
				dataType: "json",
				type: "get",
				success: function (data) {
					contactInfoCallback(data);
				},
				error: function (xhr, ajaxOptions, thrownError) {
	    			console.log(xhr.status);
	    			console.log(thrownError);
	  			}
			});
		};
		// store selected retailers
		// push meatDemand object to Firebase

	// Controller (logic)
		// bind event handlers
		// create new MeatDemand on zip submit with zipcode parameter

		function DemandController () {
			// user submits zip code
			$("form#zip-search-demand").submit(this.searchZip.bind(this));
			// user chooses targets
			// user removes targets
			// user sends message
		}

		// add prototype to validate message (triggers alerts if something is wrong)

		DemandController.prototype.searchZip = function (event) {
			event.preventDefault();
			zipcode = $("#zip-entry").val();
			if (zipcode.length == 5) {
				demandView.showDemandPage();
		    	searchUserInformation(zipcode);
		    	return zipcode;
	    	}
	    	else {
	    		alert("Please enter a valid 5-digit zipcode.");
	    		return;
	    	}
	    }

		//addTarget:
		//removeTarget:

	// after google returns store results, add this to the prototype
	// what it should do is get the contact info of the store results





	function contactInfoCallback (data) {
		var emailAddresses =[];
		var twitterHandles =[];
		// on successful Ajax call --> fill in addresses/names
		$.each(data, function (i) {
            var storeName = data[i].storeName;
            // search the results using regular expression for the query
            if (storeName == selection) {
                emailAddresses.push(data[i].storeContact);
                twitterHandles.push(data[i].twitter);
                console.log("Email: " + emailAddresses);
                console.log("Twitter: " + twitterHandles);
            }
        });
		//$("#message-text").attr("action", "mailto:"+data[retailerName].storeContact);
		return emailAddresses, twitterHandles;
	};


	// load page
	function initializePage () {
		demandView = new DemandView();
		demandController = new DemandController();
	};

	// load Google Maps
	function loadGoogleMapsScript() {
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCcAyejmYX9-FWjezJw1Ywh-8tOXV_sFFg&sensor=true&' +
	        'callback=initializePage';
	    document.body.appendChild(script);
  	};

	loadGoogleMapsScript();
	//initializePage();

	$("#new-search").click(function () {
		// clear all input
		demandView.newSearch();
	});

//});


// Google Maps


  var map, infowindow;

  // event handler: on click, geocode
  function searchUserInformation (zipcode) {
    var userLocationAndPreferencesObj = {
      city: "",
      zipcode: zipcode
    }
    console.log("Now loading map for "+ userLocationAndPreferencesObj.zipcode);
    // show "loading"
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
      radius: 1600 // 1600 meters, or about 1 miles
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

// QUESTIONS
	// should I just do a new var demandView = DemandView() instead of showNewDemandPage??
	// bind all event handlers at once?
	// where should I stick zipcode?? View? Model? Controller? Do not repeat...
	// why do I have to bind the new func as well as class.prototype.functionName = function ???
	// what's the good of classes if I can't actually see them in the insepctor? (at least not with doc.ready)
	// why isn't binding events working???

