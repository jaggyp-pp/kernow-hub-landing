// Promotional Modal
document.addEventListener('DOMContentLoaded', function() {
    const promoModal = document.getElementById('promoModal');
    const closePromo = document.getElementById('closePromo');
    const promoCta = document.getElementById('promoCta');
    
    // Check if modal has been shown before
    const hasSeenPromo = localStorage.getItem('hasSeenPromo');
    
    if (promoModal && !hasSeenPromo) {
        // Show modal after 1 second
        setTimeout(() => {
            promoModal.classList.add('show');
        }, 1000);
        
        // Close modal when X is clicked
        if (closePromo) {
            closePromo.addEventListener('click', function() {
                promoModal.classList.remove('show');
                localStorage.setItem('hasSeenPromo', 'true');
            });
        }
        
        // Close modal when CTA is clicked
        if (promoCta) {
            promoCta.addEventListener('click', function() {
                promoModal.classList.remove('show');
                localStorage.setItem('hasSeenPromo', 'true');
            });
        }
        
        // Close modal when clicking outside
        promoModal.addEventListener('click', function(e) {
            if (e.target === promoModal) {
                promoModal.classList.remove('show');
                localStorage.setItem('hasSeenPromo', 'true');
            }
        });
    }
});

// Smooth scrolling for navigation links
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

// Form submission handling
const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('.submit-button');
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        
        try {
            // Submit to Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Hide form and show thank you message
                form.style.display = 'none';
                thankYouMessage.classList.add('show');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // If there's an error, show an alert and re-enable the button
            alert('Oops! There was a problem submitting your form. Please try again.');
            submitButton.textContent = 'Submit';
            submitButton.disabled = false;
        }
    });
}

// Add animation on scroll
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

// Observe feature cards and timeline items
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
