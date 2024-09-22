
document.addEventListener("DOMContentLoaded", function() {
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const animatedElements = document.querySelectorAll('.container2');
    animatedElements.forEach(element => {
        element.style.opacity = 0; 
        element.style.transform = 'translateY(-30px)'; 
        observer.observe(element);
    });
});