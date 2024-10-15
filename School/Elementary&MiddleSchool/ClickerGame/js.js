var num = 0;

window.onload = function () {
    var space = document.getElementById("space");
    space.innerHTML = "Your bakery";
};

var cookie = document.getElementById("cookie");
var incrementNum = 1;

function cookieClick() { 
    num += incrementNum;
  
    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num.toFixed() + " Cookies";
    if (num >= 15){
        document.getElementById("cursor").style.display = "block";
    }
    if (num >= 100){
        document.getElementById("grandma").style.display = "block";
    }
}

function hideIfNecessary() {
    var cursor = document.getElementById("cursor");
    var grandma = document.getElementById("grandma");
    var cmine = document.getElementById("mine");

    if (num < 15) {
        cursor.style.display = "none";  
    }
    if (num >= 15){
        cursor.style.display = "block";
    }
  
    if (num < 100) {
        grandma.style.display = "none";
    }
    if (num >= 100){
        grandma.style.display = "block";
    }
  
    if (num < 500) {
        cmine.style.display = "none";
    }
    if (num >= 500){
        cmine.style.display = "block";
    }
}

var cursors = 0;
function addCursor(){
    cursors += 1;
    var cursor = document.getElementById("cursor");
    incrementNum = incrementNum + 0.1; 
    num = num - 15;
    numbers.innerHTML = num.toFixed() + " Cookies";
    hideIfNecessary();
    document.getElementById("perclick").innerHTML = incrementNum.toFixed(1) + " Cookies per click";
    document.getElementById("cursors").innerHTML = cursors + " cursors";
}  

var grandmas = 0;
function addGrandma(){
    grandmas += 1;
    var grandma = document.getElementById("grandma");
    incrementNum = incrementNum + 1; 
    num = num - 100;
    numbers.innerHTML = num.toFixed() + " Cookies";
    hideIfNecessary();
    document.getElementById("perclick").innerHTML = incrementNum.toFixed(1) + " Cookies per click";
    document.getElementById("grandmas").innerHTML = grandmas + " grandmas";
}

var mines = 0;
function addCmine(){
    mines += 1;
    var cmine = document.getElementById("mine");
    incrementNum = incrementNum + 8; 
    num = num - 500;
    numbers.innerHTML = num.toFixed() + " Cookies";
    hideIfNecessary();
    document.getElementById("perclick").innerHTML = incrementNum.toFixed(1) + " Cookies per click";
    document.getElementById("mines").innerHTML = mines + " cookie mines";
}
