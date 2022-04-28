
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

// Object literal for joke categories' color themes
let jokeColorTheme = {
    programming: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    },
    spooky: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    },
    christmas: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    },
    pun: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    }
}

let title = document.querySelector("#header-text");
let welcome = document.querySelector("#welcome-text");
let loader = document.querySelector("#loader");
let jokeSetup = document.querySelector("#jokeSetup");
let jokeContent = document.querySelector("#jokeContent");

// fetch method using asynch-await
const getJoke = async () => {

    /* Adding loader */
    welcome.style.display = "none";
    loader.style.display = "block";
    jokeSetup.style.display = "none";   // hiding the joke setup and content
    jokeContent.style.display = "none";

    /* Setting up the API endpoint */
    const response = await fetch(`https://v2.jokeapi.dev/joke/Christmas?type=twopart`); // getting endpoint
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

