function validateForm () {
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmEmail");
    const country = document.getElementById("country");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const submit = document.getElementById("submit")

    submit.addEventListener("click", function () {
        console.log(password.value);
        console.log(confirmPassword.value) 
    })

    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Please enter a valid email address");
        } else {
            email.setCustomValidity("");
        }
    });

    confirmEmail.addEventListener("input", function(event) {
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity("Email addresses must match")
        } else {
            confirmEmail.setCustomValidity("");
        }
        console.log(confirmEmail)
    });

    password.addEventListener("input", function (event)  {
        if (password.validity.typeMismatch) {
            password.setCustomValidity("Password must be atleast 6 characters and no more than 20")
        } else {
            password.setCustomValidity("");
        }
    })

    confirmPassword.addEventListener("input", function(event) {
        if (password.value !== confirmPassword.value) {
            console.log("wrong");
            confirmPassword.setCustomValidity("Passwords must match!")
        } else {
            confirmPassword.setCustomValidity("");
        }
    })
}

validateForm();

