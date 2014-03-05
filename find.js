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
					checkedOptionsObj[property] = true;
				}
				else {
					checkedOptionsObj[property] = false;
				}

				return checkedOptionsObj;
			}

			meatChoice = new MeatChoice(checkedMeat, checkedOptionsObj);

			console.log("checked meat: " + checkedMeat);
			console.log("checked options: " + checkedOptionsObj);
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