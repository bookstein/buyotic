$(document).ready(function() {

	var demandMeat = (function() {

		function revealMessageBody () {
			$("form#zip-search-demand").hide("fast");
			$("#message-body").show("fast");
		}


		function displayRetailerTargetsInBody () {
			// update view based on choices
		}



		function getTargetContactInfo (data) {
			var emailAddresses = [];
			var twitterHandles = [];
			// ajax call
			/*	$("#zip-search").on("click", function (event) {
				event.preventDefault();
				$.ajax({
					url: "retailerData.json",
					dataType: "json",
					type: "get",
					success: function (data) {
						getMatchingRetailerData(data);
						showMessageBody();
					},
					error: function (xhr, ajaxOptions, thrownError) {
	        			console.log(xhr.status);
	        			console.log(thrownError);
	      			}
				});
			}); */

			// search json file for all objects with matching zip codes -- iterative

			$.each(data, function (i, retailer) {
                var storeName = data[i].storeName;
                // search the results using regular expression for the query
                if (data[i].storeZip == userEnteredRetailerZip) {
                    emailAddresses.push(data[i].storeContact);
                }
            });
            console.log("Matching retailers:" + matchingRetailerNames)
            console.log("Emails sent to:" + emailAddresses);
			//$("#message-text").attr("action", "mailto:"+data[retailerName].storeContact);
			return matchingRetailerNames, emailAddresses;
		}



		function retailerTargetContactCallback
			// on successful Ajax call --> fill in addresses/names

		function userSubmitMessage
			// post to database

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

		function submitMessageCallback
			// share your action on social media

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


			$("#zip-search").on("click", revealMapAndMessage);

	})();
});