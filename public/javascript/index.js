const getOptionsBtn = document.querySelector(".more-option-btn");
const dropDownContainer = document.querySelector(".more-options-div");

getOptionsBtn.addEventListener("click", ()=>{
    dropDownContainer.classList.toggle("inactive")
});

const userInput = document.querySelector("input[type='text']");
const countryInput = document.querySelector(".countryInput");
const stateInput = document.querySelector(".stateInput");
const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (e) => {
  // if (userInput.value === "") {
  //   e.preventDefault();
  //   alert("SAMUEL SAYS ENTER A BUSINESS NAME!!");
  // } else if (countryInput.value === "") {
  //   e.preventDefault();
  //   alert("SAMUEL SAYS SELECT A COUNTRY!!");
  // } else if (stateInput.value === "") {
  //   e.preventDefault();
  //   alert("SAMUEL SAYS SELECT A STATE!!");
  // } //else {
  //   submitBtn.disabled = true;
  //   submitBtn.classList.add("disabled-btn");
  //   setTimeout(() => {
  //     submitBtn.disabled = false;
  //     submitBtn.classList.remove("disabled-btn");
  //     console.log("Disabled");
  //   }, 10000);
  // }
});


const Country = {
    "countries": [
      {
        "name": "Nigeria",
        "states": [
          "Abia",
          "Adamawa",
          "Akwa Ibom",
          "Anambra",
          "Bauchi",
          "Bayelsa",
          "Benue",
          "Borno",
          "Cross River",
          "Delta",
          "Ebonyi",
          "Edo",
          "Ekiti",
          "Enugu",
          "Federal Capital Territory",
          "Gombe",
          "Imo",
          "Jigawa",
          "Kaduna",
          "Kano",
          "Katsina",
          "Kebbi",
          "Kogi",
          "Kwara",
          "Lagos",
          "Nasarawa",
          "Niger",
          "Ogun",
          "Ondo",
          "Osun",
          "Oyo",
          "Plateau",
          "Rivers",
          "Sokoto",
          "Taraba",
          "Yobe",
          "Zamfara"
        ]
      },
      {
        "name": "United States",
        "states": [
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming"
        ]
      }
    ]
}

// Get the country and state select elements
const countrySelect = document.querySelector('.countryInput');
const stateSelect = document.querySelector('.stateInput');

// Populate the country select element
Country.countries.forEach(country => {
  const option = document.createElement('option');
  option.value = country.name;
  option.textContent = country.name;
  countrySelect.appendChild(option);
});

// Event listener for country select change
countrySelect.addEventListener('change', function() {
  const selectedCountry = this.value;

  // Clear the states select element
  stateSelect.innerHTML = '';

  // Find the selected country in the Country object
  const selectedCountryObj = Country.countries.find(country => country.name === selectedCountry);

  // Populate the states select element with the states of the selected country
  if (selectedCountryObj) {
    selectedCountryObj.states.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
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
