const body = document.querySelector(".bodyCalc");
const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen")

let equation = ""; 
let queue = "";

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
            queue+= button.textContent;
            updateContent(screen, button.textContent);
          

        }
        else if(button.className.indexOf("operator") != -1)
        {
            if(button.classList.contains("selected") == false){
                equation += queue; 
                equation += button.getAttribute('data-target');
                button.classList.add("selected");
                clearContent(screen);
                queue = "";
            }
        }
        else if(button.getAttribute('data-target') == "clear")
        {
            clearContent(screen);
            clearSelection(document.getElementsByClassName("selected"));
            equation = ""; 
            queue = "";
        }
        else if(button.getAttribute('data-target') == "equals")
        {
            equation += queue;
            clearContent(screen);
            updateContent(screen, Math.round(math.evaluate(equation) * 100) /100);
            equation = "";
            queue = "";
            clearSelection(document.getElementsByClassName("selected"));         
        }
        else if(button.getAttribute('data-target') == "negative"){
            let num = parseInt(screen.textContent); 
            num = (num * -1).toString();
            clearContent(screen);
            updateContent(screen, num);
            queue = num;

        }
        else if(button.getAttribute('data-target') == "percent"){
            if(button.classList.contains("selected") == false){
                button.classList.add("selected");
                queue+= button.textContent;
                updateContent(screen, button.textContent);
            }
        }
        else if(button.getAttribute('data-target') == 'decimal'){
            if(button.classList.contains("selected") == false){
                button.classList.add("selected");
                queue+= button.textContent;
                updateContent(screen, button.textContent);
            }

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



