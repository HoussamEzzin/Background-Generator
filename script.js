//Global variables that we will need
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.getElementById("generate");

//Initializing the current background
color1.value="#ff0000";
color2.value="#ffff00";
body.style.background = "linear-gradient(to right, red, yellow)";
btn.style.background = "linear-gradient(to right, red, yellow)";
css.textContent = body.style.background + ";";



//!Do Not Repeat Yourself
//function that set the background of our choice 
function setGradient(){
    body.style.background = 
        "linear-gradient(to right, "
        +color1.value 
        + ", "
        + color2.value
        + ")";
    btn.style.background = 
        "linear-gradient(to right, "
        +color1.value 
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";";
}

//function that generate a random color (stackoverflow)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) { // 6 is the length of the string letters
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//set the random background
function setRandomGradient(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    body.style.background = 
        "linear-gradient(to right, "
        +color1.value
        + ", "
        +color2.value
        + ")";
    btn.style.background = 
        "linear-gradient(to right, "
        +color1.value
        + ", "
        +color2.value
        + ")";
        css.textContent = body.style.background + ";";
}

//Events listeners to update the background
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomGradient);

