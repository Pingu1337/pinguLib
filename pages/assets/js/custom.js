
var btn = document.getElementById("custom-btn");
var btnHover = document.getElementById("custom-btn:hover");

// Vars for printing the code

var padTB = '8px';
var padLR = '15px';
var borderR = '25px';
var bgCol = '#e9a0a0';
var fgCol = '#ffffff';
var bgHov = '#d89292';
var fgHov = '#ffd0d0';
var transition = true;

//Height
var Hslider = document.getElementById("height-slider");
var Houtput = document.getElementById("height-slider-value");
Houtput.innerHTML = Hslider.value;


Hslider.oninput = function() {
  Houtput.innerHTML = this.value;
  btn.style.paddingTop = this.value + "px";
  btn.style.paddingBottom = this.value + "px";
  padTB = this.value + "px";

  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #e9a0a0 0%, #e9a0a0 ' + value + '%, #fce0e0 ' + value + '%, #fce0e0 100%)'
}

//Width
var Wslider = document.getElementById("width-slider");
var Woutput = document.getElementById("width-slider-value");
Woutput.innerHTML = Wslider.value;

Wslider.oninput = function() {
  Woutput.innerHTML = this.value;
  btn.style.paddingLeft = this.value + "px";
  btn.style.paddingRight = this.value + "px";
  padLR = this.value + "px";

  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #e9a0a0 0%, #e9a0a0 ' + value + '%, #fce0e0 ' + value + '%, #fce0e0 100%)'
}


//Border Radius
var slider = document.getElementById("border-radius");
var output = document.getElementById("border-radius-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  btn.style.borderRadius = this.value + "px";
  borderR = this.value + "px";

  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #e9a0a0 0%, #e9a0a0 ' + value + '%, #fce0e0 ' + value + '%, #fce0e0 100%)'
}

//Color Picker
var colourPicker = document.getElementById("colorpicker");
var colorContainer = document.getElementById("color-container")
var ColorOutput = document.getElementById("color-picker-value");
colorContainer.style.setProperty("--btnbg", colourPicker.value);
ColorOutput.innerHTML =colourPicker.value
colourPicker.oninput = function(){
  ColorOutput.innerHTML = this.value;
  colorContainer.style.setProperty("--btnbg", this.value);
  btn.style.setProperty("--btnbg", this.value);
  bgCol = this.value;
}

//Color Picker hover
var HcolourPicker = document.getElementById("colorpicker-hover");
var HcolorContainer = document.getElementById("color-container-hover")
var HColorOutput = document.getElementById("colorpicker-hover-value");
HcolorContainer.style.setProperty("--hovbg", colourPicker.value);
HColorOutput.innerHTML = HcolourPicker.value
HcolourPicker.oninput = function(){
  HColorOutput.innerHTML = this.value;
  HcolorContainer.style.setProperty("--hovbg", this.value);
  btn.style.setProperty("--hovbg", this.value);
  bgHov = this.value;
}
//Color Picker FG
var fgcolourPicker = document.getElementById("fg-colorpicker");
var fgcolorContainer = document.getElementById("fg-color-container")
var fgColorOutput = document.getElementById("fg-colorpicker-value");
fgcolorContainer.style.setProperty("--btnfg", fgcolourPicker.value);
fgColorOutput.innerHTML = fgcolourPicker.value
fgcolourPicker.oninput = function(){
  fgColorOutput.innerHTML = this.value;
  fgcolorContainer.style.setProperty("--btnfg", this.value);
  btn.style.setProperty("--btnfg", this.value);
  fgCol = this.value;
}
//Color Picker FG hover
var HfgcolourPicker = document.getElementById("fg-colorpicker-hover");
var HfgcolorContainer = document.getElementById("fg-color-container-hover")
var HfgColorOutput = document.getElementById("fg-colorpicker-value-hover");
HfgcolorContainer.style.setProperty("--hovfg", HfgcolourPicker.value);
HfgColorOutput.innerHTML = HfgcolourPicker.value
HfgcolourPicker.oninput = function(){
  HfgColorOutput.innerHTML = this.value;
  HfgcolorContainer.style.setProperty("--hovfg", this.value);
  btn.style.setProperty("--hovfg", this.value);
  fgHov = this.value;
}


// sldier gradient
document.querySelectorAll('.slider').forEach(s => {
  var value = (s.value-s.min)/(s.max-s.min)*100
  s.style.background = 'linear-gradient(to right, #e9a0a0 0%, #e9a0a0 ' + value + '%, #fce0e0 ' + value + '%, #fce0e0 100%)'
});

// trancsition checkbox
document.getElementById('transitioncheck').addEventListener('change', function() {
  if(this.checked) {
    btn.classList.add('transition');
    transition = true;
  } else {
    btn.classList.remove('transition');
    transition = false;
  }
});

var modal = document.getElementById("CodeModal");
var modalText = document.getElementById("modalText");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

async function GetCode(){
  
  if(transition){
    var transitionCss = "transition: color .3s, background-color .3s;"
  } else{
    var transitionCss = ""
  }

var btnCss = `
.pingu-custom-btn{ 
  font-family: Helvetica, sans-serif; 
  font-size: 1.05rem;
  line-height: 1.6; 
  padding: ${padTB} ${padLR}; 
  border-radius: ${borderR}; 
  border: 3px solid rgba(255, 255, 255, 0); 
  color: ${fgCol};
  background:${bgCol}; 
  cursor: pointer; 
  -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;
  ${transitionCss}
}
.pingu-custom-btn:active{
  border-color: rgba(255, 255, 255, 0.25);
}
.pingu-custom-btn:focus{
  box-shadow:  0 0 0 2px rgba(255, 255, 255, 0.65);
}
.pingu-custom-btn:hover{
  color: ${fgHov};
  background:${bgHov}; 
}`

modal.style.display = "block";
modal.innerHTML = `<div class="modal-content">
<span class="close">&times;</span>
<pre><code class="language-css">${btnCss}</code></pre>
</div>`;

  console.log(btnCss);
}