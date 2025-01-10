// Exercise: "Movie Ticket Pricing App"

// Objective:
// Learners will create a simple app that calculates the ticket price for a movie based on the customer's age and time of the show. This exercise will help them practice using variables, if-else, elseif statements, and logical/comparison operators.

// Scenario
// Imagine you're designing a basic movie ticketing system. The app calculates the ticket price based on these rules:


// Steps for Learners:
// 1. Ask the user to input:
//    - Their age.
//    - The showtime (in 24-hour format, e.g., 9 for 9 AM, 14 for 2 PM).

// 2. Use `if`, `elseif`, and `else` statements to determine the base ticket price based on age.

// 3. Apply a 10% discount if the showtime is before 12 PM.

// 4. Output the final ticket price.

// Starter Code Template

// Step 1: Define variables
let age = parseInt(prompt("Enter your age:")); // Get age from user
let showtime = parseInt(prompt("Enter the showtime (in 24-hour format):")); // Get showtime

// Step 2: Initialize ticket price variable
let ticketPrice = 0;

// Todo: Step 3: Determine base ticket price using if-else statements
// 1. Age-based pricing:
//    - Children (0–12 years): $5
//    - Teenagers (13–17 years): $7
//    - Adults (18–59 years): $10
//    - Seniors (60+ years): $6

if (age > 0 && age <= 12) {
    console.log(`The Ticket Price for Children is: $${ticketPrice = 5}`);
    
} else if (age >= 13 && age <= 17) {
    console.log(`The Ticket Price for Teenagers is: $${ticketPrice = 7}`);
    
} else if (age >= 18 && age <= 59) {
    console.log(`The Ticket Price for Adults is: $${ticketPrice = 10}`);
    
} else if (age >= 60) {
    console.log(`The Ticket Price for Seniors is: $${ticketPrice = 6}`);
    
} else {
    console.log("Not Available! Enter your Age again:");
    alert ("Not Available! Enter your Age again:")
}



// Todo: Step 4: Apply discount for morning shows
// 2. Showtime discount:
//    - Morning shows (before 12 PM): 10% off all ticket prices.
if (showtime > 0 && showtime < 12) {
    console.log(`The Ticket Price After Discount is: $${ticketPrice *= 0.9 }`);
} else if (showtime >= 12 && showtime <= 24){
    console.log("No Discount!");
} else {
    console.log("Not Valid! Please enter a valid time:");
    alert ("Not Valid! Please enter a valid time:")
}

// Todo: Step 5: Output the final price

console.log(`The final Price is: $${ticketPrice}`);
alert (`The final price is $${ticketPrice}`)


// Expected Behavior:
// - For age 10 and showtime 9: The output should be `$4.50`.
// - For age 25 and showtime 14: The output should be `$10.00`.
// - For age 65 and showtime 11: The output should be `$5.40`.
// - For invalid age: Display "Invalid age entered."
