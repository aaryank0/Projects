function gen(){
    // generating hex color
    var list = ['A','B','C','D','E','F',
                '1','2','3','4','5','6','7','8','9'];
    var num1 = list[Math.floor(Math.random() * list.length)];
    var num2 = list[Math.floor(Math.random() * list.length)];
    var num3 = list[Math.floor(Math.random() * list.length)];
    var num4 = list[Math.floor(Math.random() * list.length)];
    var num5 = list[Math.floor(Math.random() * list.length)];
    var num6 = list[Math.floor(Math.random() * list.length)];
    var hex = "#"+num1+num2+num3+num4+num5+num6;
  
    // turning background color and button background to hex color, and showing hex color
    document.body.style.backgroundColor = hex;
    document.getElementById("showHex").innerHTML = hex;
    document.getElementById("button").style.backgroundColor = hex;
  
    // adding hex colo to history
    $("#history").append("<div id='historyItem' style='background-color:"+hex+"'><p id='historyHex'>"+hex+"</p></div>");
    $('#showHex').css('color', 'white'); $(this).css('border', '1px solid white'); $(this).css('color', 'white');
}
