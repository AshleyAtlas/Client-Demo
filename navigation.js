// Shared Navigation Component
(function() {
    'use strict';
    
    // Navigation HTML structure
    const navHTML = `
        <div class="cheetah-header"></div>
        <div class="nav-toggle" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="global-nav" id="globalNav">
            <ul class="nav-list">
                <li><a href="index.html" class="nav-link nav-home">Home</a></li>
                <li><a href="world.html" class="nav-link nav-world">World Tour</a></li>
                <li><a href="diary.html" class="nav-link nav-diary">Visual Diary</a></li>
                <li><a href="about.html" class="nav-link nav-story">The Story</a></li>
            </ul>
        </nav>
    `;

    // Initialize navigation when DOM is ready
    function initNavigation() {
        // Insert navigation HTML
        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // Get navigation elements
        const toggle = document.getElementById('navToggle');
        const nav = document.getElementById('globalNav');
        
        // Get current page path
        const path = window.location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';

        // Set active page
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            const linkPath = link.getAttribute('href').replace(/^\/|\.html$/g, '');
            if (linkPath === path || (linkPath === '' && path === 'index')) {
                link.classList.add('active-page');
            }
        });

        // Toggle navigation
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                toggle.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });
        }
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();
