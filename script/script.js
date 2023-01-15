const form = document.getElementById("loginForm");
      
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
      
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
      
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return;
    }
      
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Invalid email address.");
        return;
    }
      
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
});