///////////////////////////////////////////////////////////////////////////////////////////////////
// PROBLEMS TO WORK ON
// cant do negatives, make conditional statment not allow more than one period(.), and not start with operator

///////////////////////////////////////////////////////////////////////////////////////////////////

let topDisplay = document.getElementById('outcome-top'); // top display for input
let botDisplay = document.getElementById('outcome-bot'); // bot display for display only
let numbers = ['0','1','2','3','4','5','6','7','8','9','.']; 
let operator = ['+','-','*','/','='];
let operand = undefined;
const values = {
    valueOne: undefined,
    valueTwo: undefined,
    // valuesAdded: undefined,
};



function getNumbersAndOperators (btn){
    const button = btn; // innerText of button 0,1,2,3,4,5,6,7,8,9,.,=,/,*,-,+ //
    let value = document.getElementById('outcome-top').innerHTML = topDisplay.innerText + button; // add numbers to display

    if (operator.includes(button) && !operator[4].includes(button)){ // Checking each time BUTTON IS PUSHED
        operand = button;
        values.valueOne = value.slice(0, -1); // VALUE w/o operator
        botDisplay.innerText = value; // shows the first value on second display with the OPERATOR
        topDisplay.innerText = ""; // text of first display becomes blank
    }
   
    if(operator[4].includes(button)){  // if statement condition if = button is pushed , GOOD
        let secondValue = document.getElementById('outcome-top').innerHTML = topDisplay.innerText + button;
        values.valueTwo = secondValue.slice(0,-2);
        botDisplay.innerHTML = '';
            // console.log('equals')

        operateValuesRecieved(+values.valueOne, operand, +values.valueTwo);
    }
};


function operateValuesRecieved (a , operator , b){
    if(operator === '+'){
        let eval = topDisplay.innerText = add(a, b);
        values.valueOne = undefined; // remove current value of valueOne
        values.valueTwo = undefined; // remove current value of valueTwo
        operand = undefined;         // remove current OPERAND value
        values.valueOne = eval;      // make valueOne the evaluated values
        botDisplay.innerText = '';   // make bottomDisplay empty
        
    } else if (operator === '-'){
        let eval = topDisplay.innerText = subtract(a, b);
        values.valueOne = undefined;
        values.valueTwo = undefined;
        operand = undefined;
        values.valueOne = eval;
        botDisplay.innerText = '';
        
    } else if (operator === '*'){
        let eval = topDisplay.innerText = multiply(a, b);
        values.valueOne = undefined;
        values.valueTwo = undefined;
        operand = undefined;
        values.valueOne = eval;
        botDisplay.innerText = '';
        
    } else if (operator === '/'){
        let eval = topDisplay.innerText = divide(a, b);
        values.valueOne = undefined;
        values.valueTwo = undefined;
        operand = undefined;
        values.valueOne = eval;
        botDisplay.innerText = '';
        
    };
    
};



                        ////////// OPERATOR FUNCTIONS ///////////
function add(a,b){return a + b;};
function subtract(a,b){return a - b;};
function multiply(a,b){return a * b;};
function divide(a,b){return a / b;};




                        /////////   BUTTONS ID EVENTlISTERNER   ///////////
const buttonsEvent = document.querySelectorAll('.btn');
buttonsEvent.forEach(button => button.addEventListener('click', function (e){
    const button = e.target.innerHTML;
    getNumbersAndOperators(button);
}));
                        ////////  OPERATORS AND ( = ) EVENTlISTERNER   //////////
const operatorsEvent = document.querySelectorAll('.op');
operatorsEvent.forEach(button => button.addEventListener('click', function (e){
    const oper = e.target.innerHTML; // from e.target.innerHTML
    getNumbersAndOperators(oper);
}));




                        /////////   CLEAR & DELETE EVENTlISTERNER    ///////////
const clearAndDeleteEvent = document.querySelectorAll('.clear-delete');
clearAndDeleteEvent.forEach(button => button.addEventListener('click', function (e){
    const buttonId = e.target.id; // targets the id of the button 
    const clearAll = document.getElementById('outcome'); // top and bot display
    const deleteTop = document.getElementById('outcome-top'); // top display 
        // CLEAR ALL //
    if(buttonId == 'clear' && !clearAll.innerHTML == "" ){ // if clear button is hit && innerText is NOT empty
        document.getElementById('outcome-top').innerText = '';
        document.getElementById('outcome-bot').innerText = '';
        values.valueOne = undefined;
        values.valueTwo = undefined;
        // values.valuesAdded = undefined;
    }
        // DELETE LAST //
    if(buttonId == 'delete' && !deleteTop == ''){
        document.getElementById('outcome-top').innerText = deleteTop.innerText.slice(0, -1);
    };
}));