document.addEventListener('DOMContentLoaded', ()=>{

    console.log("DOM ready!!!");

    //get reference to input & add event listener
    let billInput = document.querySelector('.bill_input');
    let bill = 0; 
    billInput.addEventListener('input', ()=>{
        bill = parseFloat(billInput.value);
        bill = isNaN(bill) ? 0 : bill;
        calculateTip();
    });

    //get reference to the buttons& add event listeners
    let tipButtons = document.getElementsByClassName('tip-button');
    let tipPercentage = 0;
    for(let tipButton of tipButtons){
        tipButton.addEventListener('click', ()=>{
            tipPercentage = parseInt(tipButton.innerHTML);
            showActiveTipButton(tipButton);
            calculateTip();
        });
    }

    function resetButtons(){
        for(let btn of tipButtons){
            btn.classList.remove('active');
        }
    }

    function showActiveTipButton(activeBtn){
        console.log('btn activated');
        resetButtons();
        activeBtn.classList.add('active');
    }

    //get reference to the custom input & add event listener
    let customTip = document.querySelector('.custom');
    customTip.addEventListener('input', ()=>{
        tipPercentage = parseFloat(customTip.value);
        calculateTip();
        resetButtons();
    });

    //get reference to the numberOfPeople input & add event listener
    let numOfPeople = 1;
    let numberOfPeopleInput = document.querySelector('.numOfPeople_input');
    numberOfPeopleInput.addEventListener('input', ()=>{
        numOfPeople = parseInt(numberOfPeopleInput.value);
        numOfPeople = isNaN(numOfPeople) ? 1 : numOfPeople;
        let errorLabel = document.querySelector('.no-error-text');
        if(numOfPeople > 0){
            //calculate and display
            calculateTip();
            errorLabel.classList.remove('error-text');
            numberOfPeopleInput.classList.remove('error-input-boader');
        }
        else{
            errorLabel.classList.add('error-text');
            numberOfPeopleInput.classList.add('error-input-boader');
        }
    });

    //get reference to the reset button & add event listener
    let resetButton = document.querySelector('.reset');
    resetButton.disabled = true;
    resetButton.addEventListener('click', ()=>{
        //reset values
        bill = 0;
        numOfPeople = 1;
        billInput.value = "0";
        numberOfPeopleInput.value = "1";
        customTip.value = "";
        resetButtons();
        calculateTip();
        resetButton.disabled = true;
    });

    //get reference to tip and total 
    let tipDisplay = document.querySelector('.tipAmount');
    let totDisplay = document.querySelector('.totalAmount');

    function calculateTip(){

        tipPercentage = isNaN(tipPercentage) ? 0 : tipPercentage;
        let tipAmount = bill * tipPercentage / 100;
        let tipPerPerson = tipAmount / numOfPeople;
        let totaAmount = bill + tipAmount;
        let totalPerPerson = totaAmount / numOfPeople;
        
        //display
        tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
        totDisplay.innerHTML = `$${totalPerPerson.toFixed(2)}`;

        //enable reset button
        resetButton.disabled = false;
    }
});