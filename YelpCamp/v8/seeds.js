var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_960_720.jpg",
		description: "Lumbersexual freegan hoodie health goth, hell of drinking vinegar banjo cronut. Mumblecore food truck VHS 				literally, blog leggings live-edge tousled meggings. Williamsburg jianbing woke, neutra chillwave keffiyeh crucifix succulents. 		Forage umami trust fund, adaptogen tofu affogato XOXO."
	},
	{
		name: "Desert Mesa", 
		image: "https://cdn.pixabay.com/photo/2016/11/29/09/09/abstract-1868624_960_720.jpg",
		description: "Lumbersexual freegan hoodie health goth, hell of drinking vinegar banjo cronut. Mumblecore food truck VHS 				literally, blog leggings live-edge tousled meggings. Williamsburg jianbing woke, neutra chillwave keffiyeh crucifix succulents. 		Forage umami trust fund, adaptogen tofu affogato XOXO."
	},
	{
		name: "Canyon Floor", 
		image: "https://cdn.pixabay.com/photo/2019/06/28/03/07/camping-4303359_960_720.jpg",
		description: "Lumbersexual freegan hoodie health goth, hell of drinking vinegar banjo cronut. Mumblecore food truck VHS 				literally, blog leggings live-edge tousled meggings. Williamsburg jianbing woke, neutra chillwave keffiyeh crucifix succulents. 		Forage umami trust fund, adaptogen tofu affogato XOXO."
	}
]

function seedDB(){
		//Remove all campgrounds
		Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds!");
			//add a few campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err);
					} else {
						console.log("added a campground");
						//create a comment
						Comment.create(
							{
								text: "This place is great, but I wish there was internet",
							 	author: "Homer"
							}, function(err, comment){
								if(err){
									console.log(err);
								} else {
									campground.comments.push(comment);
									campground.save();
									console.log("Created new comment");
								}
							});
					}
				});
			});
	});
	//add a few comments
}

module.exports = seedDB;