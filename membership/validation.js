// Fungsi validasi
function NameCheck(name) {
    const nameParts = name.trim().split(' ');
    return nameParts.length > 1;
}

function MailCheck(email) {
    email = email.trim();
    if (email === '') {
        return false; 
    }

    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
        return false;
    }

    const dotIndex = email.indexOf('.', atIndex);
    if (dotIndex === -1 || dotIndex === email.length - 1) {
        return false; 
    }

    return true;
}

function AddressCheck(address) {
    const cleanAddress = address.trim();
    return cleanAddress.length > 20;
}

function MemCheck(membershipDuration) {
    return membershipDuration !== 'none';
}

function CheckboxCheck(checkbox) {
    return checkbox.checked; 
}

function showError(fieldId, message) {
    const errorDiv = document.getElementById(`${fieldId}-error`);
    errorDiv.textContent = message;
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('membership-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const membershipDuration = document.getElementById('membership-duration').value;
        const terms = document.getElementById('terms');

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.textContent = '');

  
        if (!NameCheck(fullName)) {
            showError('full-name', 'Full Name must be more than one word.');
            isValid = false;
        }

  
        if (!MailCheck(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }


        if (!AddressCheck(address)) {
            showError('address', 'Home Address must be more than 20 characters.');
            isValid = false;
        }


        if (!MemCheck(membershipDuration)) {
            showError('membership-duration', 'Please select a valid membership duration.');
            isValid = false;
        }

        if (!CheckboxCheck(terms)) {
            showError('terms', 'You must agree to the terms and conditions.');
            isValid = false;
        }


        if (isValid) {
            showSuccess('Membership successfully created!');
            form.reset(); 
        }
    });
});
