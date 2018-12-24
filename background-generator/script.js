var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var colorA = document.querySelector(".color1").value;
var colorB = document.querySelector(".color2").value;
var body = document.getElementById('root');
var randomise = document.querySelector('.randomise-color');
var gradient = "";



function background(colorA, colorB) {
  gradient = "linear-gradient(to right, " + colorA + ", " + colorB + ")";
  return gradient;
}

function randomColor() {
  var possibilities = '0123456789ABCDEF';
  colorA = '#';
  colorB = '#';

  for (var i = 0; i < 6; i++) {
    colorA += possibilities[Math.floor(Math.random() * 16)];
    colorB += possibilities[Math.floor(Math.random() * 16)];
  }

  body.style.background = background(colorA, colorB);
  css.textContent = 'Add this to your CSS "background: ' + background(colorA, colorB) + ';';
  console.log(colorA, colorB, body.style.background);

  return colorA, colorB;
}

function setGradient() {
  console.log('Set gradient colours: ', color1.value, color2.value);

  body.style.background = background(color1.value, color2.value);
  console.log('set gradient...');

  css.textContent = 'Add this to your CSS "background: ' + background(color1.value, color2.value) + ";";
};

body.style.background = background(colorA, colorB);
css.textContent =
  'Add this to your CSS "background: ' + background(color1.value, color2.value) + ";";

randomise.addEventListener('click', randomColor);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);