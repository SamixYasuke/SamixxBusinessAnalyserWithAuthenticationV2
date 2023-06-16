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