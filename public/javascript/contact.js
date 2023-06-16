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

const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    // console.log("hi")
    sendMail();
})

async function sendMail() {
    var userNameInput = document.getElementById("userName");
    var mailAddressInput = document.getElementById("userEmail");
    var userMessageInput = document.getElementById("userMessage");

    var userNameValue = `${userNameInput.value} via Samixx AI`;
    var mailAddressValue = mailAddressInput.value;
    var userMessageValue = userMessageInput.value;
    var params = {
        from_name: userNameValue,
        email_id: mailAddressValue,
        message: userMessageValue
    }

    const serviceID = "service_599s4iu";
    const templateId = "template_wzbqfwk";

    try {
        const res = await emailjs.send(serviceID, templateId, params);
        userNameInput.value = "";
        mailAddressInput.value = "";
        userMessageInput.value = "";
        console.log(res);
        alert("You've sent a message");
    } catch (error) {
        console.log(error);
        alert("There was an error sending the message. Please try again later.");
    }
}
