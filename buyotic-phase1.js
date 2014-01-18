$(document).ready(function() {


	//var buyotic = function () {

	//User pledges to buy ABF meat
	//
	//

	// User chooses use case
	$("#choose-purpose").find("button").click(function () {
		$("#choose-purpose").css("display", "none");
		if ($(this).val() === "find") {
			$("#find-meat").css("display", "block");
		}
		else {
			$("#demand-meat").css("display", "block");
		}
	});

	// User looks for meat in their local area
	//
	//

		// user meats entered in array
		// each item in array will become an object in MeatChoice
		// each meat type will share the same array of checked options

	function MeatChoice (checkedMeat, checkedOptions) {
		this.checkedMeat = checkedMeat;
		this.organic = checkedOptions.organic;
		this.local = checkedOptions.local;
		this.lean = checkedOptions.lean;
		this.freeRange = checkedOptions.freeRange;
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

	$("#submit").click(function() {

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


	// User submits data about meat in local area (crowdsourcing)
	//
	//






	// User sends a message to store management asking for brands/certifications
	//
	//
		//View
			// get retailer name, address, twitter handle, prompted by user entry
			var retailerName = function () {

				var retailerName = $("#retailer-name").val();

			};

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







	// User shares their message on social networks via Buyotic
	//
	//

	//};


});