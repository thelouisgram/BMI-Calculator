// Variables

const inputWeight = document.querySelector('#input-weight')
const inputHeight = document.querySelector('#input-height')
const calcButton = document.querySelector('#calc')
const container = document.querySelector('.container')
const fillValue = document.querySelector('.fill-value')
const form = document.querySelector('.form')
const resultArea = document.querySelector('.resultArea')
const bmiResult = document.querySelector('.bmiResult');
const result = document.querySelector('.result');
const counsel = document.querySelector('.counsel');


// Event Listeners
calcButton.addEventListener('click', function(){
    
    //Retrieving data from Form
    let weight = `${inputWeight.value}`;
    let height = `${inputHeight.value}`;

    // Removing Kg and m
    weight = weight.replace(/[^\d.-]/g, '');
    height = height.replace(/[^\d.-]/g, '');

    //bmi formula
    let bmi = weight / (height * height);

    //Round to 1 decimal point
    bmi = Math.round(bmi * 10) / 10
    
    //Print Result
    bmiResult.innerText = bmi + "kg/m2";
   
    //Styling Error
    result.style.color = 'red'


    //Interpreting Results & Conditions
    if (bmi < 18.5){
        result.innerText = "BMI falls within the Underweight range."
        counsel.innerText = "Consume High-protein and whole-grain carbohydrate snacks can help a person gain weight. Examples include peanut butter crackers, protein bars, trail mix, pita chips and hummus, or a handful of almonds. Eating several small meals a day. Sometimes a person may be underweight because they cannot tolerate eating large meals."
    } else if (bmi < 25 && bmi > 18.5){
        result.innerText = "BMI falls within the Healthy weight range."
        counsel.innerText = "Achieving and maintaining a healthy weight includes healthy eating, physical activity, optimal sleep, and stress reduction. Several other factors may also affect weight gain. Healthy eating features a variety of healthy foods."
        result.style.color = 'green'
    } else if (bmi < 30 && bmi >25){
        result.innerText = "BMI falls within the Overweight range."
        counsel.innerText = "The best way to treat Overweight is to eat a healthy, reduced-calorie diet and exercise regularly. To do this you should: eat a balanced, calorie-controlled diet as recommended by your GP or weight loss management health professional (such as a dietitian) join a local weight loss group."
    } else if (bmi < 35 && bmi >30){
        result.innerText = "BMI falls within the Obesity range."
        counsel.innerText = "The best way to treat obesity is to eat a healthy, reduced-calorie diet and exercise regularly. To do this you should: eat a balanced, calorie-controlled diet as recommended by your GP or weight loss management health professional (such as a dietitian) join a local weight loss group."
    } else if (bmi < 40 && bmi >35){
        result.innerText = "BMI falls within the Morbid Obesity range."
        counsel.innerText ="The best way to treat obesity is to eat a healthy, reduced-calorie diet and exercise regularly. To do this you should: eat a balanced, calorie-controlled diet as recommended by your GP or weight loss management health professional (such as a dietitian) join a local weight loss group."
    } else if (bmi > 40){
        result.innerText = "BMI falls within the Severe Obesity range."
        counsel.innerText = "Please visit your nearest clinic. Also consider one of the following: Changing your habits, Weight-management programs, Weight-loss medicines, Weight-loss devices, Bariatric surgery, Special diets."
    }

    // Complete form security & Print result condition
    if (inputHeight.value === "" || inputWeight.value === "") {
        fillValue.innerText = "Fill all values to proceed"
        fillValue.style.color = "red"
        fillValue.style.fontStyle = "italic"
        fillValue.style.marginBottom = "20px"
        resultArea.style.display = "none"
    } else {
        resultArea.style.display = "flex"
        
    }

})

