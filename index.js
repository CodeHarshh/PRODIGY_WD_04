document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-div-ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1); // Remove the '#' from the href

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjusted for navbar height if needed
                    behavior: "smooth"
                });
            }
        });
    });
});