/*
    James Carlson
    Coding Temple - SE FT-144
    Frontend, Module 10 Lesson 2 Assignment: JavaScript Control Structures & Functions
*/

// just making my console look a little nicer!
let colorInstructions = "color:green;"; 
function logNewLine() {console.log("");}

console.log("%cExploring Conditional Statements and Loops", colorInstructions);

// TASK 1
console.log("%cTask 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.", colorInstructions);

// set variables and also functions so we don't have to re-write our console.logs!
let isUserLoggedIn = false;

function logAddItemToCart() {console.log("Item has been added to cart!");}
function logUserNotLoggedIn() {console.log("You must log in to add items to cart!");}
function attemptToAddItem() { isUserLoggedIn ? logAddItemToCart() : logUserNotLoggedIn(); }

// tests for Task 1
attemptToAddItem();
isUserLoggedIn = true;
attemptToAddItem();
logNewLine();



// TASK 2
console.log("%cTask 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.", colorInstructions);

// declare and assign shopping inventory and shopping cart
let itemSteam = {name: "Steam Deck", price: 549};
let itemSwitch = {name: "Nintendo Switch", price: 299.99};
let itemPS5 = {name: "PlayStation 5", price: 499.99};
let shoppingCart = [];

// input loop prompting user to insert an option, 1-4
let userInput = "";
do {
    console.log("1 - Steam Deck");
    console.log("2 - Nintendo Switch");
    console.log("3 - PlayStation 5");
    console.log("4 - NONE / QUIT")
    logNewLine();
    userInput = prompt("Which item would you like to add to your cart?: ");

    if (userInput == "1") {
        shoppingCart.push(itemSteam);
    }
    else if (userInput == "2") {
        shoppingCart.push(itemSwitch);
    }
    else if (userInput == "3") {
        shoppingCart.push(itemPS5);
    }
    else if (userInput != "4") {
        alert("Invalid input. Please pick an option 1-4.");
    }
} while (userInput != "4")

// log to check items were added
console.log(shoppingCart);
logNewLine();



// TASK 3
console.log("%cTask 3: Calculate the total cost of the items in the cart and display it to the user.", colorInstructions);

// calculate and log total cost of all items in cart
let cartTotal = 0;
for (let item of shoppingCart) {
    cartTotal += item["price"];
}
console.log(`Cart Total: $${cartTotal.toFixed(2)}`);
logNewLine();


console.log("%cExploring Conditional Statements and Loops", colorInstructions);

// TASK 1 - Create a function to handle deposits into a bank account.

let bankAccountBalance = 0; // :(

function deposit(amount) {
    bankAccountBalance += amount;
}


// TASK 2 - Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

function withdraw(amount) {
    if (amount > bankAccountBalance) {
        console.log("Not enough funds for withdrawal! Prepare for overdraft fee!"); // :(
    } else {
        bankAccountBalance -= amount;
    }
}



// TASK 3 - Develop a function to check the current balance of the account.

function checkBalance() {
    console.log(`Your Bank Account Balance is: $${bankAccountBalance.toFixed(2)}`);
}

// test all function
checkBalance();
deposit(99);
checkBalance();
withdraw(200);
checkBalance();
withdraw(8);
checkBalance();
deposit(10000); // :)
checkBalance();