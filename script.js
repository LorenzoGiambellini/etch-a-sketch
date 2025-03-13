const container = document.querySelector(".container");
container.className = "container";

let n = 16;
const containerSize = 960;
const gap = 5;

function createGrid(x){
    for(let i = 0; i<x*x; i++){
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    } 
}
createGrid(n);


container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = getRandomColor();
    }
});


function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const sizeBtn = document.querySelector(".size-btn");

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

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", ()=> {
    document.querySelectorAll(".square").forEach(square => {
        square.style.backgroundColor = "bisque";
    });
});