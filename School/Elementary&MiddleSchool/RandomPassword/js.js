function gen() {
    var symbol = document.getElementById("symbolsCB");
    var number = document.getElementById("numbersCB");
    var upper = document.getElementById("uppersCB");
    var length = document.getElementById("myRange");
    var op = document.getElementById("outputBox");
    op.value = '';
    var list=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (symbol.checked == true) {
        var symbols = ["?", "!", "#", "$", "%", "*", "(", ")", "[", "]", "{", "}"];
        symbols.push.apply(list, symbols);
    }
    if (number.checked == true) {
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        numbers.push.apply(list, numbers);
    }
    if (upper.checked == true) {
        var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        uppers.push.apply(list, uppers);
    }
    for (var i = 0; i < length.value; i++) {
        let char = list[Math.floor(Math.random() * list.length)];
        op.value = op.value + char;
    }
}

function changeLength(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    var strBox = document.getElementById("strengthBox");
    if (slider.value < 10){
        strBox.value = `Weak password (${slider.value} chars)`;
        document.body.style.background = "#bf0a33";
    }
    if (slider.value >= 10){
        strBox.value = `Strong password (${slider.value} chars)`;
        document.body.style.background = "#20b422";
    }    
}
function addToHistory(){
    var pw = document.getElementById("outputBox").value;
    var currentBgColor = document.body.style.backgroundColor;
    var strength = document.getElementById("strengthBox").value;
    $(".history").append("<div class='historyItem' style='background:"+currentBgColor+"'><p>"+pw+"</p><p id='historyStrength'>"+strength+"</p></div>");
}

document.getElementById("myRange").onchange = function(){
    gen();
    addToHistory();
};
window.onload = function() {
    gen();
    addToHistory();
    changeLength();
};
