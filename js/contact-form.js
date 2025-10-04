const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    event.preventDefault();
});

function sendForm() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent =
            'Ungültige E-Mail. Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
}

function sendReview() {
    const newPath = 'thankyou.html';

    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent =
            'Ungültige E-Mail. Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
}
