document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.innerHTML = '&#128064;'; // Eye open icon
    } else {
        passwordField.type = 'password';
        eyeIcon.innerHTML = '&#128065;'; // Eye closed icon
    }
});
