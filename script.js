// define function (on.submit) and define variable (input value). Retrieve input value. 
$('#enter_city').on('submit', function(e){
	  e.preventDefault();
	  var city = $('#city-type').val();

	  $('body').removeClass();

// if input value equals the city name, change the background image to the designated img url for that city.

	   if (city === "nyc" || city === 'new york city' || city === 'new york') {
        $('body').addClass('nyc');
    }
   	   if (city === "austin" || city === 'atx') {
        $('body').addClass('austin');
    }
	   if (city === "san francisco" || city === 'sf' || city === 'bay area') {
        $('body').addClass('sf');
    }
	   else if (city === "sydney" || city === 'syd') {
        $('body').addClass('sydney');
	}
	   if (city === "los angeles" || city === 'la' || city === 'lax') {
        $('body').addClass('la');
    }
});






