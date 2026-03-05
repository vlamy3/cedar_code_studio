// ==========================
// FADE-IN ON SCROLL
// ==========================

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// ==========================
// DARK MODE TOGGLE
// ==========================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        } else {
        localStorage.setItem("theme", "light");
        }
    });

  // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
}


// ==========================
// SIMPLE MOBILE NAV TOGGLE (OPTIONAL)
// ==========================

const mobileToggle = document.getElementById("mobile-menu-toggle");
const nav = document.querySelector("nav");

if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Optional: enlarge on hover over buttons
document.querySelectorAll('a, .btn-primary').forEach(el => {
el.addEventListener('mouseenter', () => {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
el.addEventListener('mouseleave', () => {
    cursor.style.width = '15px';
    cursor.style.height = '15px';
});
});
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        });
    }
});