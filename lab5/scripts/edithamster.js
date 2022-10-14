import { 
    updateHamster, getHamster
} from './api.js'; 

const editButton = document.getElementById("editButton");
const ageInput = document.getElementById("ageInput");
const weightInput = document.getElementById("weightInput");
const priceInput = document.getElementById("priceInput");
const nameInput = document.getElementById("nameInput");

const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("modalWindow");
const modalContent = document.getElementById("modalContent");
const displayMessage = document.getElementById("displayMessage");

const backButton = document.getElementById("backButton");


let hamster_id;
let hamster;


document.getElementsByTagName('body')[0].onload = async (event) => {
    hamster_id = parseInt(JSON.parse(sessionStorage.getItem("hamster_id")));
    hamster = await getHamster(hamster_id);
    ageInput.value = hamster.age;
    weightInput.value = hamster.weight;
    priceInput.value = hamster.price;
    nameInput.value = hamster.name;
};


editButton.addEventListener("click", async (event) => {
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
        await updateHamster(hamster_id, newHamster);
        backToMain();
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