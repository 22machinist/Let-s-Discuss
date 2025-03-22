document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS (replace with your actual Public Key)
    emailjs.init("cD0U3U6sSdxeIApy2");

    // Form Submission Event Listener
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form input values
        const userName = document.getElementById("user_name").value;
        const userEmail = document.getElementById("user_email").value;
        const userQuery = document.getElementById("user_query").value;

        // Prepare template parameters for EmailJS
        const templateParams = {
            name: userName,
            email: userEmail,
            query: userQuery,
        };

        // Send email using EmailJS
        emailjs.send("service_8lujiif", "template_esmosyo", templateParams)
            .then(function (response) {
                console.log("Email sent successfully!", response.status, response.text);

                // Show success popup
                showPopup("✅ Message sent successfully!");

                // Clear form fields
                document.getElementById("contactForm").reset();
            })
            .catch(function (error) {
                console.error("Error sending email:", error);

                // Show error popup
                showPopup("❌ Error: Could not send message.");
            });
    });

    // Function to display a popup message
    function showPopup(message) {
        const popup = document.getElementById("popup");
        popup.textContent = "Thank you for your response. Our team will contact you shortly !";
        popup.classList.add("show");

        // Hide popup after 3 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }
});