function convertWordToAbbr(word){
    if (word == "feet"){
        return " sq. ft.";
    }
    if (word == "yards"){
        return " sq. yd.";
    }
    if (word == "inches"){
        return " sq. in.";
    }
    if (word == "miles"){
        return " sq. mi.";
    }
    if (word == "meters"){
        return " sq. m.";
    }
    if (word == "kilometers"){
        return " sq. km.";
    }
    if (word == "centimeters"){
        return " sq. cm.";
    }
    else{
        return "";
    }
}

function calculate(){
    var shape = $("#shape option:selected").val();
    const unit = $("#unit option:selected").val();
    var output = document.getElementById("outputBox");
  
    if (shape == "circle"){
        var radius = document.getElementById("circleRadius").value;
        output.value = "A ≈ " + (Math.PI * (radius ** 2)).toFixed(2) + convertWordToAbbr(unit);
    }
    if (shape == "square"){
        var squareLW = document.getElementById("squareLengthWidth").value;
        output.value = "A = " + (squareLW * squareLW).toFixed(2) + convertWordToAbbr(unit);
    }
    if (shape == "rectangle"){
        var rectL = document.getElementById("rectangleLength").value;
        var rectW = document.getElementById("rectangleWidth").value;
        if (rectL * rectW % 1 === 0){
            output.value = "A = " + (rectL * rectW) + convertWordToAbbr(unit);
        }
        else{
            output.value = "A ≈ " + (rectL * rectW.toFixed(2)) + convertWordToAbbr(unit);
        }
    }
    if (shape == "triangle"){
        var triB = document.getElementById("triangleBase").value;
        var triH = document.getElementById("triangleHeight").value;
        if (((triB * triH)/2) % 1 === 0){
            output.value = "A = " + (triB * triH)/2 + convertWordToAbbr(unit);
        }       
        else{
            output.value = "A ≈ " + ((triB * triH)/2).toFixed(2) + convertWordToAbbr(unit);
        }
    }
}

function showInput(){
    var shape = $("#shape option:selected").val();
    if (shape == "circle"){
        $("#circle").css("display", "block");
       
        $("#square").css("display", "none");
        $("#rectangle").css("display", "none");
        $("#triangle").css("display", "none");
    }
    if (shape == "square"){
        $("#square").css("display", "block");
      
        $("#circle").css("display", "none");
        $("#rectangle").css("display", "none");
        $("#triangle").css("display", "none");
    }
    if (shape == "rectangle"){
        $("#rectangle").css("display", "block");
      
        $("#circle").css("display", "none");
        $("#square").css("display", "none");
        $("#triangle").css("display", "none");
    }
    if (shape == "triangle"){
        $("#triangle").css("display", "block");
      
        $("#circle").css("display", "none");
        $("#square").css("display", "none");
        $("#rectangle").css("display", "none");
    }
    $("#outputBox").css("display", "block");
}
