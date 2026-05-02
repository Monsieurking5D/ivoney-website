// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('[data-mobile-menu]');
    const navLinks = document.querySelector('nav');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-20');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('bg-white');
            navLinks.classList.toggle('p-6');
            navLinks.classList.toggle('shadow-xl');
        });
    }

    // Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Order Form Logic (UI only)
    const orderButtons = document.querySelectorAll('button[data-product]');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            alert(`Merci pour votre intérêt pour le ${productName} ! Cette fonctionnalité de paiement sera bientôt disponible. Pour commander dès maintenant, merci de nous contacter via le formulaire en bas de page.`);
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
