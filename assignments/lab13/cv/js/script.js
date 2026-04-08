// Function to toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector(".toggle-dark");
    
    body.classList.toggle("dark");
    
    // Update button text/icon based on mode
    toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
    
    // Save preference to LocalStorage
    localStorage.setItem("dark-mode", body.classList.contains("dark"));
}

// Initialize settings when page loads
window.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleBtn = document.querySelector(".toggle-dark");

    // Check LocalStorage for saved dark mode preference
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark");
        if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
        if (toggleBtn) toggleBtn.textContent = "🌙";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleDarkMode);
    }

    setupScrollAnimations();
});

// Function to export CV as PDF
function exportPDF() {
    const element = document.getElementById("pdf-content");
    const opt = {
        margin: 0.5,
        filename: 'cv-nguyenvana.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Function for scroll-reveal animations using Intersection Observer
function setupScrollAnimations() {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}