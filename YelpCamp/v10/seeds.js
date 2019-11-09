//UPDATED SEEDS FILE

var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff71",
            username: "Jill"
        }
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff77",
            username: "Jane"
        }
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.deleteMany({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err) {
            if (err){
                console.log(err);
            }
            console.log("removed comments!");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author:{
                                    id : "588c2e092403d111454fff76",
                                    username: "Jack"
                                }
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
        })
    }); 
    //add a few comments
}
 
module.exports = seedDB;







//==========================
//OLD SEEDS FILE
//==========================

// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment = require("./models/comment");

// var data = [
// 	{
// 		name: "Cloud's Rest", 
// 		image: "https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587_960_720.jpg",
// 		description: "Lumbersexual freegan hoodie health goth, hell of drinking vinegar banjo cronut. Mumblecore food truck VHS 				literally, blog leggings live-edge tousled meggings. Williamsburg jianbing woke, neutra chillwave keffiyeh crucifix succulents. 		Forage umami trust fund, adaptogen tofu affogato XOXO."
// 	},
// 	{
// 		name: "Desert Mesa", 
// 		image: "https://cdn.pixabay.com/photo/2016/11/29/09/09/abstract-1868624_960_720.jpg",
// 		description: "Lumbersexual freegan hoodie health goth, hell of drinking vinegar banjo cronut. Mumblecore food truck VHS 				literally, blog leggings live-edge tousled meggings. Williamsburg jianbing woke, neutra chillwave keffiyeh crucifix succulents. 		Forage umami trust fund, adaptogen tofu affogato XOXO."
// 	},
// 	{
// 		name: "Canyon Floor", 
// 		image: "https://cdn.pixabay.com/photo/2019/06/28/03/07/camping-4303359_960_720.jpg",
// 		description: "Lumbersexual freegan hoodie health goth, hell of drinking vinegar banjo cronut. Mumblecore food truck VHS 				literally, blog leggings live-edge tousled meggings. Williamsburg jianbing woke, neutra chillwave keffiyeh crucifix succulents. 		Forage umami trust fund, adaptogen tofu affogato XOXO."
// 	}
// ]

// function seedDB(){
// 		//Remove all campgrounds
// 		Campground.remove({}, function(err){
// 		if(err){
// 			console.log(err);
// 		}
// 		console.log("removed campgrounds!");
// 			//add a few campgrounds
// 			data.forEach(function(seed){
// 				Campground.create(seed, function(err, campground){
// 					if(err){
// 						console.log(err);
// 					} else {
// 						console.log("added a campground");
// 						//create a comment
// 						Comment.create(
// 							{
// 								text: "This place is great, but I wish there was internet",
// 							 	author: "Homer"
// 							}, function(err, comment){
// 								if(err){
// 									console.log(err);
// 								} else {
// 									campground.comments.push(comment);
// 									campground.save();
// 									console.log("Created new comment");
// 								}
// 							});
// 					}
// 				});
// 			});
// 	});
// 	//add a few comments
// }

// module.exports = seedDB;