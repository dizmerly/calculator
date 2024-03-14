const body = document.querySelector(".bodyCalc");
const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen")

let equation = ""; 

let updateContent = (destination, content) => {
    if((destination.textContent).length < 9){
     let tempText = destination.textContent + content;
    destination.textContent = tempText;
    };
   
};

let clearContent = (destination) => {
    destination.textContent = "";
};

let clearSelection = (elements) => {
    
    Array.from(elements).forEach((element) => element.classList.remove("selected"));
};

buttons.forEach((button) => 
{
    button.addEventListener('click', (event) => 
    {   
        if(button.className.indexOf("number") != -1)
        {
            updateContent(screen, button.textContent);
            equation += screen.textContent;

        }
        else if(button.className.indexOf("operator") != -1)
        {
            if(button.classList.contains("selected") == false){
                equation += button.getAttribute('data-target');
                button.classList.add("selected");
                clearContent(screen);
            }
        }
        else if(button.getAttribute('data-target') == "clear")
        {
            clearContent(screen);
            clearSelection(document.getElementsByClassName("selected"));
            equation = ""; 
        }
        else if(button.getAttribute('data-target') == "equals")
        {
            clearContent(screen);
            updateContent(screen, Math.round(math.evaluate(equation)));
            equation = "";
            clearSelection(document.getElementsByClassName("selected"));         
        }
        else if(button.getAttribute('data-target') == "negative"){
            
        }
        else if(button.getAttribute('data-target') == 'decimal'){
            updateContent(screen, ".");
        } 

        else
        {
            console.log("Clicked " + button.textContent);
        }


        if(screen.textContent == "NaN"){
            clearContent(screen)
            updateContent(screen, "ERROR");
        }
    });
}); 

