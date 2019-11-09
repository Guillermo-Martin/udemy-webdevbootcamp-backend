#YelpCamp

*Add Landing Page
*Add Campgrounds Page that lists all campgrounds

Each Campground has:
*Name 
*Image


#Layout and Basic Styling
*Create our header and footer partials
*Add Bootstrap

#Creating New Campgrounds
*Setup new campground POST route
*Add in body-parser
*Setup route to show form
*Add basic unstyled form

#Style the Campgrounds Page
*Add a better header/title (using bootstrap)
*Make campgrounds display in a grid

#Style the Navbar and Form
*Add a navbar to all templates
*Style the new campground form

---v2---
#AddMongoose
*Install and configure mongoose
*Setup campground model
*Use campground model inside of our routes!

#Show Page
*Review the RESTful routes we've seen so far
*Add description to our campground model
*Show db.collection.drop()
*Add a show route/template

RESTFUL ROUTES
name	url			verb	description
====================================================
INDEX	/dogs		GET		Display a list of all dogs
NEW		/dogs/new	GET		Displays form to make a new dogs
CREATE	/dogs		POST	Add new dog to database
SHOW	/dogs/:id 	GET		Shows info about one dog

---v3---
#Refactor mongoose code
*Create a models directory
*Use module.exports
*Require everything correctly!

#Add Seeds File
*Add a seeds.js file
*Run the seeds file every time the server starts

#Add the Comment model!
*Make our errors go away!
*Display comments on campground show page

---v4---
#Comment New/Create
*Discuss nested routes
*Add the comment new and create routes
*Add the new comment form

---v5---
#Style show page
*Add sidebar to show page
*Display comments nicely

