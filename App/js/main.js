$(document).ready(function() {

	$('#search').click(function (e) {

		var city = $("#city").val();

		// console.log(city);
			e.preventDefault();

		if (city != '') {
			$.ajax({
				url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=metric" + "&APPID=81cd1f818fede55cfa2d46db0eee9e85",
				type: "GET",
				dataType: "jsonp",
				success: function (data) {
						 //console.log(data);
						  var widget = display(data);
						  $("#displayName").html(widget);

						 $("#city").val('');

				}

			});
		} else {
			$('#error').html('Field can not be empty');
		}

	});
});

function display(data) {
	 // var countryName = $("#countryName");
	// return "<h3><strong>Country</strong>: " + data.city.name +"</h3>"
	// return  countryName + data.city.name;
	var city = data.city.name;
    var weather = data.list[0].weather[0].main;
    var degree = data.list[0].main.temp + " &deg;C";
    var description = "<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + 
    ".png' width='200px' style='margin-top: 30px'";
    
    return "<h1 style='font-size:30px'> <strong>Coutry:</strong> " + city + "<h1>" + "<h2 style='font-size:25px'>" + weather + "<h2>" +
    "<div style='margin-top: -80px'> <div class='forecast-icon' width='40px' >" + description + "</div></div>" +
    "<div style='margin-top: 0px'><h6>Temperature </h6>" + degree + "</div>";
}