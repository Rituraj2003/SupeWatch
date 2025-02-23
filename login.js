/* ---------- login.js contents below ---------- */
function toggleForm(formId) {
  const forms = document.querySelectorAll('.form-section');
  forms.forEach(form => {
    form.classList.remove('active');
    form.style.opacity = '0';
  });
  const targetForm = document.getElementById(formId);
  targetForm.classList.add('active');
  setTimeout(() => {
    targetForm.style.opacity = '1';
  }, 100);
}

// Form submission handling
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formId = form.parentElement.id;
    const errorElement = document.getElementById(`${formId}-error`);
    
    if (formId === 'login-form') {
      // Simulate login success and redirect
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    } else if (formId === 'signup-form') {
      // Collect registration details
      const userName = form.querySelectorAll('input')[0].value;
      const email = form.querySelectorAll('input')[1].value;
      const category = form.querySelector('select[name="category"]').value;
      const accessCode = form.querySelectorAll('input[type="password"]')[0].value;
      const verifyCode = form.querySelectorAll('input[type="password"]')[1].value;
      
      // Check if access codes match
      if (accessCode !== verifyCode) {
        errorElement.textContent = "Access codes do not match.";
        errorElement.style.display = 'block';
        setTimeout(() => {
          errorElement.style.display = 'none';
        }, 3000);
        return;
      }
      
      // Simulate successful registration
      setTimeout(() => {
        alert(`Registration Successful!
Name: ${userName}
Email: ${email}
Preferred Category: ${category}`);
        // After registration, switch to login form
        toggleForm('login-form');
      }, 1000);
    }
  });
});