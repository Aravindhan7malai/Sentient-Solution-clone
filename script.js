let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentTestimonialIndex = index;
}

function changeTestimonial(step) {
    let newIndex = currentTestimonialIndex + step;
    if (newIndex >= testimonials.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = testimonials.length - 1;
    }
    showTestimonial(newIndex);
}

// Initialize the first testimonial as active
showTestimonial(0);
