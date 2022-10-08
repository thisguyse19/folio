function lightmode() {
  var el1 = document.getElementById("mainbody");
  var html = document.getElementById("html")
  var buy = document.getElementById("buy1")
  if (el1.classList.contains("offwhite")) { 
  el1.style.transition = "250ms";
  html.style.transition = "250ms";
  buy1.style.transition = "250ms";
  el1.classList.remove("offwhite","bgdark");
  el1.classList.add("greyish","bglight");
  html.classList.remove("bgdark");
  html.classList.add("bglight");
  buy.classList.remove("offwhite");
  buy.classList.add("greyish");}
  else {
  el1.classList.remove("greyish","bglight");
  el1.classList.add("offwhite","bgdark");
  html.classList.remove("bglight");
  html.classList.add("bgdark");
  buy.classList.remove("greyish");
  buy.classList.add("offwhite");}
}

function goMain() {
  var sweat = document.getElementById("buy1").value;
  if (sweat == "sweat sweat") {
    window.location = ("real.html");
  }
  else {
    document.getElementById('nth').innerHTML = "Wrong codeword! Try again.";
  }
}