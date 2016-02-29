// Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; 
// use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
    // console.log(cities[2]);
for (var i = 0; i <cities.length; i++) {
    // console.log(cities[i]);
    $('.citi-options').append('<option val="'+cities[i]+'">cities[i]</option>');   
};
$('#enter_city').on('change', function(e){
	  e.preventDefault();
	  var city = $('#city-type').val();

	  $('body').removeClass();

// if input value equals the city name, change the background image to the designated img url for that city.

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



// When the user changes the input of the drop-down, update the background image based on what they selected

// Use $.append() in your iteration on the drop-down menu

// Use the $.attr() function to update html classes

// Look up and use the $.change event handler to capture user actions
// Get the value of user input using $.val()
// Use  if/else conditionals to control the flow of your application
// Display your pseudocode as Javascript comments


