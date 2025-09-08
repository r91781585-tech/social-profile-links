// Simple JavaScript for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking for social links
    const socialLinks = document.querySelectorAll('.social-btn');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a subtle click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Log click (for analytics if needed)
            console.log(`Clicked on: ${this.textContent}`);
        });
        
        // Add hover sound effect (optional)
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
        });
    });
    
    // Add a simple greeting based on time of day
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour < 12) {
        greeting = 'Good morning! ☀️';
    } else if (hour < 18) {
        greeting = 'Good afternoon! 🌤️';
    } else {
        greeting = 'Good evening! 🌙';
    }
    
    // Add greeting to console for developers
    console.log(`${greeting} Welcome to Jessica's profile!`);
    
    // Simple animation trigger on scroll (if page gets longer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all social buttons for scroll animations
    socialLinks.forEach(link => {
        observer.observe(link);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    const socialLinks = document.querySelectorAll('.social-btn');
    const currentFocus = document.activeElement;
    const currentIndex = Array.from(socialLinks).indexOf(currentFocus);
    
    if (e.key === 'ArrowDown' && currentIndex < socialLinks.length - 1) {
        e.preventDefault();
        socialLinks[currentIndex + 1].focus();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        socialLinks[currentIndex - 1].focus();
    }
});