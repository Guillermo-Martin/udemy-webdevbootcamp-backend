var express = require("express");
var app = express();

//Visiting "/"
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

//Visting "/speak/animal"
app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	if(animal === "pig"){
		res.send("The pig says 'oink'");
	} else if(animal === "cow"){
		res.send("The cow says 'Moo'");
	} else if(animal === "dog"){
		res.send("The dog says 'Woof woof!'");
	} else {
		res.send("Sorry, page not found...What are you doing with your life?");
	};
});

//Visiting "/repeat/word/number of times to repeat"
app.get("/repeat/:word/:number", function(req, res){
	var word = req.params.word;
	var num = Number(req.params.number);
	var response = "";
	for(var i = 0; i < num; i++){
		response += word + " ";
	};
	res.send(response);
});

//Any other route
app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

//Telling express to listen for requests (start server)
app.listen(3000, function(){
	console.log("Connected to the server!")
});
