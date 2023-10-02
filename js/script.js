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


    return makeUnique(features);
}


/* Function to create a button for each controller item - 

I used ChatGPT to help me create these buttons, 

because I didn't manage to create the innerHTML ("nav") by my self :/ */

/* async function createButtonsForControllers() {
    const controllers = await getControllers();

    controllers.forEach((controller) => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = controller.name; // You can set the button label to the controller name or any other property you want.
        buttonElement.addEventListener("click", () => {
          // Add an event listener to handle button clicks for this controller
          // You can perform actions specific to the controller here.
          console.log(`Button clicked for ${controller.name}`);
        });

        navElement.appendChild(buttonElement);
    });
  }

  createButtonsForControllers(); */
/* 
function buttonMaking(product) { */



//I manage to create img by myself problemsolving by myself and using chatGPT :)
function renderController(product) {
    const main = document.querySelector("main");

    main.innerHTML += `
    <div class="product">
        <h2>${product.name}</h2>
        <h3>by ${product.brand}</h3>
        <div><b>${product.colour}</b></div>
        <img src="${product.image}" alt="controller type" />
        <button>Buy for ${product.price} NOK</button>
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


/* 
const button = document.querySelector(".button") 
button.addEventListener("click", function(){
    if (id === "1") {
        console.log("hei")
    }
}) */

//Data that don't show on screen
async function narrative() {
    const products = await getControllers();
    const allColours = listAllColours (products);

    renderControllers(products)
}

narrative()