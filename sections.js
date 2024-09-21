document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const sectionOffset = index * window.innerHeight; // Assuming each section takes up 100% of viewport height

        // Check if the section should be active based on scroll position
        if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + window.innerHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
