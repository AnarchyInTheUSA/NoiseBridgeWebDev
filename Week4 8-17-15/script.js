var addend1 = 5;
var addend2 = 10;

var sum = addend1 + addend2;

console.log(sum);

/* alert("The sum is " + sum);

var isItRight = confirm("Is the sum 15?"); 

sum = prompt("What is the sum?");

var popup = alert;

popup */

var age = prompt("How old are you?");

age = parseInt(age, 10);

if (isNaN(age)) {
	alert("You screwed up!");
} else if (age < 100) {
	alert("You're a child!");
}
else if (age === 29){
	alert("That's my age!");
}
else {
	alert("You're an old fart!")
}



