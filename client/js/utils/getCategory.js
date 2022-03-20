
/* LOGIC */
// Once button is clicked, it will change the value of the variable that will be exported
// based on the endpoint name for every category

/* Declare variables */
let programmingButton = document.querySelector("#programming-button");
let spoolyButton = document.querySelector("#spooky-button");
let christmasButton = document.querySelector("#christmas-button");
let punButton = document.querySelector("#pun-button");

programmingButton.addEventListener("click", (e) => {

    e.preventDefault();

    window.location.href="secondPage.html";

});

