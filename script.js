var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("generate");

color1.value="#ff0000";
color2.value="#ffff00";
body.style.background = "linear-gradient(to right, red, yellow)";
btn.style.background = "linear-gradient(to right, red, yellow)";
css.textContent = body.style.background + ";";



//Do Not Repeat Yourself
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
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


btn.addEventListener("click", setRandomGradient);

