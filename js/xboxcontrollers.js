// Get the list of all products

async function getControllers() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
}

// Make a list of all the colours

function listAllColours(allControllers) {
    let colours = [];

    for (let product of allControllers) {
        colours.push(product.colour)
    }

    return colours;
}

// Make a list of all the features

function listAllFeatures(allControllers) {
    let features = [];

    for (let product of allControllers) {
        for (let feature of product.features) {
            features.push(feature);
        }
    }

console.log(features)
    return makeUnique(features);
}

//This is learned by Oliver:
function makeUnique(array) {
    const set = new Set(array);
    return Array.from(set.values())
}

//Check if power is on

function isPowerOn(product) {
    return product.powerOn
}


function powerOn(allControllers) {
    return allControllers.filter(isPowerOn)
}



//I manage to create img by myself problemsolving by myself and using chatGPT :)
function renderController(product) {
    const main = document.querySelector("main");

    main.innerHTML += `
    <div class="product">
        <h2>${product.name}</h2>
        <h3>by ${product.brand}</h3>
        <div><b>${product.colour}</b></div>
        <img src="${product.image}" alt="controller type" />
        <div><button>Buy for ${product.price} NOK</button></div>
    </div>
`;

const nav = document.querySelector("nav");
  nav.innerHTML += `
  <button class="button" id="${product.id}">${product.name}</button>
  `;

}

function renderControllers(products) {
    for (let product of products) {
        renderController(product);
        
  }
} 



//Data that don't show on screen
async function narrative() {
    const products = await getControllers();
    const allColours = listAllColours (products);
    const features = listAllFeatures(products);
    const isPowerOn = powerOn(products);
    
    renderControllers(products)
}

narrative()