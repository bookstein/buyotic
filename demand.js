//$(document).ready(function () {	// page load

	var zipcode, demandView, demandModel, demandController;

	// View: (no logic)
		// new demand page: this thing shows user results, shows user selection
		function DemandView () {
			this.$zipSubmit = $("#zip-search");
			this.$zipForm = $("#zip-search-demand");
			this.$demand = $("#demand-page");
			this.$resultsList = $("#retailer-results-list");

			this.$demand.hide();

		// what happens when user clicks "submit" button?
			// reveal google maps results section (list)
			//this.$zipSubmit.on("click", this.showDemandPage.bind(this)); MUST COMMENT THIS OUT IN ORDER FOR GMAPS TO WORK

		// what happens when user clicks retailer button?

			// only bind this after results...!!?
			// retailer added to "To" in message with "X" symbol (selection)
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


	var demandMeat = new DemandView();

	$("#zip-search").submit(function () {
		var zipcode = $("#zip-entry").val();

	})
// I only want this to happen when the user pushes the button!!!!!
	//demandMeat.view.viewMessage();



