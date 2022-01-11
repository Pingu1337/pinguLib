
var btn = document.getElementById("custom-btn");
var btnHover = document.getElementById("custom-btn:hover");

//Height
var Hslider = document.getElementById("height-slider");
var Houtput = document.getElementById("height-slider-value");
Houtput.innerHTML = Hslider.value;

Hslider.oninput = function() {
  Houtput.innerHTML = this.value;
  btn.style.paddingTop = this.value + "px";
  btn.style.paddingBottom = this.value + "px";
}

//Width
var Wslider = document.getElementById("width-slider");
var Woutput = document.getElementById("width-slider-value");
Woutput.innerHTML = Wslider.value;

Wslider.oninput = function() {
  Woutput.innerHTML = this.value;
  btn.style.paddingLeft = this.value + "px";
  btn.style.paddingRight = this.value + "px";
}


//Border Radius
var slider = document.getElementById("border-radius");
var output = document.getElementById("border-radius-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  btn.style.borderRadius = this.value + "px";
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
}

//transition
var tCheck = document.getElementById("check");

tCheck.oninput = function() {
  if (tCheck.checked == true){
    btn.classList.add('transition')
  }
  if (tCheck.checked == false){
    btn.classList.remove('transition');
  }
}