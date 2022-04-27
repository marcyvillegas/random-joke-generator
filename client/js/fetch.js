
/**
 * LOGIC
 * - Object literals is for storing the categories' background, text and button colors
 * - Get session storage
 * - Change colors if joke category is pressed
 * - If user goes back to index html, session storage will be empty
 * 
 * DOCS: https://sv443.net/jokeapi/v2/#joke-endpoint
 */

// new url to be used: https://v2.jokeapi.dev/joke/ [the category] ?type=twopart

// variables that references the h3
let jokeSetup = document.querySelector("#jokeSetup");
let jokeContent = document.querySelector("#jokeContent");
let loader = document.querySelector("#loader");
let welcome = document.querySelector("#welcome-text");

// fetch method using asynch-await
const getJoke = async () => {

    /* Adding loader */
    welcome.style.display = "none";
    loader.style.display = "block";
    jokeSetup.style.display = "none";   // hiding the joke setup and content
    jokeContent.style.display = "none";

    /* Setting up the API endpoint */
    const response = await fetch("https://v2.jokeapi.dev/joke/Christmas"); // getting endpoint
    const data = await response.json();                      // returning a response of json

    loader.style.display = "none";  // hiding the loader

    /* Creating changes to browser */
    // adding contents to the h2
    jokeSetup.textContent = data.setup;
    jokeContent.textContent = data.delivery + " 😂";

    jokeSetup.style.display = "block";  // displaying the setup and content joke
    jokeContent.style.display = "block";
}

// Adding event listener to button
let jokeButton = document.querySelector("#jokeButton");
jokeButton.addEventListener("click", getJoke);

