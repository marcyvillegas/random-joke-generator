
/**
 * LOGIC
 * 1. Once button is clicked, it will change the value of the variable that will be exported based on the endpoint name for every category
 * 2. It will proceed to the secondPage.html
 */

/* Declare variables of joke category buttons */
let programmingButton = document.querySelector("#programming-button");
let spoolyButton = document.querySelector("#spooky-button");
let christmasButton = document.querySelector("#christmas-button");
let punButton = document.querySelector("#pun-button");

let x = "low";

/**
 * 2 functions needed
 * 1. 
 */

// Tried function
// programmingButton.addEventListener("click", (e) => {

//     e.preventDefault();

//     window.location.href="secondPage.html";
// });

let myFunction = () => {
    window.location.href="secondPage.html";
    x = "hi"
}