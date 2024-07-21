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
            Math.round(result = number1 + number2);
            break;
        case "-":
            Math.round( result = number1 - number2);
            break;
        case "*":
            Math.round(result = number1 * number2);
            break;
        case "/":
            if (number2 === 0) {
                result = "nah bro";
                break;
            } 
            Math.round( result = number1 / number2);
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


backspace.addEventListener("click", del);
function del() {
    if (num2) {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
        num2 = display.textContent;
    } else if (operator) {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
        operator = display.textContent;
    } else if (num1) {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
        num1 = display.textContent;
    }
}

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




