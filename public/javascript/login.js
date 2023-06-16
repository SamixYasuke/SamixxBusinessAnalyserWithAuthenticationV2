const userName = document.querySelector("input[name ='userName']");
const userPassword = document.querySelector("input[name = 'userPassword']");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", (e)=>{
    if(userName.value === ""){
        e.preventDefault();
        alert("Enter Your User Name!!!");
    }else if(userPassword.value === ""){
        e.preventDefault();
        alert("Enter Your Password!!!");
    }
});