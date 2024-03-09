import { create, all } from 'mathjs'



const body = document.querySelector(".bodyCalc");
const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen")

let equation = ""; 


let updateContent = (destination, content) => {
    let tempText = destination.textContent + content;
    destination.textContent = tempText;
};

let clearContent = (destination) => {
    destination.textContent = "";
};

buttons.forEach((button) => 
{
    button.addEventListener('click', (event) => 
    {   
        if(button.className.indexOf("number") != -1)
        {
            
            updateContent(screen, button.textContent);
        }
        else if(button.className.indexOf("operator") != -1)
        {
            console.log(button.getAttribute("data-target"));
        }
        else if(button.getAttribute('data-target') == "clear"){
            clearContent(screen);
        }


        else
        {
            console.log("Clicked " + button.textContent);
        }        
    });
}); 


console.log(math.evaluate("2+2"));

