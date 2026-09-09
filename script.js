/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("show");

}


/* =====================================
   SEARCH OPEN
===================================== */

function openSearch() {

    const popup =
        document.getElementById("searchPopup");

    popup.classList.add("show");

    document.getElementById("searchInput").focus();

}


/* =====================================
   SEARCH CLOSE
===================================== */

function closeSearch() {

    const popup =
        document.getElementById("searchPopup");

    popup.classList.remove("show");

}


/* =====================================
   SEARCH
===================================== */

function performSearch() {

    const input =
        document.getElementById("searchInput");

    const value =
        input.value.trim();

    if (value === "") {

        alert("Please enter something to search.");

        return;

    }

    alert(
        "Search feature will be connected with the Citizen Services page."
    );

}


/* =====================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
===================================== */

document.addEventListener("click", function(event) {

    const popup =
        document.getElementById("searchPopup");

    if (event.target === popup) {

        closeSearch();

    }

});


/* =====================================
   MOBILE MENU LINK CLICK
===================================== */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("mobileMenu")
            .classList.remove("show");

    });

});