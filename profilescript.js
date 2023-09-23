const userJSON = localStorage.getItem('user');


if (userJSON) {
    const user = JSON.parse(userJSON);
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const Token = document.getElementById('token');
    const password = document.getElementById('password');

    if (username && email && Token && password) {
        username.textContent = `Full Name: ${user.username}`;
        email.textContent = `Email: ${user.email}`;
        Token.textContent = `Token: ${user.accessToken}`;
        password.textContent = `Password: ${user.password}`;
    } else {
        console.error('One or more elements not found.');
    }
} else {
    // Handle the case where user data is not found in local storage
    console.error('User data not found.');

    // Redirect to the signup page if the user is not logged in
    if (window.location.href.includes('profile.html')) {
        window.location.href = 'signup.html';
    }
}

// Redirecting to MainPage
const logoutbtnref = document.getElementById('logout-btn');
logoutbtnref.addEventListener('click', (event) => {
    localStorage.clear();
    window.location.href = 'index.html';
});

