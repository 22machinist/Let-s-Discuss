document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Show Popup
    let popup = document.getElementById("popup");
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    // Optionally, clear form fields
    this.reset();
});