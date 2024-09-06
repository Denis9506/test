document.addEventListener("DOMContentLoaded", function() {
    generateCaptcha();
});

function generateCaptcha() {
    const captchaBox = document.getElementById("generated-captcha");
    const captcha = generateRandomString(6);
    captchaBox.innerText = captcha;
    captchaBox.dataset.captcha = captcha; 
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateCaptcha() {
    const inputCaptcha = document.getElementById("captcha").value;
    const generatedCaptcha = document.getElementById("generated-captcha").dataset.captcha;
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (inputCaptcha !== generatedCaptcha) {
        alert("Captcha does not match. Please try again.");
        generateCaptcha(); 
        return false;
    }

    

    return true;
}

document.getElementById('subscribe-form').onsubmit = function(event) {
    event.preventDefault(); 

    if (validateCaptcha()) {
        document.getElementById('subscribe-form').style.display = 'none';

        var confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';

        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "subscribe.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('Form submitted successfully');
            }
        };
        xhr.send(formData);
    }
};

document.getElementById('ContactForm').onsubmit = function(event) {
    event.preventDefault(); 

        document.getElementById('ContactForm').style.display = 'none';

        var confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';
};