// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.98)';
        header.style.padding = '10px 0';
    } else {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';
        header.style.padding = '15px 0';
    }
});

// FAQ Functionality
const faqItems = document.querySelectorAll('.faq-item');
const categoryBtns = document.querySelectorAll('.category-btn');
const faqCategories = document.querySelectorAll('.faq-category');

if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            // Toggle answer visibility
            answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
            item.classList.toggle('active');
            icon.classList.toggle('fa-chevron-up');
            icon.classList.toggle('fa-chevron-down');
        });
    });
}

if (categoryBtns.length > 0) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and categories
            categoryBtns.forEach(b => b.classList.remove('active'));
            faqCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding category
            btn.classList.add('active');
            const category = document.getElementById(btn.dataset.category);
            if (category) {
                category.classList.add('active');
            }
        });
    });
}

// Gallery Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const natureGrid = document.querySelector('.nature-grid');
const mountainsGrid = document.querySelector('.mountains-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding grid
        if (btn.dataset.tab === 'nature') {
            natureGrid.style.display = 'grid';
            mountainsGrid.style.display = 'none';
        } else {
            natureGrid.style.display = 'none';
            mountainsGrid.style.display = 'grid';
        }
    });
});

// Stat Counter Animation
const stats = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.textContent);
            animateValue(target, 0, finalValue, 2000);
            observer.unobserve(target);
        }
    });
}, observerOptions);

stats.forEach(stat => observer.observe(stat));

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#28a745';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '#e50914';
        }, 3000);
    });
}

// Explore Button Animation
const exploreBtn = document.querySelector('.explore-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const featuredSection = document.querySelector('.featured-section');
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Learn More Button Animation
const learnMoreBtn = document.querySelector('.learn-more-btn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add hover effect to gallery cards
const galleryCards = document.querySelectorAll('.gallery-card');
galleryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.gallery-overlay').style.opacity = '1';
        card.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.gallery-overlay').style.opacity = '0';
        card.querySelector('.gallery-overlay').style.transform = 'translateY(20px)';
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const topnav = document.querySelector('.topnav');
const body = document.body;

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        topnav.classList.toggle('active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!topnav.contains(e.target) && !mobileMenuBtn.contains(e.target) && topnav.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            topnav.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    topnav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            topnav.classList.remove('active');
            body.style.overflow = '';
        });
    });
}
