console.log("Welcome to Ayush's website!");

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    };

    // Smooth scrolling with section highlighting
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const headerOffset = document.querySelector('header').offsetHeight;
            const sectionPosition = targetSection.offsetTop - headerOffset;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });

            document.querySelectorAll('section h2').forEach(h => h.classList.remove('highlight'));
            targetSection.querySelector('h2').classList.add('highlight');
        });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});