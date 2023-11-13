// Get the header element
var header = document.getElementById("sticky-header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Function to add the "sticky" class to the header when you reach its scroll position
function stickHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Add a scroll event listener to call the stickHeader function
window.onscroll = function() {
    stickHeader();
};
