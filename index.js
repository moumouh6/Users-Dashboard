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
