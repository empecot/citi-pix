// define function (on.submit) and define variable (input value). Retrieve input value. 
$('#city-name').on('submit', function(e){
	var city = $('#city-type').val();
	  e.preventDefault();
// if input value equals the city name, change the background image to the designated img url for that city.
if (city === "Austin"){
 src = '../images/austin.jpg'
 $('body').css('backgroundImage','url('+src+')');
}
});



// else if (user submits "Los Angeles" or "LA" or "LAX"){
//  $('body').css('backgroundImage',../images/la.jpg);
// }

// else if (user submits "New York" or "New York City" or "NYC"){
//  $('body').css('backgroundImage',../images/nyc.jpg);
// }

// else if (user submits "San Francisco" or "SF" or "Bay Area"){
//  $('body').css('backgroundImage',../images/sf.jpg);
// }

// else if (user submits "Sydney" or "SYD"){
//  $('body').css('backgroundImage',../images/sydney.jpg);
// }





