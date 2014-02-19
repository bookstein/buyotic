$(document).ready(function() {


// User sends a message to store management asking for brands/certifications
		//

		var demandMeat = (function() {

			//View
				// what user will see after inputting zip and searching for retailers
			function showMessageBody () {
				$("#message-body").css("display", "block");
			};
				// show retailer names in checkboxes
/*function retailerNameCheckbox (storeName) {
	var storeNameWithoutWhiteSpace = storeName.replace(/ /g,'');
	$("<li><form><input class=\"check\" type=\"checkbox\" id="+storeNameWithoutWhiteSpace+" checked><span class=\"retailerName\">" +storeName
		+ "</span></form></li>").appendTo("#retailer-results");
};*/

				//libraries that do dropdown autocomplete - jQuery autocomplete

				// get store contact email address (e.g. customerservice@berkeleybowl.com) and logo/face/image

				// autopopulate a tweet and an email -- user chooses which one to send

				// after message is sent, ask user for permission to be added to Buyotic wall



			//Data
				// match user entry with store info already in database
			function getMatchingRetailerData (data) {
					var userEnteredRetailerZip = $("#zip-entry").val();
					var matchingRetailerNames = [];
					var emailAddresses = [];

					// search json file for all objects with matching zip codes -- iterative

					$.each(data, function (i, retailer) {
		                var storeName = data[i].storeName;
		                // search the results using regular expression for the query
		                if (data[i].storeZip == userEnteredRetailerZip) {
		                    matchingRetailerNames.push(storeName);
		                    //append new li with store name
//retailerNameCheckbox(storeName);
		                    //$("<li>"+data[i].storeName+"</li>").appendTo("#retailer-results");
		                    emailAddresses.push(data[i].storeContact);
		                }
		            });
		            console.log("Matching retailers:" + matchingRetailerNames)
		            console.log("Emails sent to:" + emailAddresses);
					//$("#message-text").attr("action", "mailto:"+data[retailerName].storeContact);
					return matchingRetailerNames, emailAddresses;
			};

				// ?? send message to correct email address/twitter handle (POST?)

				// data also stored in Buyotic database: user info, request made, store name, meat type
				//ajax request

			//Control

			// user selects/confirms store
			$("#zip-search").on("click", function (event) {
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
			});


				// user sends message
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

		})();


		// User shares their message on social networks via Buyotic
		//
		//

});