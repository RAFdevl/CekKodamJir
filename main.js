const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store registration data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to register.html
    window.location.href = 'register.html';
});
// Retrieve registration data from local storage
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

// Display registration data on register.html
document.getElementById('name').textContent = name;
document.getElementById('email').textContent = email;
document.getElementById('password').textContent = password;