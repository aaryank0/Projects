function randinc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randexc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function generate(){
    var min = document.getElementById("num1").value;
    var max = document.getElementById("num2").value;
    var output = document.getElementById("outputBox");
    var inc = document.getElementById("inclusive");
  
    if (inc.checked){
        output.value = randinc(min, max);
    }
    else{
        output.value =  randexc(min, max);
    }
}
