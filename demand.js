$(document).ready(function() {

	function MeatDemand () {
		this.model = {
			retailers: [],
			selectedRetailerTargets: [],
			message: $("#message-text").text(),
			requireToSubmitMessage: function () {
			// demand state must be X in order to submit (must have retailers and message)
			}
		};

		this.view = {
			messageView: function () {
				// show message-body
			},
			retailerContactField: function () {
				// retailer names
			}
		};

		this.controller = {

			addRetailerTarget: function () {
			// adds retailers to selectedRetailerTargets array

			},
			removeRetailerTarget: function () {
			// removes retailers from selectedRetailerTargets array
			}

		};
	};


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

});


