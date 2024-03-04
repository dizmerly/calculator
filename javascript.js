const body = document.querySelector(".bodyCalc");
const buttons = document.querySelectorAll(".btn");



buttons.forEach((button) => {
    button.addEventListener('click', (event) => console.log("Clicked!"));
}); 