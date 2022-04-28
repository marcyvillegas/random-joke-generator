
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
        welcome: "#eaebeb",
        loader: "#eaebeb",
        setup: "#9ae19d",
        content: "#eaebeb",
        background: "#474a48",
        button: "#537a5a"
    },
    Spooky: {
        title: "#FFFF",
        welcome: "#fffcf2",
        loader: "#fffcf2",
        setup: "#EB5E28",
        content: "#fffcf2",
        background: "#403d39",
        button: "#884125"
    },
    Christmas: {
        title: "#000",
        welcome: "#000",
        loader: "#000",
        setup: "#BC4749",
        content: "#000",
        background: "#F2E8CF",
        button: "#6A994E"
    },
    Pun: {
        title: "#282928 ",
        welcome: "#282928",
        loader: "#282928",
        setup: "#44799C",
        content: "#282928",
        background: "#C2CFD6",
        button: "#274C77"
    }
}

// Declares variables of html elements
let title = document.querySelector("#header-text");
let welcome = document.querySelector("#welcome-text");
let loader = document.querySelector("#loader");
let jokeSetup = document.querySelector("#jokeSetup");
let jokeContent = document.querySelector("#jokeContent");
let jokeButton = document.querySelector("#jokeButton");

// Stores the jokeCategory from session storage
let jokeCategory = sessionStorage.getItem("jokeCategory");

/**
 * Sets up theme colors of clicekd joke category
 */
let setUpThemeColor = () => {

    // Changing the elements' colors using the jokeColorTheme object literal
    title.style.color = jokeColorTheme[jokeCategory].title;
    welcome.style.color = jokeColorTheme[jokeCategory].welcome;
    loader.style.color = jokeColorTheme[jokeCategory].loader;
    jokeSetup.style.color = jokeColorTheme[jokeCategory].setup;
    jokeContent.style.color = jokeColorTheme[jokeCategory].content;
    jokeButton.style.backgroundColor = jokeColorTheme[jokeCategory].button;
    document.body.style.backgroundColor = jokeColorTheme[jokeCategory].background;
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
    try {

        const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeCategory}?type=twopart`); // getting endpoint
        const data = await response.json();                                                 // returning a response of json

        // Hides loader
        loader.style.display = "none";

        // Adds joke contents
        jokeSetup.textContent = data.setup;
        jokeContent.textContent = data.delivery + " 😂";

    } catch (error) {
        // Displays error message
        console.log(error);
        jokeSetup.textContent = "Oops!";
        jokeContent.textContent = "There was an error 😓";
    }

    // Displays joke set up and content
    jokeSetup.style.display = "block";
    jokeContent.style.display = "block";
}

// Calls function
setUpThemeColor();

// Attaches event listener to joke button
jokeButton.addEventListener("click", fetchJoke);

