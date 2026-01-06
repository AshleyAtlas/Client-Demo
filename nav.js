export function initNav() {
    const navHTML = `
        <div class="cheetah-header"></div>
        <div class="nav-toggle" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="global-nav" id="globalNav">
            <ul class="nav-list">
                <li><a href="/" class="nav-link nav-home">Home</a></li>
                <li><a href="/world.html" class="nav-link nav-world">World Tour</a></li>
                <li><a href="/diary.html" class="nav-link nav-diary">Visual Diary</a></li>
                <li><a href="/about.html" class="nav-link nav-story">The Story</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('globalNav');
    const path = window.location.pathname.replace(/^\/|\.html$/g, '');
    
    // Logic to set active page class
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const linkPath = link.getAttribute('href').replace(/^\/|\.html$/g, '');
        if (linkPath === path || (linkPath === '' && path === 'index')) {
            link.classList.add('active-page');
        }
    });

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });
}
