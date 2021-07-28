
function bmiCalculator(){
    var height = parseInt(document.getElementById('inputHeight').value);
    var weight = parseInt(document.getElementById('inputWeight').value);
    var bmi = (weight/height/height)*10000;                 // [weight (kg) / height (cm) / height (cm)] x 10,000
    document.getElementById('output').innerHTML = bmi;

    if (bmi < 18.6) {
        document.getElementById('message').innerHTML = "You are in underweight range! go and eat food 🍔";      
    }

    else if (bmi > 18.6 && bmi < 24.9) {
        document.getElementById('message').innerHTML = "You are in normal range! enjoy food 🍔";
    }

    else if (bmi > 24.9) {
        document.getElementById('message').innerHTML = "You are in overweight range! do exercise  🏋️‍♂️ ";      
            
    }
    
    else{
        document.getElementById('message').innerHTML = "Write data mention above";      

    }
}


document.getElementById('btn').addEventListener("click", bmiCalculator);