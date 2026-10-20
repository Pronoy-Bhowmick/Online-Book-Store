const registration =  document.querySelector("form");
if (registration && document.getElementById("cpassword")){
    registration.addEventListener("submit",function(event){
        let password = document.getElementById("password").value;
        let cpassword = document.getElementById("cpassword").value;
        let phone = document.getElementById("phone").value;
        let fullname = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let terms = document.getElementById("terms");

        if(password !== cpassword) {
            alert("Password Error: Password & confirm Password don't match!");
            event.preventDefault();
            return;
        }

        if(password.length < 8){
            alert("Password Error: Password must be at least 8 characters!");
            event.preventDefault();
            return;
        }

        if(phone.length < 11){
            alert("Number Error: Wrong Phone Number. Please give me a correct phone number");
            event.preventDefault();
            return;
        }
        if(phone.length >11){
            alert("Number Error: Wrong Phone Number. Please give me a correct phone number");
            event.preventDefault();
            return;
        }
        if(fullname.length < 2){
            alert("Name Error:Required minimum 2 words!");
            event.preventDefault();
            return;
        }
        if(!email.includes("@gmail.com")){
            alert("Email Error: Must be obtain @gmail.com");
            event.preventDefault();
            return;
        }

        if(terms && !terms.checked){
            alert("Please agree to the Terms & Conditions");
            event.preventDefault();
            return;
        }
        alert("Registration Successful!")
   });
}


const Login = document.querySelector("form");
if (Login && !document.getElementById("cpassword")){
    Login.addEventListener("submit", function(event){
        let username = document.getElementById("username").value; 
        let password = document.getElementById("password").value;

        if(username === "" || password === ""){
            alert("Please fill in both Username & Password");
            event.preventDefault();
            return;
        }
        let correctUser = "Pronoy"
        let correctPass = "123456789"
        if(username === correctUser && password === correctPass){
            alert("Login Successful! ")
        }
        else{
            alert("Invalid username or password");
        }

    });
}