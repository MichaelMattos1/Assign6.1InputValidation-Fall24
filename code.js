//code containing our script to run our game.html functions

//create a function to run our game
 function playGame() {
    // we are going to narrate what is going on in this function in the console
    console.log("playGame function was called");

    //roll a die by calling the rollDie function
    var die1 = rollDie();
    console.log("the first die roll is: " + die1);

    //roll a die by calling the rollDie function
    var die2 = rollDie();
    console.log("the second die roll is: " + die2);

    //add both results
    var sum = die1 + die2;
    console.log("the sum is: " + sum);

    //output the dice rolls to the page
    document.getElementById("die1Result").textContent = "Die 1 is: " + die1;
    document.getElementById("die2Result").textContent = "Die 2 is: " + die2;
    document.getElementById("sumResult").textContent = "sum is: " + sum;

    // game logic for win or lose
    if (sum == 7 || sum == 11) {
        document.getElementById("gameResult").textContent = "You Lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        //if the numbers are the same and there is no remainder, you win
        document.getElementById("gameResult").textContent = "you win";
    }
    else {
        document.getElementById("gameResult").textContent = "you pushed";
    }
}
//create separate function to generate dice rolls - random number generator between 1-6
function rollDie() {
    //generate a random number between 1 and 6
    var die = Math.random() * 6;
    //return the random number to the code that called this fuction
    return Math.ceil(die); //return whole number to function
}

//Functions to check and run our input validation form page

function validateForm() {
    //set up nickname/shortcut to our form values
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var zipCode = document.getElementById("zip").value;

    //create a new string that concatenates first name + " " + last name
    var fullName = firstName + " " + lastName

    //see what values we are working with
    console.log("first name= " + firstName);
    console.log("last name= " + lastName);
    console.log("zip= " + zipCode);
    console.log("full name= " + fullName);

    //check to make sure that full name is 20 characters or fewer
    if (fullName.length > 20 || fullName.length == 1) {
        document.getElementById("loginStatus").innerHTML = "Please enter a valid name that is less than 20 characters";
        //alert("Please enter a valid name less than 20 characters");
    }
    else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "please enter a 5 digit zip code";
        //alert("please enter a 5 digit zip code");
    }
    else {
        document.getElementById("loginStatus").innerHTML = "Welcome, " + fullName + ". The secret word is Validation.";
        //alert("Welcome, " + fullName + ". The secret word is Validation.");
    }

    //prevent form from being submit (prevents it from submitting to server)
    return false;
}