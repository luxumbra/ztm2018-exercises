var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('root');
var gradient = "";

function background(color1, color2) {
  gradient = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  return gradient;
}

function setGradient() {
  body.style.background = background(color1, color2);

  css.textContent =
    'Add this to your CSS "background: ' + background(color1, color2) + ";";
};

body.style.background = background(color1, color2);
css.textContent = 'Add this to your CSS "background: ' + background(color1, color2) + ";";

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);