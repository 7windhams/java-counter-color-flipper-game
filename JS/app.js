const colors = ["#f1f5f8", "#f15025", "#c0c0c0", "#000000", "purple", "blue", "#00ff00", "green", "yellow", "orange", "pink"];
//#f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {
// Get random number between 0 - 4
    const randomNumber = getrandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});
function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

   