function decimalToRoman(num){
    var char = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},i;
    var roman = '';
    for ( i in char ) {
        while ( num >= char[i] ) {
            roman += i;
            num -= char[i];
        }
    } return roman;
}

function romanToDecimal(str){
    var num = char_to_int(str.charAt(0));
    var pre, curr;
    for(var i = 1; i < str.length; i++){
        curr = char_to_int(str.charAt(i));
        pre = char_to_int(str.charAt(i-1));
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    } return num;
}

function show(){
    var option = $("#selection option:selected").val();
    var output = document.getElementById("outputBox");
    if (option == "romanToNum"){  $(".romanToNum").css("display", "block"); $(".numToRoman").css("display", "none"); output.value = ""; }
    if (option == "numToRoman"){ $(".numToRoman").css("display", "block"); $(".romanToNum").css("display", "none"); output.value = ""; }
    $("#outputBox").css("display", "block");
    $("button").css("display", "block");
}

function char_to_int(c){ 
    switch (c){
        case 'I': case 'i': return 1; 
        case 'V': case 'v': return 5; 
        case 'X': case 'x': return 10;
        case 'L': case 'l': return 50; 
        case 'C': case 'c': return 100;
        case 'D': case 'd': return 500;
        case 'M': case 'm': return 1000;
        
    }
}

function charCount(r,n){for(var t=0,c=0;c<r.length;c++){r.charAt(c)==n&&(t+=1);return t;}}
function clear(){document.location.reload();}
