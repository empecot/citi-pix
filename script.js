
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

    $('#city-type').append('<option>Select a city!</option>');

    for (var i = 0; i <cities.length; i++) {
   $('#city-type').append('<option val=' +cities[i]+ '>'+ cities[i] + '</option>');
}

$('#enter_city').on('change', function(e){
	  e.preventDefault();
	  var city = $('#city-type').val().toLowerCase();
      $('body').removeClass();


	   if (city === "nyc" || city === 'new york city' || city === 'new york') {
        $('body').addClass('nyc');
    }
   	   else if (city === "austin" || city === 'atx') {
        $('body').addClass('austin');
    }
	   else if (city === "san francisco" || city === 'sf' || city === 'bay area') {
        $('body').addClass('sf');
    }
	   else if (city === "sydney" || city === 'syd') {
        $('body').addClass('sydney');
	}
	   else if (city === "los angeles" || city === 'la' || city === 'lax') {
        $('body').addClass('la');
    }
});



