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
		this.organic = checkedOptions[0];
		this.local = checkedOptions[1];
		this.lean = checkedOptions[2];
		this.freeRange = checkedOptions[3];
	};

	//why is this part so repetitious? how could i do it better?
	// what does it mean to write these vars with $? (see thomas's example with $target)
	// i am trying really hard to get some practice with the for-in loop and that's why I'm going out of my way!

	/*var organic = $("#organic").find("input");
	var local = $("#local").find("input");
	var lean = $("#lean").find("input");
	var freeRange = $("#free-range").find("input");*/

// an array is not ideal because I don't want it to depend on order
// I just want to create an object with property labels!!
// change array into object checkedOptions

	var checkedOptions = {};
	$("#search-options").find("input:checkbox:checked").each(function () {
		var property = $(this).val();
		checkedOptions[property] = true;
		return checkedOptions;
	});

// never got this to work because of difficulty finding a way to run through properties
	// while using property name as substitute for jQuery call (e.g. $("#organic").find("input")... )

	/*for (property in checkedOptions) {

		if($(option).find("input").is(":checked")) {
			checkedOptions[property] = true;
		}
		else {
			checkedOptions[property] = false;
		}
	}*/

	$("#submit").click(function() {

		//creates an array containing checked input
		var checkedMeat = [];
		$("#meat-types").find("input:checkbox:checked").each(function () {
			checkedMeat.push($(this).val());
			return checkedMeat;
		});

		for (var i = 0; i <= checkedMeat.length; i++) {
			if (checkedMeat[i]) {
				var meat = checked[i];
				console.log(meat);
				meat = new MeatChoice();
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