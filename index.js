
const wt = prompt("Enter your weight; ");
const ht = prompt("Enter your height; ");
// function bmi(wt, ht) {
// BMI = wt / ht**2;
// return BMI
// };

function bmi(){
    BMI = wt/(ht**2);

    document.getElementById("weight").innerHTML = (wt);
    document.getElementById("height").innerHTML = (ht);
    document.getElementById("demo").innerHTML = (BMI);
    let message;
    if (BMI <= 18.5) {
        message = "You are underweight."
    } else if (BMI > 18.5 && BMI < 25){
    message = "You have normal weight"
    } else {
        message = "You are overweight."
    };

    document.getElementById("demo1").innerHTML = (message);
    }

bmi();

//second question
function movie() {
    const name = prompt("Enter your name; ");
    const age = prompt("Enter your age; ");
    const accompanied = prompt("Are you with adult - Yes or No? ");

    let pass;

    if (age >= 13 || accompanied == "yes"){
        pass = "OK, You can GO IN!"
    }else{
        pass = "Sorry, You are NOT ALLOWED!!!"
    }

    document.getElementById("name").innerHTML = (name);
    document.getElementById("age").innerHTML = (age);
    document.getElementById("accompanied").innerHTML = (accompanied);
    document.getElementById("pass").innerHTML = (pass);
};
movie();
