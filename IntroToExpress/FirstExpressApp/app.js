var express = require("express");
var app = express();

// "/" => "Hi there!"
	//route syntax
app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
	console.log("SOMEONE MADE A REQUEST TO /DOG")
	res.send("MEOW!");
});

//the ":" defines a pattern; it tells express to not listen for the exact text, but to listen for that pattern
app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
	console.log(req.params);
	res.send("WELCOME TO THE COMMENTS PAGE!");
});

//"*" (splat); it's a catch-all for all other URLs (routes) other than the ones we've defined
app.get("*", function(req, res){
	res.send("YOU ARE A STAR!!");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
	console.log('Server listening on port 3000');
});