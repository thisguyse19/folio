function lightmode() {
  var el1 = document.getElementById("mainbody");
  var html1 = document.getElementById("html");
  var buy1 = document.getElementById("subbody");
  if (el1.classList.contains("offwhite")) { 
  el1.style.transition = "250ms";
  html1.style.transition = "250ms";
  buy1.style.transition = "250ms";
  el1.classList.remove("offwhite","bgdark");
  el1.classList.add("greyish","bglight");
  html1.classList.remove("bgdark");
  html1.classList.add("bglight");
  buy1.classList.remove("offwhite","bgdark");
  buy1.classList.add("greyish","bglight");}
  else {
  el1.classList.remove("greyish","bglight");
  el1.classList.add("offwhite","bgdark");
  html1.classList.remove("bglight");
  html1.classList.add("bgdark");
  buy1.classList.remove("offwhite","bgdark");
  buy1.classList.add("greyish","bglight");
}}

function superToggle (elementvar,class0,class1) {
  var ele = elementvar
  ele.classList.toggle(class0);
  ele.classList.toggle(class1);
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


function addItemSubmit() {
  
  const itemdisplay = document.getElementById("item-display-block");
  let itemhtml = `<div id='item-display-indiv-${varno}' onclick='openRetrieveModal(${varno})' class='item-display-indiv'>
  <div id="item-desc" class="item-name-vert">
    <p class="disp-name" id='show-itemName-${varno}'></p>
    <p class="disp-name-under" id="show-itemNotes-${varno}"></p>
  </div>
    <p class="disp-price" id='show-itemPrice-${varno}'></p>
  </div>`;

  var itemName = document.getElementsByClassName("item-name")[0].value;
  var itemPrice = document.getElementsByClassName("item-price")[0];
  if (isNaN(parseFloat(itemPrice.value))) {
    document.getElementById("item-price").classList.add("body2txt-neg");
    document.getElementById("item-price").innerHTML = "Please enter a valid price.";
    return;
  }
  document.getElementById("item-price").classList.remove("body2txt-neg");
  document.getElementById("item-price").innerHTML = "Price";
  var itemNotes = document.getElementsByClassName("item-notes")[0];
  if (itemNotes.value.length === 0) {
    document.getElementById("item-notes").classList.add("body2txt-neg");
    document.getElementById("item-notes").innerHTML = "Please enter a category, or notes.";
    return;
  }
  document.getElementById("item-notes").classList.remove("body2txt-neg");
  document.getElementById("item-notes").innerHTML = "Category / notes";
  itemdisplay.insertAdjacentHTML("beforeEnd", itemhtml);
  document.getElementById(`show-itemName-${varno}`).innerHTML = itemName;
  document.getElementById(`show-itemPrice-${varno}`).innerHTML = "$ " + itemPrice.value;
  document.getElementById(`show-itemNotes-${varno}`).innerHTML = itemNotes.value;
  varno += 1;
  totalpx += parseFloat(itemPrice.value);
  document.getElementById(`totalPrice`).innerHTML = "$ " + totalpx;
  document.getElementById('header-title').innerHTML = "&#128722;  Shopping list";
  // document.getElementsByClassName("item-name")[0].innerHTML = " "
  // itemPrice.innerHTML = " "
  // itemNotes.innerHTML = " "
  superToggle(modal,"is-show-none","is-show-none-trans");
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

window.onclick = function(event) {
  if (event.target == modal) {
    superToggle(modal,"is-show-none","is-show-none-trans");
  }
}



// Modal for new item
var modal = document.getElementById("add-item-modal");
let varno = 1
let totalpx = 0

var openbtn = document.getElementById("add-item");

var closebtn = document.getElementsByClassName("closebtn")[0];

var addbtn = document.getElementsByClassName("add-cfm")[0];

openbtn.onclick = function() {
  superToggle(modal,"is-show-none","is-show-none-trans");
}

closebtn.onclick = function() {
  superToggle(modal,"is-show-none","is-show-none-trans");

}

// Modal for existing item
var retrieveModal = document.getElementById("retrieve-item-modal");

var closeRetrieveBtn = document.getElementsByClassName("closeRbtn")[0];


function openRetrieveModal(divno) {
  superToggle(retrieveModal,"is-show-none","is-show-none-trans");
  document.getElementById(`item-modal-name`).innerHTML = document.getElementById(`show-itemName-`+ divno).innerHTML;
  document.getElementById(`item-modal-notes`).innerHTML = document.getElementById(`show-itemNotes-`+ divno).innerHTML;
  document.getElementById(`item-modal-price`).innerHTML = document.getElementById(`show-itemPrice-`+ divno).innerHTML;
}

closeRetrieveBtn.onclick = function() {
  superToggle(retrieveModal,"is-show-none","is-show-none-trans");
}

window.onclick = function(event) {
  if (event.target == retrieveModal) {
    superToggle(retrieveModal,"is-show-none","is-show-none-trans");
  }
}


// Mini tabbed nav

function switchTnv1(var2) {
  var curActive = document.getElementsByClassName('tnv-button-active')[0];
  var nxtActive = document.getElementById(var2);
  var nxtUnder = document.getElementById("nav-under-" + var2);
  var curUnder = document.getElementById("nav-under-" + curActive.id);

  curActive.classList.remove('tnv-button-active');
  curActive.classList.add('tnv-button-inactive');
  curUnder.style.display = "none";
  nxtActive.classList.remove('tnv-button-inactive');
  nxtUnder.style.display = "flex";
  nxtActive.classList.add('tnv-button-active');
}