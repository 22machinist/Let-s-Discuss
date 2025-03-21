document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    alert("Login successful!"); // Show an alert (replace with actual authentication logic)

    // Redirect to home page (Change 'index.html' to your main page)
    window.location.href = "index.html";
});
