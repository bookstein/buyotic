$(document).ready(function() {



	var buyotic = (function () {


		//User pledges to buy ABF meat
		//
		//
		var pledgeBuyotic = (function () {

		})();

		// User chooses use case
		//View
		function displayNextPage(nextPage, previousPage) {
			$(previousPage).css("display", "none");
			$(nextPage).css("display", "block");
			//location = $(pageID).val();
		}

		//Model

		// Controller
		var userNavigation = (function () {
			var mainPage = $("#choose-purpose");

			/*$("#choose-purpose").on("click.next", "button", function(event) {
				event.preventDefault();
				var buttonChoice = $(this).val();
				displayNextPage(buttonChoice, mainPage);
			});*/


			$(".go-back").on("click.back", "button", function(event) {
				event.preventDefault();
				var currentPage = $(this).parent("section").attr("id");
				displayNextPage(mainPage, currentPage);
			});

		})();


		// npm can be used to install Mongo or SQL
		var reportMeat = (function() {

		})();






	});