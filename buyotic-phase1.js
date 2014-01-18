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

	function MeatChoice (meatType, advancedSearch) {
		this.meatType = meatType;
		this.organic = advancedSearch.organic;
		this.local = advancedSearch.local;
		this.lean = advancedSearch.lean;
		this.freeRange = advancedSearch.freeRange;
	};

	$("#submit").click(function() {

		//creates an object containing checked input
		var checked = [];
		$("input:checkbox:checked").each(function () {
			checked.push($(this).val());
			return checked;
		});

		for (var i = 0; i <= checked.length; i++) {
			if (checked[i]) {
				var meat = new MeatChoice();
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