	// page load
$(document).ready(function() {

	// google maps load

	// View: (no logic)
		// new demand page
		function DemandView () {
		// what happens when user clicks "submit" button?
			// reveal results section
		// what happens when user clicks retailer button?
			// retailer added to "To" in message with "X" symbol
			// retailer button appears pushed
		// what happens if user clicks "X" on retailer button ("to" field)?
			// retailer removed from "To" in message
			// button unpushed
		// what happens when user edits message text?
			// if user has empty message, highlight field in red
		// what happens when user submits message?
			// gray modal background
			// "share" dialog pop-up
		}

		// search results and message
		// submit message

	// Model: (no logic)
		// demand object
		// demand class!!!

		function DemandModel (zipcode) {
			this.zipcode: zipcode,
			this.demandTargets: [],
			this.emailAddresses: []

			// bind event handler for adding to demandTargets, email Addresses, twitterHandles -- contacts callback?
		}

		// Firebase init
		// AJAX request
		DemandModel.prototype.getContacts = function () {
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

// I only want this to happen when the user pushes the button!!!!!
	var demandMeat = new MeatDemand();
	demandMeat.view.viewMessage();

});


