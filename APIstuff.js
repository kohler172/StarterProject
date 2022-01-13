callWs = function(e){
	// The Endpoint URL
	let url = 'https://api.agify.io?name=' + document.getElementById("nameInput").value;//get age
  let url2 = 'https://api.nationalize.io?name=' + document.getElementById("nameInput").value;//get country code
	let url3 = 'https://restcountries.com/v3.1/alpha/'; //look up country code
  let url4 = 'https://api.kanye.rest/'; //look up country code
  
	fetch(url)
  .then(function(response) {
  	// Render the Response Status
//  	document.getElementById('result').innerHTML = response.status;
    // Parse the body as JSON
    return response.json();
  })
  .then(function(json) {
  	// Render the parsed body
  	document.getElementById('result_json').innerHTML = json.age
  })

  fetch(url2)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
   	url3 += json.country[0].country_id
    fetch(url3)
  		.then(function(response) {
      // Render the Response Status
  //  	document.getElementById('result').innerHTML = response.status;
      // Parse the body as JSON
      return response.json();
    	})
      .then(function(json) {
        // Render the parsed body
        document.getElementById('result_country').innerHTML = json[0].name.common
      })
  })

  fetch(url4)
  .then(function(response) {
    // Render the Response Status
//    document.getElementById('result').innerHTML = response.status;
    // Parse the body as JSON
    return response.json();
  })
  .then(function(json) {
    // Render the parsed body
    document.getElementById('kanye').innerHTML = json.quote
      var msg = new SpeechSynthesisUtterance();
      msg.text = json.quote
      window.speechSynthesis.speak(msg);
  })
  
}
