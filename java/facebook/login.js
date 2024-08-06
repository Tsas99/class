const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("login");

button.addEventListener("click",() => {
    if (!username.value ||!password.value){
        alert("fill the inputs")
        return;
    }
const fbPassword = window.localStorage.getItem(username.value);
 if (!fbPassword) {
    alert("password or username wrong");
    return;
 }
 if (password.value ==fbPassword) {
    window.localStorage.setItem("token",true);
    alert("successfully logged in" );
    window.location.href = "./home.html"
 }
});