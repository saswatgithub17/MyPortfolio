
// Force scroll to top on reload or revisit
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Enhanced Loader simulation
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const progress = document.getElementById('loader-progress');
    let width = 0;
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
        } else {
            width += 2;
            progress.style.width = width + '%';
            
            // Update loader text based on progress
            const loaderText = document.querySelector('.loader-text');
            if (width < 30) {
                loaderText.textContent = "LOADING CORE SYSTEMS";
            } else if (width < 60) {
                loaderText.textContent = "INITIALIZING COMPONENTS";
            } else if (width < 90) {
                loaderText.textContent = "OPTIMIZING PERFORMANCE";
            } else {
                loaderText.textContent = "LAUNCHING PORTFOLIO";
            }
        }
    }, 80);
});

// Enhanced Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const cursorTrails = [];

// Create cursor trails
for (let i = 0; i < 10; i++) {
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    document.body.appendChild(trail);
    cursorTrails.push({
        element: trail,
        position: { x: -100, y: -100 },
        size: Math.random() * 4 + 2,
        delay: i * 3,
        life: 0
    });
}

document.addEventListener('mousemove', (e) => {
    // Main cursor
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Follower cursor
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
    
    // Update cursor trails
    cursorTrails.forEach((trail, index) => {
        setTimeout(() => {
            trail.element.style.left = (e.clientX - trail.size / 2) + 'px';
            trail.element.style.top = (e.clientY - trail.size / 2) + 'px';
            trail.element.style.width = trail.size + 'px';
            trail.element.style.height = trail.size + 'px';
            trail.element.style.opacity = '0.7';
            
            // Fade out trail
            setTimeout(() => {
                trail.element.style.opacity = '0';
            }, 300);
        }, index * 10);
    });
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
});

// Add hover class to cursor on interactive elements
const hoverElements = document.querySelectorAll('a, button, .glass-card, .nav-link, .skill-card, .project-card, .social-link, .btn');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.glass-card, .section-title, .about-content');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize scroll animations
document.querySelectorAll('.glass-card, .section-title, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);