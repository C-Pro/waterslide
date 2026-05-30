// Page-specific scripts for Slide 2 (Interactive Elements)

let counterValue = 0;

window.initCounter = function() {
    counterValue = 0;
    const valEl = document.getElementById('counter-val');
    if (valEl) valEl.textContent = counterValue;
};

window.incrementCounter = function() {
    counterValue++;
    const valEl = document.getElementById('counter-val');
    if (valEl) {
        valEl.textContent = counterValue;
        // Add a small bounce animation to the counter text
        valEl.style.transform = 'scale(1.2)';
        setTimeout(() => valEl.style.transform = 'scale(1)', 100);
    }
};

window.handleFormSubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById('name-input');
    const feedback = document.getElementById('form-feedback');
    if (input && feedback) {
        feedback.textContent = `Hello, ${input.value}! Welcome to the interactive talk.`;
        feedback.classList.add('visible');
    }
};
