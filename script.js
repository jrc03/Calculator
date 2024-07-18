//lets do the pseudo! so basically first ig i gotta save whats shown in display. but first i need to print the numbers yk, so i gotta get that working, but idk how ngl, well the user is not supossed to manipulate the display perse, so when someone clicks on "1 " for example i gotta print that

//rn im getting some errors printing the numbers to the display, but it crossed my mind that i can use some arrays and "join" to capture the numbers the user inputs. ngl i think that could work imagine like [1,2,3,4] ig that join or another function can do that array this [1234] (IDEA)

const display= document.querySelector(".display");
const equals= document.querySelector(".equal");
const keypad= document.querySelectorAll(".keypad");
const numbers= document.querySelectorAll(".number");
const clear= document.querySelector(".clear");
const dot= document.querySelector(".dot");
const operators= document.querySelectorAll(".operator");

let num1 = "";
let operator = "";
let num2 = "";


console.log(operators.values)
numbers.forEach(number => {
        number.addEventListener("click", () => {
          
            const value = number.textContent;
            console.log("Clicked value:", value); 
            if(operator){
                if(display.textContent=== operator){
                    display.textContent="";
                }
                num2 += value;
                display.textContent += value;
                console.log("Num2 "+num2);
            }
            else {
                if (display.textContent === "0") {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
                num1 = display.textContent;
                console.log("Num1 "+num1);
            }
            console.log("num1:", num1, "operator:", operator, "num2:", num2);

        
    });
});
     

operators.forEach(op => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        console.log("Clicked operator:", operator);
        display.textContent = operator; 
    });
});

equals.addEventListener("click", () => {
    let result = 0;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Perform the calculation based on the chosen operator
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 === 0 || number1===0) {
                result = "nah bro";
                break;
            }  // If the denominator is zero, display an error message instead of a result
            result = number1 / number2;
            break;
            case "%":
                result = number1 % number2;
                break;

        default:
            result = "Error";
            break;
    }
    // Display the result when the equals button is clicked
display.textContent = result;
console.log("Result:", result);
})




dot.addEventListener("click",()=>
{
    
})
clear.addEventListener("click", () => {
display.textContent = "0";
num1 = "";
num2 = "";
operator = "";
});




//then i gotta set up the buttons and listen for clicks 
// nah, i gotta do some variables to store the first "set" yk like if i write down [1,2,3,4] it stores that in some kind of variable and then we proced with the new variable. I think i can use an array for that. myb like a loop for that 
