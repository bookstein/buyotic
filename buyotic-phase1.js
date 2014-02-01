$(document).ready(function() {




	var buyotic = (function () {


		//User pledges to buy ABF meat
		//
		//
		var pledgeBuyotic = (function () {

		})();

		// User chooses use case
		var userChoosesPurpose = (function () {
			$("#choose-purpose").find("button").on("click", function () {
				$("#choose-purpose").css("display", "none");
				if ($(this).val() === "find") {
					$("#find-meat").css("display", "block");
					location = "#find-meat";
				}
				else {
					$("#demand-meat").css("display", "block");
					location = "#demand-meat";
				}
			});
		})();

		// User looks for meat in their local area
		//
		//
		var findMeat = (function() {
			// user meats entered in array
			// each item in array will become an object in MeatChoice
			// each meat type will share the same array of checked options

			function MeatChoice (checkedMeat, checkedOptions, location) {
				this.checkedMeat = checkedMeat;
				this.organic = checkedOptions.organic;
				this.local = checkedOptions.local;
				this.lean = checkedOptions.lean;
				this.freeRange = checkedOptions.freeRange;
				this.zip = $("#zip").val();
				this.radius = $("#radius").val();
			};


			//why is this part so repetitious? how could i do it better?
			// what does it mean to write these vars with $? (see thomas's example with $target)
			// i am trying really hard to get some practice with the for-in loop and that's why I'm going out of my way!

			/*var organic = $("#organic").find("input");
			var local = $("#local").find("input");
			var lean = $("#lean").find("input");
			var freeRange = $("#free-range").find("input");*/

		//hash map
			var checkedOptionsObj = {
				organic: 0,
				local: 1,
				lean: 2,
				freeRange: 3
			};

			// never got this to work because of difficulty finding a way to run through properties
				// while using property name as substitute for jQuery call (e.g. $("#organic").find("input")... )

			for (property in checkedOptionsObj) {

				if($("#" + property).find("input").is(":checked")) {
					checkedOptionsObj[property] = true;
				}
				else {
					checkedOptionsObj[property] = false;
				}
			}

			$("#submit-meat-search").click(function() {

				//creates an array containing checked meat input
				var checkedMeat = [];
				$("#meat-types").find("input:checkbox:checked").each(function () {
					checkedMeat.push($(this).val());
					return checkedMeat;
				});

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
		//
		var demandMeat = (function() {

			//View
			// get retailer name, address, twitter handle, prompted by user entry
			$("#retailer-name-submit").on("click", function (event) {
				event.preventDefault();
				// text of input
				$.ajax({
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
			});


				//libraries that do dropdown autocomplete - jQuery autocomplete


				// get store contact email address (e.g. customerservice@berkeleybowl.com) and logo/face/image

				// autopopulate a tweet and an email -- user chooses which one to send

				// after message is sent, ask user for permission to be added to Buyotic wall



			//Data
				// match user entry with store info already in database

				// ?? send message to correct email address/twitter handle (POST?)

				// data also stored in Buyotic database: user info, request made, store name, meat type

			//Control

				// user selects/confirms store

				// user sends message




		})();


		// User shares their message on social networks via Buyotic
		//
		//


	})();

});