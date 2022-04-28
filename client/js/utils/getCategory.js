
/**
 * LOGIC
 * - Once button is clicked, get the id
 * - Change the value of the variable
 * - Stored in local storage based on the endpoint name for every category
 * - It will proceed to the secondPage.html
 * - If in index.html, remove session storage
 */

/**
 * 4 functions
 * 
 * 1. determining what category was pressed
 * 2. storing on the session storage on what button is clicked 
 * 3. redirecting to the next web page
 * 4. remove session storage when on index.html
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
 * Stores the joke category to the session storage
 */
let storeJokeCategory = (jokeCategoryName) => {
    sessionStorage.setItem("jokeCategory", jokeCategoryName);
}

/**
 * Redirects the webpage while storing the joke category to session storage if button is clicked
 */
let redirectToJokeCategory = (clickedId) => {

    let pressedJokeCategory = getJokeCategory(clickedId);

    if (pressedJokeCategory) {
        storeJokeCategory(pressedJokeCategory);
        window.location.href = "secondPage.html";
    }
}

/**
 * 
 */
let removeJokeCategory = () => {

    // if session storage is empty, return to index html
    if (window.location.pathname == "/index.html") {
        sessionStorage.removeItem('jokeCategory');
    }
}

removeJokeCategory();