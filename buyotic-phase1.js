$(document).ready(function() {

	// define a class to create "meat choices" objects
	function MeatChoice (meat) {
		this.meat = meat;
	};

	function seeLocations(choice) {
		window.location.href = "http://www.google.com/?q="+choice.meat;
	};

	$("button").click(function () {
		var btnValue = $(this).attr("value");
		var choice = new MeatChoice(btnValue);
		seeLocations(choice);
	})



});