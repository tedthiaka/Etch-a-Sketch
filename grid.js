//Initialization of variables holding the elements required
let grid = document.querySelector("#grid"),
    slider = document.querySelector("#slider"),
    sliderValue = document.querySelector('#range-value-text'),
    body = document.querySelector("body"),
    simpleButton = document.querySelector("#simple-btn"),
    randomButton = document.querySelector("#random-btn"),
    gradientButton = document.querySelector("#gradient-btn");

//Creating a 16 x 16 grid after the screen loads
createGrid();

//Assigning event listeners to every "square" in the grid that 
//changes the color to a random color
let squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    });
});

//Adding event listeners to the range to add squares as the slider 
//changes value
slider.addEventListener('change', ChangeColor);

//Buttons to change the way the squares change color
simpleButton.addEventListener("click", simpleColor);
randomButton.addEventListener("click", randomColor);
gradientButton.addEventListener("click", gradientColor);

//Functions 

//Function to remove the existing squares when the slider is changed with
//the removeElements() function.
function ChangeColor(){
    let squares = document.querySelectorAll('.square');
    removeElements(squares);
    
    //It then adds the squares according to the value of the slider with the
    //createGrid() function.
    numberOfSquares = document.getElementById('slider').value;
    createGrid(numberOfSquares);

    //Then it adds eventlisteners to each of the squares with the 
    //"simpleColor()" function.
    simpleColor();

};

//The removeElements() function used to remove all current squares, 
//clearing the grid
function removeElements(elems){
    for (let child of elems) {
        child.remove();
    };
}

//createGrid() function that creates a grid the size of the slider value
function createGrid(num=16){
    for(i = 1; i<=num**2; i++){
        let div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);      
    };
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    //Shows the number dimensions of the grid
    sliderValue.textContent = num;
};

//Changes the square to blue when the mouse hovers over it
function simpleColor(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `blue`;
        });
    });
}

//Changes the square to a random color when the mouse hovers over it
function randomColor(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 
            `${getRandomHex()}`;
        });
    });
}

//Changes the square to a random gradient when the mouse hovers over it
function gradientColor(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.background = 
            `linear-gradient(${Math.random()*360}deg, 
            ${getRandomHex()} 0%, ${getRandomHex()} 100%)`;
        });
    console.log(square.style.background);
    });
};

//Generates a random hex number to be used to get the random color 
//and gradient
function getRandomHex(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
        for(let i=0; i<6; i++){
          hexColor += hex[Math.floor(Math.random()*hex.length)];
        }
    return hexColor;
};