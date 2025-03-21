// Sample appointment data
const appointments = [
    {
        id: 1,
        doctorName: "Dr. John Doe",
        specialty: "Cardiologist",
        date: "2025-03-25",
        time: "10:00 AM",
        doctorImage: "doctor1.jpg",
        status: "upcoming"
    },
    {
        id: 2,
        doctorName: "Dr. Sarah Lee",
        specialty: "Neurologist",
        date: "2025-02-15",
        time: "2:30 PM",
        doctorImage: "doctor2.jpg",
        status: "past"
    }
];

const upcomingContainer = document.getElementById("upcomingAppointments");
const pastContainer = document.getElementById("pastAppointments");

// Function to load appointments
function loadAppointments() {
    appointments.forEach(appointment => {
        const card = document.createElement("div");
        card.classList.add("appointment-card");

        card.innerHTML = `
            <img src="${appointment.doctorImage}" alt="${appointment.doctorName}">
            <div class="appointment-details">
                <p class="doctor-name">${appointment.doctorName} (${appointment.specialty})</p>
                <p class="date-time">📅 ${appointment.date} | ⏰ ${appointment.time}</p>
            </div>
            ${appointment.status === "upcoming" ? '<button class="btn-cancel" onclick="cancelAppointment(' + appointment.id + ')">Cancel</button>' : ""}
        `;

        if (appointment.status === "upcoming") {
            upcomingContainer.appendChild(card);
        } else {
            pastContainer.appendChild(card);
        }
    });
}

// Function to cancel appointment
function cancelAppointment(id) {
    alert("Appointment with ID " + id + " has been canceled.");
    // You can also remove the appointment from the array and reload the list
}

// Load appointments when page loads
window.onload = loadAppointments;
