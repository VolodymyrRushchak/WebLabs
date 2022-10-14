import { 
    postHamster,
} from './api.js'; 

const createButton = document.getElementById("createButton");
const ageInput = document.getElementById("ageInput");
const weightInput = document.getElementById("weightInput");
const priceInput = document.getElementById("priceInput");
const nameInput = document.getElementById("nameInput");

const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("modalWindow");
const modalContent = document.getElementById("modalContent");
const displayMessage = document.getElementById("displayMessage");

const backButton = document.getElementById("backButton");

createButton.addEventListener("click", (event) => {
    let age_ = parseFloat(ageInput.value);
    let weight_ = parseFloat(weightInput.value);
    let price_ = parseFloat(priceInput.value);
    let name_ = nameInput.value;
    let newHamster = {
        age: age_,
        weight: weight_,
        price: price_,
        name: name_
    };
    let message = "";
    for(let prop in newHamster){
        if (prop === "name" && newHamster["name"] === "") {
            message = "Name can not be blank";
            break;
        }
        else if (prop !== "name" && isNaN(newHamster[prop])) {
            message = `Property '${prop}' is not a valid number`;
            break;
        }
    }
    if (message !== "") {
        displayMessage.innerHTML = message;
        modal.style.display = "block";
    }
    else {
        postHamster([newHamster]).then(backToMain);
    }
});

backButton.addEventListener("click", backToMain);

function backToMain() {
    window.location.href = "index.html";
}

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}