$(document).ready(function() {




	var buyotic = (function () {


		//User pledges to buy ABF meat
		//
		//
		var pledgeBuyotic = (function () {

		})();

		// User chooses use case
		//View
		function displayNextPage(pageID) {
			$(pageID).css("display", "block");
			location = $(pageID).val();
		}

		//Model

		// Controller
		var userChoosesPurpose = (function () {
			$("#choose-purpose").on("click.choose", "button", function(event) {
				var buttonChoice = $(this).val();
				displayNextPage(buttonChoice);
			});

		})();

		// User looks for meat in their local area
		var findMeat = (function() {
		//View

		//Model
		// user-submitted data
			function MeatChoice (checkedMeat, checkedOptions, location) {
				this.checkedMeat = checkedMeat;
				this.organic = checkedOptions.organic;
				this.local = checkedOptions.local;
				this.lean = checkedOptions.lean;
				this.freeRange = checkedOptions.freeRange;
				this.zip = $("#zip").val();
				this.radius = $("#radius").val();
			};

		/*hash map
			var checkedOptionsObj = {
				organic: 0,
				local: 1,
				lean: 2,
				freeRange: 3
			};*/

			for (property in checkedOptionsObj) {

				if($("#" + property).find("input").is(":checked")) {
					checkedOptionsObj[property] = true;
				}
				else {
					checkedOptionsObj[property] = false;
				}
			}

			// creates an object containing checked options

				var checkedOptions = {};
				$("#search-options").find("input:checkbox:checked").each(function () {
					var property = $(this).val();
					checkedOptions[property] = true;
					return checkedOptions;
				});

				for (var i = 0; i <= checkedMeat.length; i++) {
					if (checkedMeat[i]) {
						var meat = checkedMeat[i];
						console.log(meat);
						meat = new MeatChoice(meat, checkedOptions);
						console.log(meat);
					}
				}

		// Controller
			function submitMeatSearch () {
				$("#submit-meat-search").on("click", function() {
					var checkedMeat = [];
					$("#meat-types").find("input:checkbox:checked").each(function () {
						checkedMeat.push($(this).val());
						return checkedMeat;
					});
				});
			};




			});
		})();

		// User submits data about meat in local area (crowdsourcing)
		//
		//
		// use node (or MySQL) to interact with Firebase or MongoDB (backend)
		// node = do it all in JS!
		// npm can be used to install Mongo or SQL
		var reportMeat = (function() {

		})();




		// User sends a message to store management asking for brands/certifications
		//

		var demandMeat = (function() {

			//View
				//dropdown: an unordered list of stores whose names are in the database!

				//filtered by user input (text)

				//libraries that do dropdown autocomplete - jQuery autocomplete

				// get store contact email address (e.g. customerservice@berkeleybowl.com) and logo/face/image

				// autopopulate a tweet and an email -- user chooses which one to send

				// after message is sent, ask user for permission to be added to Buyotic wall



			//Data
				// match user entry with store info already in database

				// ?? send message to correct email address/twitter handle (POST?)

				// data also stored in Buyotic database: user info, request made, store name, meat type
				//ajax request
			var req = $.ajax({
					url: "retailerData.json",
					dataType: "json",
					type: "get",
					success: function (data) {
						console.log(data);
						var retailerName = $("#retailer-name-search").val();
						$("#message-text").attr("action", "mailto:"+data[retailerName].storeContact); // insert contact info into "mailto" action attribute
							// show retailer address in span #retailer-address
						$("#retailer-address").text(data[retailerName].storeAddress);
					},
					error: function (xhr, ajaxOptions, thrownError) {
	        			console.log(xhr.status);
	        			console.log(thrownError);
	      			}
				});



			//Control

				// user selects/confirms store
			$("#retailer-name-submit").on("click", function (event) {
				event.preventDefault();
			};

				// user sends message




		})();


		// User shares their message on social networks via Buyotic
		//
		//


	})();

});