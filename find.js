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

		/*hash map
			var checkedOptionsObj = {
				organic: 0,
				local: 1,
				lean: 2,
				freeRange: 3
			};*/

			for (property in checkedOptionsObj) {

				if($("#" + property).find("input").is(":checked")) {
					checkedOptionsObj[property] = true;
				}
				else {
					checkedOptionsObj[property] = false;
				}
			}

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

		// Controller
			function submitMeatSearch () {
				$("#submit-meat-search").on("click", function() {
					var checkedMeat = [];
					$("#meat-types").find("input:checkbox:checked").each(function () {
						checkedMeat.push($(this).val());
						return checkedMeat;
					});
				});
			};

			});
	})();

	// User submits data about meat in local area (crowdsourcing)
		//
		//
		// use node (or MySQL) to interact with Firebase or MongoDB (backend)
		// node = do it all in JS!
		// npm can be used to install Mongo or SQL
});