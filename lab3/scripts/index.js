const hamsters = [
    {
        age: 1.0,
        weight: 0.5,
        price: 10.0,
        name: 'Josh'
    },
    {
        age: 0.1,
        weight: 0.2,
        price: 15.0,
        name: 'Mike'
    },
    {
        age: 0.6,
        weight: 0.4,
        price: 8.0,
        name: 'Michael'
    },
    {
        age: 2.1,
        weight: 1.2,
        price: 30.5,
        name: 'Vasyl'
    },
    {
        age: 0.3,
        weight: 0.7,
        price: 12.5,
        name: 'McQueen'
    }
];

const itemsContainer = document.getElementById("itemsContainer");
const sortButton = document.getElementById("sortButton");
const searchButton = document.getElementById("searchButton");
const cancelButton = document.getElementById("cancelButton");
const totalPriceButton = document.getElementById("totalPriceButton");


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
    text = document.getElementById("search__input").value;
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
    total = hamsters.reduce((total, num) => total + num.price, 0);
    document.getElementById("totalPrice").innerHTML += ` ${total}`
});