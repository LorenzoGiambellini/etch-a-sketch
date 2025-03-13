const container = document.querySelector(".container");
container.className = "container";
let n = 16;
function createGrid(x){
    for(let i = 0; i<x*x; i++){
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    } 
}
createGrid(n);

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
const gap = 5;

let squareSize;
sizeBtn.addEventListener("click", ()=> {
    n = prompt("insert a number");
    squareSize = (containerSize - (n -1) * gap) / n;
    document.documentElement.style.setProperty("--square-size", `${squareSize}px`);
    resize(n);
});
function resize(x) {
    container.innerHTML = ""; // Svuota il contenitore prima di ricreare la griglia
    createGrid(x);
}
