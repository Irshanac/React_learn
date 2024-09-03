document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded before running the script
    const elements = document.getElementsByTagName("button");
    elements[0].innerHTML = "It is good"; // Changing the innerHTML of the first button

    const p = document.getElementsByClassName("p1");
    p[0].innerText = "It is always good one"; // Changing the innerText of the paragraph

    // Adding a click event listener to the second button
    elements[1].addEventListener('click', shows, true);

    function shows() {
        alert("It is better");
    }

    // Adding a mouseover event listener to the fourth button
    elements[3].addEventListener('mouseover', coloring);

    function coloring() {
        p[0].style.color = "red"; // Change the paragraph text color to red on hover
    }
});
