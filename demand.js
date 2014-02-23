$(document).ready(function() {

	var demandMeat = (function() {

		var selectedRetailerTargets = [];

		function revealMessageBody () {
			$("form#zip-search-demand").hide("fast");
			$("#message-body").show("fast");
		}


		function addRetailerTarget (selection) {
			// update view based on choices
			selection = $(event.target).text();
			selectedRetailerTargets.push(selection);
			console.log("Added " + selection + " to retailer target list");
			getTargetContactInfo(selection);
		}

		function getTargetContactInfo (selection) {
			// ajax call
			$.ajax({
				url: "retailerData.json",
				dataType: "json",
				type: "get",
				success: function (data) {
					console.log("This is the data variable: " + data);
					targetContactCallback(selection);
				},
				error: function (xhr, ajaxOptions, thrownError) {
        			console.log(xhr.status);
        			console.log(thrownError);
      			}
			});
		};

		function targetContactCallback (data, retailer) {
			// on successful Ajax call --> fill in addresses/names
			$.each(data, function (i, retailer) {
                var storeName = data[i].storeName;
                // search the results using regular expression for the query
                if (data[i].storeZip == userEnteredRetailerZip) {
                    emailAddresses.push(data[i].storeContact);
                }
            });
			//$("#message-text").attr("action", "mailto:"+data[retailerName].storeContact);
			return matchingRetailerNames, emailAddresses;
		}


		function userSubmitMessage () {
			// post to database
		}


			$("#message-submit").on("click", function (event) {
				event.preventDefault();
				var buttons = {
					"Facebook": {
						className:"btn-fb",
						callback: function () {

						}
					},
					"Twitter": {
						className:"btn-twitter",
						callback: function () {

						}
					},
					"I'm done": {
						className: "btn-default",
						callback: function () {
							bootbox.dialog({
								message: "Good luck in your hunt for good meat!",
								title: "Thank you!",
								show: true,
								closeButton: true,
								animate: false,
								className: "success-dialog",
							});
						}
					}
				}; // end of buttons object

		function submitMessageCallback () {
			// share your action on social media

		}

		bootbox.dialog({
					message: "Your message has been sent!",
					title: "Success",
					show: true,
					closeButton: false,
					animate: false,
					className: "success-dialog",
					buttons: buttons
				}); // end of bootbox dialog
			});


			$("#zip-search").on("click", revealMessageBody);
			$("#retailer-results-list").click(event, addRetailerTarget);

	})();
});