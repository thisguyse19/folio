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
  else if (sweat == "shop") {
    window.location = ("cartlist.html");
  }
  else {
    document.getElementById('nth').innerHTML = "Wrong codeword! Try again.";
  }
}

// Get the modal
var modal = document.getElementById("add-item-modal");
let varno = 1
let totalpx = 0

// Get the button that opens the modal
var openbtn = document.getElementById("add-item");

// Get the <span> element that closes the modal
var closebtn = document.getElementsByClassName("closebtn")[0];

var addbtn = document.getElementsByClassName("add-cfm")[0];

// When the user clicks on the button, open the modal 
openbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closebtn.onclick = function() {
  modal.style.display = "none";

}

function addItemSubmit() {
  
  const itemdisplay = document.getElementById("item-display-block");
  let itemhtml = `<div id='item-display-indiv-${varno}' class='item-display-indiv'>
  <p class="disp-name" id='show-itemName-${varno}'></p>
  <p class="disp-price" id='show-itemPrice-${varno}'></p>
  </div>`;

  var itemName = document.getElementsByClassName("item-name")[0].value;
  var itemPrice = document.getElementsByClassName("item-price")[0].value;
  if (isNaN(parseFloat(itemPrice))) {
    document.getElementById('item-price').innerHTML = "Please enter a valid price.";
    return;
  }
  document.getElementById('item-price').innerHTML = "Price";
  var itemNotes = document.getElementsByClassName("item-notes")[0].value;
  itemdisplay.insertAdjacentHTML("beforeEnd", itemhtml);
  document.getElementById(`show-itemName-${varno}`).innerHTML = itemName;
  document.getElementById(`show-itemPrice-${varno}`).innerHTML = "$ " + itemPrice;
  /*
  document.getElementById(`show-itemNotes-${varno}`).innerHTML = itemNotes;
  */
  varno += 1;
  totalpx += parseFloat(itemPrice);
  document.getElementById(`totalPrice`).innerHTML = "$ " + totalpx;
  document.getElementById('header-title').innerHTML = "&#128722;  Your cart items.";
  modal.style.display = "none";
}

var itemName = document.getElementsByClassName("item-name")[0];
var itemPrice = document.getElementsByClassName("item-price")[0];
var itemNotes = document.getElementsByClassName("item-notes")[0];
itemName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addbtn.click();
  }
});
itemPrice.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addbtn.click();
  }
});
itemNotes.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addbtn.click();
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

