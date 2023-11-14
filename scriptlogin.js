let inp_username = document.getElementById("username");
let inp_email = document.getElementById("email");
let inp_psw = document.getElementById("psw");
let login = document.getElementById("login");
let text_user = document.getElementById("text-user");
let text_email = document.getElementById("text-email");
let text_psw = document.getElementById("text-psw");
  
   
function apiFunGet() {
    login.addEventListener("click", () => {
        let enteredUsername = inp_username.value;
        let enteredEmail = inp_email.value;
        let enteredPsw = inp_psw.value;

        fetch('https://655267bd5c69a7790329fff9.mockapi.io/sign', {
                method: "get"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    if (enteredUsername === data[i].username && enteredEmail === data[i].email && enteredPsw === data[i].psw) {
                        alert('Login successful!');
                        window.open('store.html');
                    }
                }
                alert('Invalid credentials. Please try again.');
            })
            .catch((err) => console.log(`The error is ${err}`));
    });
} apiFunGet();
