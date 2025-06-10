// Sidebar Toggle Functionality
const sidebarToggleButton = document.querySelector('.top-bar button');
const sidebar = document.querySelector('.sidebar');

sidebarToggleButton.addEventListener('click', () => {
    const isHidden = sidebar.style.transform === 'translateX(-200px)' || sidebar.style.transform === '';
    sidebar.style.transform = isHidden ? 'translateX(0)' : 'translateX(-200px)';
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('open');
    });
});

// Initialize page animations
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.content, .top-bar');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 100);
    });
});
