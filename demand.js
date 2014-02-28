	// page load
$(document).ready(function() {

	// google maps load

	// demand class!!!

	function MeatDemand (zipcode) {
		this.zipcode: zipcode,
		this.demandTargets: [],
		this.emailAddresses: [],
		this.twitterHandles: []

		// bind event handler for adding to demandTargets, email Addresses, twitterHandles -- contacts callback?
	}

	// View: (no logic)
		// new demand
		// search results and message
		// submit message

	// Model: (no logic)
		// AJAX request
		// store selected retailers
		// push meatDemand object to Firebase

	// Controller (logic)
		// bind event handlers
		// create new MeatDemand on zip submit with zipcode parameter



	// after google returns store results, add this to the prototype
	// what it should do is get the contact info of the store results

	function loadContactInfo () {
		MeatDemand.prototype.getContacts = function () {
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
	};

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

// I only want this to happen when the user pushes the button!!!!!
	var demandMeat = new MeatDemand();
	demandMeat.view.viewMessage();

});


