// Sample list of Diet & Nutrition experts
const doctors = [
    {
        id: 1,
        name: "Dr. Lisa Adams",
        expertise: "Certified Nutritionist",
        profileImage: "images/dummy.jpg",
        profileLink: "profile_lisa.html"
    },
    {
        id: 2,
        name: "Dr. Rahul Mehta",
        expertise: "Dietitian & Health Coach",
        profileImage: "images/dummy.jpg",
        profileLink: "profile_rahul.html"
    },
    {
        id: 3,
        name: "Dr. Karen Lee",
        expertise: "Sports Nutritionist",
        profileImage: "images/dummy.jpg",
        profileLink: "profile_karen.html"
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
                <p class="expertise">🥦 ${doctor.expertise}</p>
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
                <p class="expertise">🥦 ${doctor.expertise}</p>
            </div>
        `;

        doctorList.appendChild(card);
    });
});

// Load doctors on page load
window.onload = loadDoctors;
