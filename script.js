console.log("Welcome to Ayush's website!");

document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const typewriterText = "Hi, I'm Ayush!";
    const typewriterElement = document.getElementById('typewriter');
    
    let index = 0;

    const type = () => {
        if (index < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed (ms per character)
        }
    };

    type();

    // Smooth scrolling and section highlighting
    const fadeInElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    };

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