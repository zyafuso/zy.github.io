// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(45, 80, 22, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #2d5016 0%, #4a7c59 100%)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Add animation on scroll for feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Pappy Slideshow functionality
function changePappyImage(frameNumber) {
    const mainImage = document.getElementById('pappyMain');
    const thumbnails = document.querySelectorAll('.pappy-thumbnail');
    
    // Update main image
    mainImage.src = `../proj0/pappy (${frameNumber}).jpg`;
    mainImage.alt = `Pappy Frame ${frameNumber}`;
    
    // Update thumbnail active state
    thumbnails.forEach((thumb, index) => {
        if (index === frameNumber - 1) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Pappy Animation functionality
function playPappyAnimation() {
    const gifImage = document.getElementById('pappyGif');
    const playBtn = document.querySelector('.play-btn');
    const frames = [
        '../proj0/pappy (1).jpg',
        '../proj0/pappy (2).jpg',
        '../proj0/pappy (3).jpg',
        '../proj0/pappy (4).jpg'
    ];
    
    let currentFrame = 0;
    const frameDelay = 500; // 500ms between frames (0.5 seconds)
    
    // Disable button during animation
    playBtn.disabled = true;
    playBtn.textContent = 'Playing...';
    
    // Start animation loop
    const animationInterval = setInterval(() => {
        gifImage.src = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
        
        // Stop after one complete cycle
        if (currentFrame === 0) {
            clearInterval(animationInterval);
            playBtn.disabled = false;
            playBtn.textContent = 'Play Animation';
        }
    }, frameDelay);
}
