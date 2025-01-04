// Slider functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Add click events to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-advance slides
setInterval(nextSlide, 5000);

// Add hover effect animation
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});


document.addEventListener('DOMContentLoaded', () => {
  // Initialize CountUp instances
  const emailCounter = new CountUp('emailCount', 0, 1800, 0, 2.5, {
    useEasing: true,
    useGrouping: true,
  });
  
  const phoneCounter = new CountUp('phoneCount', 0, 765, 0, 2.5, {
    useEasing: true,
    useGrouping: true,
  });
  
  const orderCounter = new CountUp('orderCount', 0, 960, 0, 2.5, {
    useEasing: true,
    useGrouping: true,
  });
  
  const clientCounter = new CountUp('clientCount', 0, 750, 0, 2.5, {
    useEasing: true,
    useGrouping: true,
  });

  // Start all counters
  emailCounter.start();
  phoneCounter.start();
  orderCounter.start();
  clientCounter.start();
});


// Add hover effects for links
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.3s ease';
    });
});

// Add click effect for contact button
const contactButton = document.querySelector('footer button');
contactButton.addEventListener('click', () => {
    // Add your contact button click handler here
    console.log('Contact button clicked');
});


