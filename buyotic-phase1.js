$(document).ready(function() {

	// define a class to create "meat choices" objects
	function meatChoice (meat) {
		this.meat = meat;
	};

	function seeLocations (meat) {
		console.log("You will be taken to the page for this meat!");
	};

	$("button").click(function () {
		var btnValue = $(this).attr("value");
		var choice = new meatChoice(btnValue);
		seeLocations(choice);
		function seeLocations(meat) {
			window.location.href = "www.google.com/"+meat.meat;
		};
	})



});