document.addEventListener('DOMContentLoaded', ()=>{

    console.log("DOM ready!!!");

    //get reference to input & add event listener
    let billInput = document.querySelector('.bill_input');
    let bill = 0; 
    billInput.addEventListener('input', ()=>{
        bill = parseFloat(billInput.value);
    });

    //get reference to the buttons& add event listeners
    let tipButtons = document.getElementsByClassName('tip-button');
    let tipPercentage = 0;
    for(let tipButton of tipButtons){
        tipButton.addEventListener('click', ()=>{
            tipPercentage = parseInt(tipButton.innerHTML);
        });
    }

    //get reference to the custom input & add event listener
    let customTip = document.querySelector('.custom');
    customTip.addEventListener('input', ()=>{
        tipPercentage = parseFloat(customTip.value);
    });

    //get reference to the numberOfPeople input & add event listener
    let numOfPeople = 0;
    let numberOfPeopleInput = document.querySelector('.numOfPeople_input');
    numberOfPeopleInput.addEventListener('input', ()=>{
        numOfPeople = parseInt(numberOfPeopleInput.value);
        if(!isNaN(numOfPeople) && numOfPeople != 0 && !isNaN(bill) && !isNaN(tipPercentage)){
            //calculate and display
            calculateTip();
        }
    });

    // //get reference to the reset button & add event listener
    // let resetButton = document.querySelector('.reset');
    // resetButton.addEventListener('click', ()=>{
    //     //reset everyhing
    // });

    //get reference to tip and total 
    let tipDisplay = document.querySelector('.tipAmount');
    let totDisplay = document.querySelector('.totalAmount');
    function calculateTip(){
        let tipAmount = bill * tipPercentage / 100;
        let tipPerPerson = tipAmount / numOfPeople;
        let totaAmount = bill + tipAmount;
        let totalPerPerson = totaAmount / numOfPeople;
        
        //display
        tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
        totDisplay.innerHTML = `$${totalPerPerson.toFixed(2)}`;
    }
});