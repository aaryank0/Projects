function convert(){
    var option = $("#selection option:selected").val();
    var output = $("#outputBox");
  
    if (option == "numToRoman"){
        let val = $("#ntrInput").val();
        output.val(
            decimalToRoman(val)
        );
    }
    if (option == "romanToNum"){
        let val = $("#rtnInput").val();
        output.val(
            romanToDecimal(val)
        );
      
        if (charCount(val, "I") > 3 || (charCount(val, "i") > 3)){ alert("Cannot use \"I\" more than three times in roman numeral"); }
        if (charCount(val, "V") > 1 || (charCount(val, "v") > 1)){ alert("Cannot use \"V\" more than once in roman numeral");  }
        if (charCount(val, "X") > 3 || (charCount(val, "x") > 3)){ alert("Cannot use \"X\" more than three times in roman numeral"); }
        if (charCount(val, "L") > 1 || (charCount(val, "l") > 1)){ alert("Cannot use \"L\" more than once in roman numeral"); }
        if (charCount(val, "C") > 3 || (charCount(val, "c") > 1)){ alert("Cannot use \"C\" more than three times in roman numeral"); }
        if (charCount(val, "D") > 1 || (charCount(val, "d") > 1)){ alert("Cannot use \"D\" more than once in roman numeral"); }
        if (!val.includes("I") && !val.includes("i") && !val.includes("V") && !val.includes("v") && !val.includes("X") && !val.includes("x") && !val.includes("L") && !val.includes("l") && !val.includes("C") && !val.includes("c") && !val.includes("D") && !val.includes("d") && !val.includes("M") && !val.includes("m")){
            alert("Invalid Characters");
            clear();
        }
    }
}
