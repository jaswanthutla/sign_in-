function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Reset previous error messages
    resetErrorMessages();

    // Get form inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;

    // Validate inputs
    var isValid = true;

    if (!isValidUsername(username)) {
        isValid = false;
        displayErrorMessage('Invalid username. It should be at least 3 characters long.');
    }

    if (!isValidEmail(email)) {
        isValid = false;
        displayErrorMessage('Invalid email address.');
    }

    if (!isValidMobileNumber(mobile)) {
        isValid = false;
        displayErrorMessage('Invalid mobile number. It should be 10 digits.');
    }

    if (!isValidPassword(password)) {
        isValid = false;
        displayErrorMessage('Invalid password. It should be at least 6 characters long.');
    }

    // If the form is valid, you can submit it or perform further actions
    if (isValid) {
        alert('Form submitted successfully!');
        // Add your form submission logic here
    }
}

function isValidUsername(username) {
    return username.length >= 3;
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobileNumber(mobile) {
    // Basic mobile number validation for 10 digits
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function displayErrorMessage(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    var form = document.getElementById('signupForm');
    form.appendChild(errorDiv);
}

function resetErrorMessages() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.remove();
    });
}
