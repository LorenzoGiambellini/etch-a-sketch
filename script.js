const container = document.querySelector(".container");
container.className = "container";
for(let i = 0; i<16*16; i++){
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
}


document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomColor() ;
    });
    
});

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}