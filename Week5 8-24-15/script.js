var myFavoriteNumbers = [8, 88, 888, 8888];
// console.log()

for (var i = 0; i < myFavoriteNumbers.length; i += 1) {
	console.log(myFavoriteNumbers + i)
}

if (myFavoriteNumbers.length === 4) {
	console.log("My favorite number is 4!")
	console.log("More stuff!")
	console.log("My number is 4!")
}

var i = 0;
while (i < myFavoriteNumbers.length) {
	console.log("My favorite number!");
	i++;
}

for (var i = 0; i < myFavoriteNumbers.length; i += 1) {
	console.log(myFavoriteNumbers[i]);
}

var me = {
	name: "Ross",
	age: "32",
	location: "San Francisco",
	favoriteFoods: [
	"sushi",
	"pizza",
	"steak"]
};


console.log(me["location"]);

var add = function (addend1, addend2) {
	return addend1 + addend2;
}


var sum = add(1, 2);

console.log(sum)


var changeMyFavoriteNumbers = function () {
	myFavoriteNumbers[0] = 1234;
};

changeMyFavoriteNumbers();
