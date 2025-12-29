/**
 * Shared Navigation Component
 * This script injects the navigation bar into all pages
 */

(function() {
    // Get current page to set active state
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    // Navigation HTML
    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="home.html" class="nav-logo">AmazeMed</a>
            <ul class="nav-menu" id="navMenu">
                <li><a href="home.html" ${currentPage === 'home.html' || currentPage === 'index.html' ? 'class="active"' : ''}>Home</a></li>
                <li><a href="about.html" ${currentPage === 'about.html' ? 'class="active"' : ''}>About</a></li>
                <li><a href="services.html" ${currentPage === 'services.html' ? 'class="active"' : ''}>Services</a></li>
                <li><a href="contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
            </ul>
            <div class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Mobile menu toggle functionality
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
})();

