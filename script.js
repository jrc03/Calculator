//lets do the pseudo! so basically first ig i gotta save whats shown in display. but first i need to print the numbers yk, so i gotta get that working, but idk how ngl, well the user is not supossed to manipulate the display perse, so when someone clicks on "1 " for example i gotta print that

//rn im getting some errors printing the numbers to the display, but it crossed my mind that i can use some arrays and "join" to capture the numbers the user inputs. ngl i think that could work imagine like [1,2,3,4] ig that join or another function can do that array this [1234] (IDEA)

const display= document.querySelector(".display");
const numbers= document.querySelectorAll(".number");
const clear= document.querySelector(".clear")
const dot= document.querySelector(".dot");


numbers.forEach(number => {
   
    
        number.addEventListener("click", () => {
            const value = number.textContent;
            console.log("Clicked value:", value); 
            if (display.textContent === "0") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
         
        });
    });

dot.addEventListener("click",()=>
{
    const value = dot.textContent;
    console.log("Clicked value:", value); 
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    console.log(value);
})
clear.addEventListener("click", () => {
display.textContent = "0";
});


//then i gotta set up the buttons and listen for clicks 
