
// define function (on.submit) and define variable (input). Retrieve input value. 
$('#submit-btn').on('submit', function(){
	var city = ('#city-type').val();
	  e.preventDefault();

if (city === "Austin"){
 $('body').css('background-image', '../images/austin.jpg');
}

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

});



