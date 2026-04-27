let Display = document.getElementById('display');

function clickToDisplay(input){
    Display.value += input;
}

function clearInput(){
    Display.value = "";
}

// function clearOneNumber(){
//     Display.value -= Display.value;
// }

function Square(){ 
    Display.value = eval(Math.pow(Display.value,2));
}

function clickToCalculate(){
    try{
         Display.value = eval(Display.value);
    }

    catch{
        Display.value = 'Error';
    }
   
}

