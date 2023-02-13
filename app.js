// Variables

const inputWeight = document.querySelector('#input-weight')
const inputHeight = document.querySelector('#input-height')
const calcButton = document.querySelector('#calc')
const container = document.querySelector('.container')
const filValue = document.querySelector('.fill-value')
const form = document.querySelector('.form')
const discard = document.querySelectorAll('#discard')

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
    bmi = Math.round(bmi * 10) / 10

    //Creating area to print result
    let resultArea = document.createElement('div');
    resultArea.classList.add('resultArea');

    let resultAreaHeading = document.createElement('h2');
    resultAreaHeading.classList.add('resultAreaHeading');
    resultAreaHeading.innerText = "Results:";
    resultAreaHeading.style.textAlign = 'center'
    resultArea.appendChild(resultAreaHeading);

    let bmiHeading = document.createElement('h3');
    bmiHeading.classList.add('bmiHeading');
    bmiHeading.innerText = "BMI:";
    resultArea.appendChild(bmiHeading);

    let bmiResult = document.createElement('p');
    bmiResult.classList.add('bmiResult');
    bmiResult.innerText = bmi + "kg/m2";
    resultArea.appendChild(bmiResult);

    let resultHeading = document.createElement('h3');
    resultHeading.classList.add('resultHeading');
    resultHeading.innerText = "Weight Class:";
    resultArea.appendChild(resultHeading);

    let result = document.createElement('p');
    result.classList.add('result');
    resultArea.appendChild(result);
    result.style.color = 'red'

    let counselHeading = document.createElement('h3');
    counselHeading.classList.add('counselHeading');
    counselHeading.innerText = "Counsel:";
    resultArea.appendChild(counselHeading);

    let counsel = document.createElement('p');
    counsel.classList.add('counsel');
    resultArea.appendChild(counsel);

    let buttonArea = document.createElement('div');
    buttonArea.classList.add('buttonArea');
    resultArea.appendChild(buttonArea)

    let reloadBtn = document.createElement('button')
    reloadBtn.classList.add('reloadBtn')
    reloadBtn.innerText = 'Calculate BMI'
    buttonArea.appendChild(reloadBtn)


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
        filValue.innerText = "Fill all values to proceed"
        filValue.style.color = "red"
        filValue.style.fontStyle = "italic"
        filValue.style.marginBottom = "20px"
    } else {
        container.appendChild(resultArea)
        form.style.display = "none"
    }

    //Reload page to calculate new BMI & discard old results
    reloadBtn.addEventListener('click', function(){
        location.reload()  
    })
})

