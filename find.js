$(document).ready(function () {

	var findMeat = (function() {

		//Model
		// user-submitted data
		function MeatChoice (checkedMeat, checkedOptions) {
			this.checkedMeat = checkedMeat;
			this.organic = checkedOptions.organic;
			this.local = checkedOptions.local;
			this.lean = checkedOptions.lean;
			this.freeRange = checkedOptions.freeRange;
			this.zip = $("#zip").val();
			this.radius = $("#radius").val();
		};

		/*hash map*/

		//View
		function FindMeatView () {
			$("#submit-form").submit(this.submitMeatSearch.bind(this));
		}

		FindMeatView.prototype.submitMeatSearch = function (event) {
			event.preventDefault();
			var checkedMeat = [];
			/*hash map
			var checkedOptionsObj = {
				organic: 0,
				local: 1,
				lean: 2,
				freeRange: 3
			};*/
			 var checkedOptionsObj = {};
			 var zipcode = $("input#zip").val();

			$("#meat-types").find("input:checkbox:checked").each(function () {
				checkedMeat.push($(this).val());
				return checkedMeat;
			});

			/*$("#search-options").find("input:checkbox:checked").each(function () {
				var property = $(this).val();
				checkedOptionsObj[property] = property;
				return checkedOptionsObj;
			});*/


			for (property in checkedOptionsObj) {
				if($("#" + property).find("input").is(":checked")) {
					checkedOptionsObj[property] = property;
				}
				else {
					checkedOptionsObj[property] = null;
				}

				return checkedOptionsObj;
			}

			if (checkedMeat.length > 0) {

				if (zipcode.length == 5) {
					meatChoice = new MeatChoice(checkedMeat, checkedOptionsObj);
					console.log("checked meat: " + checkedMeat);
					console.log("checked options: " + checkedOptionsObj);
					alert("Our site is currently under construction. Please return later to search for antibiotic-free meat near you!");
				}

				else {
					alert ("Please enter a valid 5-digit zip code!");
					$("input[type=text]").val("");
				}
			}

			else {
				alert ("Please select a type of meat!");
			}

		}

		var findMeatView = new FindMeatView();
		var meatChoice;

	})();

});

	// User submits data about meat in local area (crowdsourcing)
		//
		//
		// use node (or MySQL) to interact with Firebase or MongoDB (backend)
		// node = do it all in JS!
		// npm can be used to install Mongo or SQL