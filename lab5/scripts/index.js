import { 
    getAllHamsters, deleteHamster
} from './api.js';

const itemsContainer = document.getElementById("itemsContainer");
const sortButton = document.getElementById("sortButton");
const searchButton = document.getElementById("searchButton");
const cancelButton = document.getElementById("cancelButton");
const totalPriceButton = document.getElementById("totalPriceButton");
const addButton = document.getElementById("addButton");


let hamsters = [];

document.getElementsByTagName('body')[0].onload = updatePage;

async function updatePage() {
    hamsters = await getAllHamsters();
    if (hamsters == null)
        hamsters = [];
    renderItems();
    console.log("up");
}

function renderItems(items = hamsters) {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}

function addItemToPage(item) {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate(item)
    );
    document.getElementById(`${item.id}`).onclick = editHamster;
    document.getElementById(`-${item.id}`).onclick = removeHamster;
}

function itemTemplate(item) {
    return `
            <li class="hamster__item">
                <img class="hamster__img" src="./images/hamster.jpg" alt="hamster">
                <div class="hamster__info__div">
                    Age: ${item.age} <br>
                    Weight: ${item.weight} <br>
                    Price: ${item.price} <br>
                    Name: ${item.name} <br>
                    <button id="${item.id}" class="edit__button">
                        Edit
                    </button>
                    <button id="-${item.id}" class="edit__button">
                        Delete
                    </button>
                </div>
            </li>
        `
}

sortButton.addEventListener("click", (event) => {
    const radioButtons = document.querySelectorAll("input[name='sortRadio']");
    let option;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            option = radioButton.id;
            break;
        }
    }
    hamsters.sort((a, b) => {
        return value(a, option) - value(b, option)
    });
    renderItems();
})

function value(hamster, option) {
    switch (option) {
        case "by_age_option":
            return hamster.age;
        case "by_weight_option":
            return hamster.weight;
        case "by_price_option":
            return hamster.price;
    }
}

searchButton.addEventListener("click", (event) => {
    let text = document.getElementById("search__input").value;
    const foundHamsters = hamsters.filter(
        (hamster) => hamster.name.search(text) !== -1
    );
    renderItems(foundHamsters);
    console.log(foundHamsters)
});

cancelButton.addEventListener("click", (event) => {
    document.getElementById("search__input").value = "";
    renderItems();
});

totalPriceButton.addEventListener("click", (event) => {
    let total = hamsters.reduce((total, num) => total + num.price, 0);
    document.getElementById("totalPrice").innerHTML += ` ${total}`
});

addButton.addEventListener("click", (event) => window.location.href = "./add_page.html");

function editHamster(){
    sessionStorage.setItem("hamster_id", JSON.stringify(this.id));
    window.location.href = "./edit_page.html";
};

function removeHamster(){
    let hamster_id = -parseInt(this.id);
    deleteHamster(hamster_id).then(updatePage);
};