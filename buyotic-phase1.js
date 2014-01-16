$(document).ready(function() {

	$("#choose-purpose").find("button").click(function () {

		$("#choose-purpose").css("display", "none");

		if ($(this).val() == "find") {
			$("#find-meat").css("display", "block");
		}

		else {
			$("#demand-meat").css("display", "block");
		}
	});

	$("")

	$(".meat-choice").find("button").click(function (e) {
		e.preventDefault();
		window.location.href = "http://www.google.com/?q=" + $(this).attr('value');
	});


});