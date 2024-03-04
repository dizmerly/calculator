const body = document.querySelector(".bodyCalc");
const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen")


buttons.forEach((button) => 
{
    button.addEventListener('click', (event) => 
    {   
        if(button.className.indexOf("number") != -1)
        {
            screen.textContent = screen.textContent.push(button.textContent);
        }
        else if(button.className.indexOf("operator") != -1)
        {
            console.log(button.getAttribute("data-target"));
        }


        else
        {
            console.log("Clicked " + button.textContent);
        }        
    });
}); 

screen.textContent = "02313";

