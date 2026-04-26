let Display = document.getElementById('display');

function clickToDisplay(input){
    Display.value += input;
}

function clearInput(){
    Display.value = "";
}

function clickToCalculate(){
    try{
         Display.value = eval(Display.value);
    }

    catch{
        Display.value = 'Error';
    }
   
}

