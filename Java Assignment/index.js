document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".my-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var usernameInput = document.querySelector("input[type='email']");
        var passwordInput = document.querySelector("input[type='password']");
        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();


        if (username === "") {
            showError("Please enter your username or email address.", usernameInput);
            return;
        }
        if (!isValidInput(username)) {
            showError("Please enter a valid username or email address.", usernameInput);
            return;
        }
        if (password === "") {
            showError("Please enter your password.", passwordInput);
            return;
        }

        window.location.href = 'student_details.html';
    });

    function isValidInput(input) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;

        if (input.includes('@')) {
            return emailRegex.test(input);
        } else {
            return usernameRegex.test(input);
        }
    }

    function showError(message, inputField) {
        alert(message);
        inputField.focus();
    }
});
