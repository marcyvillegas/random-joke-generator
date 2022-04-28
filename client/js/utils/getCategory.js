
/**
 * LOGIC
 * - Once button is clicked, get the id
 * - Change the value of the variable
 * - Variable is stored in session storage based on the endpoint name for every category
 * - It will proceed to the secondPage.html
 * - If in index.html, remove session storage
 */

/**
 * NEEDS
 * - determine what category was pressed
 * - store on the session storage on what button is clicked 
 * - redirect to the next web page
 * - remove session storage when on index.html
 */

/**
 * Returns the joke category based on the pressed button
 */
let getJokeCategory = (clickedId) => {

    if (clickedId === "programming-button") return "Programming";
    if (clickedId === "spooky-button") return "Spooky";
    if (clickedId === "christmas-button") return "Christmas";
    if (clickedId === "pun-button") return "Pun";
}

/**
 * Redirects the webpage while storing the joke category to session storage if button is clicked
 */
let redirectToJokeCategory = (clickedId) => {

    let pressedJokeCategory = getJokeCategory(clickedId);

    if (pressedJokeCategory) {
        sessionStorage.setItem("jokeCategory", pressedJokeCategory);
        window.location.href = "secondPage.html";
    }
}

/**
 * Removes the jokeCategory to session storage when url path is index.html
 */
let removeJokeCategory = () => {

    if (window.location.pathname == "/index.html") {
        sessionStorage.removeItem('jokeCategory');
    }
}

// Calls function
removeJokeCategory();