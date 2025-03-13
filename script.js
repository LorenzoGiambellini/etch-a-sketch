const container = document.querySelector(".container");
container.className = "container";
let squareSize = 16;
function createGrid(x){
    for(let i = 0; i<x*x; i++){
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    } 
}
createGrid(squareSize);

document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomColor() ;
    });
    
});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const sizeBtn = document.querySelector(".size-btn");
const containerSize = 960;
sizeBtn.addEventListener("click", ()=> {
    let n = prompt("insert a number");
    document.documentElement.style.setProperty("--square-size", `${containerSize / n}px`);
    resize(n);
});
function resize(x) {
    container.innerHTML = ""; // Svuota il contenitore prima di ricreare la griglia
    createGrid(x);
}
