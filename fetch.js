
// DOCS: https://sv443.net/jokeapi/v2/#joke-endpoint

// fetch method using asynch-await
async function getJoke(){
    /* Setting up the API endpoint */
    const response = await fetch("https://v2.jokeapi.dev/joke/Christmas"); // getting endpoint
    const christmasJokes = await response.json();                      // returning a response of json

    /* Creating changes to browser */
    // variables that references the h3
    let jokeSetup = document.querySelector("#jokeSetup");
    let jokeContent = document.querySelector("#jokeContent");
    
    // adding contents to the h3
    jokeSetup.textContent = christmasJokes.setup;
    jokeContent.textContent = christmasJokes.delivery;
}

// Adding event listener to button
let jokeButton = document.querySelector("#jokeButton");
jokeButton.addEventListener("click", getJoke);