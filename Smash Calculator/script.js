function calculateSmash(){
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const calculateButton = document.getElementById('calculateButton');
    
    if (calculateButton.disabled) {
        // The button is already disabled, which means the calculation has been done.
        return;
    }

    calculateButton.disabled = true;


    if(name1 === "" || name2 === ""){
        alert("Please enter both names");
    }else{
        const smashPercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById('result');
        result.innerHTML = `${name1} and ${name2} 's smash Percentage: ${smashPercentage}`;

        if(smashPercentage < 30){
            result.innerHTML += "<br> Not a Great Match Unfortunately! Keep Searching!";
        }else if(smashPercentage >= 30 && smashPercentage < 70){
            result.innerHTML += "<br> There is a potential of a smash";
        }else{
            result.innerHTML += "<br> Y'all will surely be smashing for sure! Not doubt about it";
        }
    }

    
}



function resetInputs(){
    const input2 = document.getElementById('name2');
    const input1 = document.getElementById('name1');

    input1.value = '';
    input2.value = '';

    const clear = document.getElementById('result');
    result.innerHTML = 'Result';

    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = false;
}





