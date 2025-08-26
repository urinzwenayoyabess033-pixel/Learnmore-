 const containerEl = document.querySelector(".container");
 const btnEl = document.querySelector(".btn");
 const popupContainerEl = document.querySelector(".popup-container");
 const closeIconEl = document.querySelector(".close-icon");
 const loginBtn = document.querySelector(".popup-btn");
 const passwordInput = document.querySelector(".password");
 const strengthMessage = document.getElementById("strength-message");

 
 btnEl.addEventListener("click", () => {
     containerEl.classList.add("active");
     popupContainerEl.classList.remove("active");
 });
 closeIconEl.addEventListener("click", () => {
 	containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
 });
  
 
// Function to check password strength
 function checkPasswordStrength(password) {
      let strength = 0;

// Regex rules
const regexLower = /[a-z]/;
const regexUpper = /[A-Z]/; 
const regexNumber = /\d/;
const regexSpecial = /[\W_]/;

if (regexLower.test(password)) strength++;
if (regexUpper.test(password)) strength++;
if (regexNumber.test(password)) strength++;
if (regexSpecial.test(password)) strength++;
if (password.length >= 8) strength++;

   return strength;
}


// Live feedback while typing
passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    if (strength <= 2) {
        strengthMessage.textContent = "Weak password";
        strengthMessage.style.color = "red";
    } else if (strength === 3 || strength === 4) {
        strengthMessage.textContent = "Medium password";
        strengthMessage.style.color = "orange";
    } else if (strength === 5) {
        strengthMessage.textContent = "Strong password";
        strengthMessage.style.color = "green";
    }
});

// Add click event to the button
loginBtn.addEventListener("click", function() {
    const password = passwordInput.value;
// Simple check: ensure password is not empty
    if(password.trim() === "") {
        alert("Please enter a password!");
        return;
    }

    // Redirect to home.html
    window.location.href = "home.html";
});

