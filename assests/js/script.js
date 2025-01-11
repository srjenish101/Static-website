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

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const testimonials = [
  {
    id: 1,
    name: "Michel Clark",
    image: "./assests/images/slider-img.png",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of."
  },
  {
    id: 2,
    name: "Michel dref",
    image: "./assests/images/slider-img.png",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of."
  },
  {
    id: 3,
    name: "Michel abs",
    image: "./assests/images/slider-img.png",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of."
  }
];

let currentIndex = 0;

function createStarRating(rating) {
  return Array(rating).fill().map(() => `
        <svg class="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    `).join('');
}

function createTestimonialCard(testimonial) {
  return `
        <div class="w-full max-w-md bg-white rounded-lg p-6 shadow-lg transition-transform duration-300">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-full overflow-hidden">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-semibold">${testimonial.name}</h3>
                    <div class="flex">
                        ${createStarRating(testimonial.rating)}
                    </div>
                </div>
            </div>
            <blockquote class="text-gray-600">
                "${testimonial.text}"
            </blockquote>
        </div>
    `;
}

function updateSlides() {
  const container = document.getElementById('testimonialContainer');
  const nextIndex = (currentIndex + 1) % testimonials.length;

  container.innerHTML =
    createTestimonialCard(testimonials[currentIndex]) +
    createTestimonialCard(testimonials[nextIndex]);

  // Add fade effect
  const cards = container.querySelectorAll('div');
  cards.forEach(card => {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.opacity = '1';
    }, 50);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  updateSlides();
}

// Initialize the slider
updateSlides();

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);







