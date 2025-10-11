// food item buttons
const noodles = document.getElementById("noodles");
const bread = document.getElementById("bread");
const milk = document.getElementById("milk");

// possible prices

 const price = [5, 10, 15, 20, 25];

// generate price to match
function getRandomPrice() {
    const randomIndex = Math.floor(Math.random() * price.length);
    return price[randomIndex];
}

addPrice: (button) => {
    switch(button) {
        case(noodles):
            // add price to total
            break;
        case(bread):
            // add price to total
            break;
        case(milk):
            // add price to total
            break;
    }
}

const randomPrice = getRandomPrice();
document.getElementById('price').textContent = `$${randomPrice}`;