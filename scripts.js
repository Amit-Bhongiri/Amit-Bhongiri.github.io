document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

const projects = document.querySelectorAll('.project');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

projects.forEach(project => {
    project.addEventListener('click', function() {
        const projectNumber = this.getAttribute('data-project');
        document.getElementById(`project-modal-${projectNumber}`).style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectNumber = this.getAttribute('data-close');
        document.getElementById(`project-modal-${projectNumber}`).style.display = 'none';
    });
});

window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// Intersection Observer for fade-in animation
const fadeInSections = document.querySelectorAll('.fade-in');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.observe(entry.target);
        }
    });
}, options);

fadeInSections.forEach(section => {
    observer.observe(section);
});
