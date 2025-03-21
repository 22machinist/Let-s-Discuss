function searchDoctors() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let cards = document.getElementsByClassName("doctor-card");

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        let specialty = cards[i].getElementsByClassName("specialty")[0].innerText.toLowerCase();

        if (name.includes(input) || specialty.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
