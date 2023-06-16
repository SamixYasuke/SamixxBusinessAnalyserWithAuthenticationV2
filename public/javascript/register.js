
// REGISTER.EJS EVENTS
const userNameRegister = document.getElementById("userName");
const userFirstNameRegister = document.getElementById("firstName");
const userSecondNameRegister = document.getElementById("secondName");
const userEmailRegister = document.getElementById("userEmail");
const userPasswordRegister = document.getElementById("userPassword");
const userPasswordConfirmation = document.getElementById("userPasswordConfirmation");
const registerBtn = document.querySelector(".register-btn");


registerBtn.addEventListener("click", (e)=>{
  if(userNameRegister.value === ""){
    e.preventDefault();
    alert("Enter Your User Name!!!");
  }else if(userFirstNameRegister.value === ""){
    e.preventDefault();
    alert("Enter Your First Name!!!");
  }else if(userSecondNameRegister.value === ""){
    e.preventDefault();
    alert("Enter Your Second Name");
  }else if(userEmailRegister.value === ""){
    e.preventDefault();
    alert("Enter Your Email!!!");
  }else if(userPasswordRegister.value === ""){
    e.preventDefault();
    alert("Enter Your Password!!!");
  }else if(userPasswordConfirmation.value !== userPasswordRegister.value){
    e.preventDefault();
    alert("Your Password Doesn't Match");
  }
});

const getOptionsBtn = document.querySelector(".more-option-btn");
const dropDownContainer = document.querySelector(".more-options-div");

getOptionsBtn.addEventListener("click", ()=>{
    dropDownContainer.classList.toggle("inactive")
});


const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navOpenItem = document.querySelector(".nav-open-item");


openBtn.addEventListener("click", (req, res)=>{
    navOpenItem.classList.toggle("active-nav");
});

closeBtn.addEventListener("click", ()=>{
    navOpenItem.classList.toggle("active-nav");
});