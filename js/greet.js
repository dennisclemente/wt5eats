// Greeting on Home Page - If/Else loop
var today = new Date();
var hourNow = today.getHours();
var greetingArray = ["It's Dinnertime!", "Take a Lunch Break", "Have a Healthy Breakfast!"];
greetingArray.push("Eat responsibly");
var greeting;

if (hourNow > 18) {
    greeting = greetingArray[0];
    //greeting = "Dinner!";
} else if (hourNow > 12) {
    greeting = greetingArray[1];
    //greeting = "Lunch!";
} else if (hourNow > 0) {
    greeting = greetingArray[2];
    //greeting = "Breakfast!";
} else {
    greeting = greetingArray[3];
    //greeting = "Eat responsibly";
}

document.write('<h2>' + greeting + '</h2>')

var greetingArray = ["It's dinnertime", "Take a Lunch Break", "Have a Healthy Breakfast!"];
greetingArray.push("Eat responsibly");
var greeting;

    greeting = greetingArray[0];  // replace <greeting = "Good Evening!";>
    
    greeting = greetingArray[1];  // replace <greeting = "Good Afternoon!";>
    
    greeting = greetingArray[2];  // replace <greeting = "Good Morning!";>
    
    greeting = greetingArray[3];  // replace <greeting = "Welcome";>
    
    
    