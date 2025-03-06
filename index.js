document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments nécessaires
    const searchInput = document.querySelector(".search-bar input");
    const courses = document.querySelectorAll(".course-card");
    const domainFilters = document.querySelectorAll(".category-filter input");

    // Fonction pour filtrer les cours en fonction de la recherche et du domaine
    function filterCourses() {
        const searchValue = searchInput.value.toLowerCase().trim();
        const selectedDomain = document.querySelector(".category-filter input:checked").value;

        courses.forEach(course => {
            const courseCategory = course.getAttribute("data-category");
            const courseText = course.textContent.toLowerCase();
            const matchesSearch = courseText.includes(searchValue);
            const matchesDomain = (selectedDomain === "All" || courseCategory === selectedDomain);

            course.style.display = (matchesSearch && matchesDomain) ? "block" : "none";
        });
    }

    // Événements pour déclencher le filtrage
    searchInput.addEventListener("input", filterCourses);
    domainFilters.forEach(filter => filter.addEventListener("change", filterCourses));

    // Appliquer le filtre au chargement
    filterCourses();
});

 // Nav barre
function toggleNav() {
    document.getElementById("sidebar").classList.toggle("active");
}

// agrandissement de limage 

document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments nécessaires
    const searchInput = document.querySelector(".search-bar input");
    const courses = document.querySelectorAll(".course-card");
    const domainFilters = document.querySelectorAll(".category-filter input");

    // Fonction pour filtrer les cours en fonction de la recherche et du domaine
    function filterCourses() {
        const searchValue = searchInput.value.toLowerCase().trim(); // Récupérer la valeur de recherche
        const selectedDomain = document.querySelector(".category-filter input:checked").value; // Récupérer le domaine sélectionné

        courses.forEach(course => {
            const courseCategory = course.getAttribute("data-category"); // Obtenir la catégorie du cours
            const courseText = course.textContent.toLowerCase(); // Convertir le texte du cours en minuscules
            const matchesSearch = courseText.includes(searchValue); // Vérifier si le texte correspond à la recherche
            const matchesDomain = (selectedDomain === "All" || courseCategory === selectedDomain); // Vérifier si la catégorie correspond

            course.style.display = (matchesSearch && matchesDomain) ? "block" : "none"; // Afficher ou masquer les cours
        });
    }

    // Ajouter les événements pour déclencher le filtrage
    searchInput.addEventListener("input", filterCourses);
    domainFilters.forEach(filter => filter.addEventListener("change", filterCourses));

    // Appliquer le filtre au chargement de la page
    filterCourses();

    // Fonction pour gérer l'affichage de la barre de navigation
    function toggleNav() {
        document.getElementById("sidebar").classList.toggle("active"); // Ajouter ou supprimer la classe active
    }

    // Sélection de l'image de profil
    const profilePic = document.querySelector(".profile");

    // Ajouter un événement au clic sur l'image de profil
    profilePic.addEventListener("click", function () {
        // Créer une div pour l'overlay sombre
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "rgba(0, 0, 0, 0.7)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "1000";

        // Créer une image agrandie
        const enlargedImg = document.createElement("img");
        enlargedImg.src = profilePic.src;
        enlargedImg.style.width = "300px";
        enlargedImg.style.height = "300px";
        enlargedImg.style.borderRadius = "50%";
        enlargedImg.style.border = "5px solid white";
        enlargedImg.style.cursor = "pointer";

        // Ajouter l'image agrandie à l'overlay
        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);

        // Ajouter un événement pour fermer l'image agrandie en cliquant sur l'overlay
        overlay.addEventListener("click", function () {
            document.body.removeChild(overlay);
        });
    });
});




document.querySelectorAll(".site-mzl").forEach(button => {
    button.addEventListener("click", () => {
        alert("cette page n'est pas accessible pour le moment!");
    });
});
