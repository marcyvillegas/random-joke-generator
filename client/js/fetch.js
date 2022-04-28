
/**
 * LOGIC
 * - Object literals is for storing the categories' background, text and button colors
 * - Get session storage
 * - Change colors if joke category is pressed
 * - If user goes back to index html, session storage will be empty
 * 
 * API DOCS: https://sv443.net/jokeapi/v2/#joke-endpoint
 */

// new url to be used: https://v2.jokeapi.dev/joke/ [the category] ?type=twopart

// Object literal for joke categories' color themes
let jokeColorTheme = {
    Programming: {
        title: "#FFFF",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    },
    Spooky: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    },
    Christmas: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    },
    Pun: {
        title: "asdf",
        welcome: "asdf",
        loader: "sadf",
        setup: "sadf",
        content: "dsaf",
        background: "asdf",
        button: "adsf"
    }
}

// Declares variables of html elements
let title = document.querySelector("#header-text");
let welcome = document.querySelector("#welcome-text");
let loader = document.querySelector("#loader");
let jokeSetup = document.querySelector("#jokeSetup");
let jokeContent = document.querySelector("#jokeContent");
let jokeButton = document.querySelector("#jokeButton");

// Gets the jokeCategory from session storage
let jokeCategory = sessionStorage.getItem("jokeCategory");

/**
 * Sets up theme colors of clicekd joke category
 */
let setUpThemeColor = (jokeCategory) => {

    title.style.color = jokeColorTheme[jokeCategory].title;

}

/**
 * Fetches joke API
 */
let fetchJoke = async () => {

    // Adds loader
    welcome.style.display = "none";
    loader.style.display = "block";
    jokeSetup.style.display = "none";
    jokeContent.style.display = "none";

    // Sets up the API endpoint
    const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeCategory}?type=twopart`); // getting endpoint
    const data = await response.json();                                                 // returning a response of json

    // Hides loader
    loader.style.display = "none";

    // Adds joke contents
    jokeSetup.textContent = data.setup;
    jokeContent.textContent = data.delivery + " 😂";

    // Displays joke set up and content
    jokeSetup.style.display = "block";
    jokeContent.style.display = "block";
}

// Sets up joke category color theme
setUpThemeColor(jokeCategory);

// Adds event listener to joke button
jokeButton.addEventListener("click", fetchJoke);

