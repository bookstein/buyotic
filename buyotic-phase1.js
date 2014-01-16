$(document).ready(function() {

	$("#choose-purpose").find("button").click(function () {
		$("#choose-purpose").css("display", "none");
		if ($(this).val() === "find") {
			$("#find-meat").css("display", "block");
		}
		else {
			$("#demand-meat").css("display", "block");
		}
	});

//if user is on an iPhone (use media query!) then clicking meat button will go straight to page
	$(".meat-choice").find("button").click(function (e) {
		e.preventDefault();
		window.location.href = "http://www.google.com/?q=" + $(this).attr('value');
	});

//if user is on a desktop/laptop (use media query!) and not logged in then user must enter zip code
	$("#submit").click(function() {

		//creates an object containing checked input
		var checked = [];
		$("input:checkbox:checked").each(function () {
			checked.push($(this).val());
			return checked;
		});

		//create objects containing meat choices data, and zip code
		function MeatChoices (checked) {
			//user may choose more than one kind of meat
			this.beef = checked;
			this.chicken = checked;
			this.pork = checked;
			this.fish = checked;
			this.zip = $("#zip").val(); //add to prototype later?
		};

		var meatChoices = new MeatChoices();

		for (var meat in meatChoices) {
			//use booleans
			if (meatChoices[meat]) {

			}

		}


	})

});