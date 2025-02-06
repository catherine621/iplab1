// Function to toggle password visibility
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const eyeIcon = document.querySelector(`#${id} + .eye-icon`);
    
    // Toggle the type of the password field
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}
