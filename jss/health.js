// Sample list of Sexual Health & Wellness experts
const doctors = [
    {
        id: 1,
        name: "Dr. Sophia Turner",
        expertise: "Sexual Health Therapist",
        profileImage: "images/dummy.jpg",
        profileLink: "profile_sophia.html"
    },
    {
        id: 2,
        name: "Dr. Anuj Kapoor",
        expertise: "Andrologist & Men's Health Specialist",
        profileImage: "images/dummy.jpg",
        profileLink: "profile_anuj.html"
    },
    {
        id: 3,
        name: "Dr. Priya Sharma",
        expertise: "Women's Sexual Health Expert",
        profileImage: "images/dummy.jpg",
        profileLink: "profile_priya.html"
    }
];

const doctorList = document.getElementById("doctorList");

// Function to load doctors dynamically
function loadDoctors() {
    doctors.forEach(doctor => {
        const card = document.createElement("div");
        card.classList.add("doctor-card");

        card.innerHTML = `
            <img src="${doctor.profileImage}" alt="${doctor.name}">
            <div class="doctor-details">
                <a href="${doctor.profileLink}" class="doctor-name">${doctor.name}</a>
                <p class="expertise">🩺 ${doctor.expertise}</p>
            </div>
        `;

        doctorList.appendChild(card);
    });
}

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(query) ||
        doctor.expertise.toLowerCase().includes(query)
    );

    doctorList.innerHTML = "";
    filteredDoctors.forEach(doctor => {
        const card = document.createElement("div");
        card.classList.add("doctor-card");

        card.innerHTML = `
            <img src="${doctor.profileImage}" alt="${doctor.name}">
            <div class="doctor-details">
                <a href="${doctor.profileLink}" class="doctor-name">${doctor.name}</a>
                <p class="expertise">🩺 ${doctor.expertise}</p>
            </div>
        `;

        doctorList.appendChild(card);
    });
});

// Load doctors on page load
window.onload = loadDoctors;
