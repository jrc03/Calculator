//lets do the pseudo! so basically first ig i gotta save whats shown in display. but first i need to print the numbers yk, so i gotta get that working, but idk how ngl, well the user is not supossed to manipulate the display perse, so when someone clicks on "1 " for example i gotta print that

//rn im getting some errors printing the numbers to the display, but it crossed my mind that i can use some arrays and "join" to capture the numbers the user inputs. ngl i think that could work imagine like [1,2,3,4] ig that join or another function can do that array this [1234] (IDEA)

const display= document.querySelector(".display");
const equals= document.querySelector(".equal");
const keypad= document.querySelectorAll(".keypad");
const numbers= document.querySelectorAll(".number");
const clear= document.querySelector(".clear");
const dot= document.querySelector(".dot");
const operators= document.querySelectorAll(".operator");
const backspace= document.querySelector(".backspace");


let num1 = "";
let operator = "";
let num2 = "";
let result = 0;

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
            }else if(result=="Error"
            ){
                result=0;
                display.textContent = value;


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
        if (num2) {
            calculateResult();
        }
        operator = op.textContent;
        console.log("Clicked operator:", operator);
        display.textContent = operator; 
    });
});

function calculateResult() {
    
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
            if (number2 === 0) {
                result = "nah bro";
                break;
            }  // En caso de división por cero, devolvemos un mensaje de error.
            result = number1 / number2;
            break;
        default:
            result = "Error";
            break;
    }

    

    display.textContent = result;
    console.log("Result:", result);

    // After calculation, set result as num1 and clear operator and num2
    num1 = result.toString();
    operator = "";
    num2 = "";
}
//mira tu va pone que cuando se resuelva la operacion, el resultado se convierta en "num1" etnonces si el tiguere hace dique "1+2" 3 sera num1 y num2 se vacia pa que se pueda seguir bregando. eso e parecido a llo que hiciste en lo ejercicio de javascript o creo que lo del arrayCardio qsy.s




equals.addEventListener("click", calculateResult);
dot.addEventListener("click", () => {
    // Check if the display already contains a decimal point
    if (operator) {
        // If operator is present, work with num2
        if (!num2.includes(".")) {
            num2 += ".";
            display.textContent += ".";
        }
    } else {
        // If operator is not present, work with num1
        if (!num1.includes(".")) {
            num1 += ".";
            display.textContent += ".";
        }
    }
});

clear.addEventListener("click", () => {
display.textContent = "0";
num1 = "";
num2 = "";
operator = "";
});




//then i gotta set up the buttons and listen for clicks 
// nah, i gotta do some variables to store the first "set" yk like if i write down [1,2,3,4] it stores that in some kind of variable and then we proced with the new variable. I think i can use an array for that. myb like a loop for that 
