// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var request = require("request");

console.log("Sunset in Hawaii is at...");
request("ENDPOINT URL WOULD GO HERE", function(error, response, body){
	if(!error && response.statusCode === 200){
		var parsedData = JSON.parse(body);
		console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
	}
});