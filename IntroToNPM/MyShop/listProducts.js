//SOMEWHAT FUN NPM EXERCISE (YAY)

//*Create a new directory named "MyShop"
//*Add a file named "listProducts.js"
//*Install the "faker" package
//*Read the faker docs and figure out how it works
//*Use faker to print out 10 random product names and prices
//*BE RESOURCEFUL! DON'T CHEAT AND FAST FORWARD!!!
//*Run your file with node and make sure it works!

var faker = require("faker");

//console.log(faker.fake("{{commerce.productName}} - {{commerce.price}}"));

console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================");

for(var i = 0; i < 10; i ++){
	console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
};