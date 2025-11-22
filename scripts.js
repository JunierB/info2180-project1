// javascript
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('section.newsletter form');
    const emailInput = document.getElementById('email') || (form && form.querySelector('input[name="email"]'));
    const messageDiv = document.querySelector('section.newsletter .message');

    if (!form || !emailInput || !messageDiv) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    messageDiv.setAttribute('aria-live', 'polite');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = (emailInput.value || '').trim();

        if (!email || !emailRegex.test(email)) {
            messageDiv.textContent = 'Please enter a valid email address.';
            return;
        }

        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        form.reset();
    });
});