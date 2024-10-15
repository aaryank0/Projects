function replace(){
    var replaceThis_nonRex = document.getElementById("replaceThis").value;
    var replaceThis = new RegExp(replaceThis_nonRex, "g");
    var withThis = document.getElementById("withThis").value;
    var input_value = document.getElementById("input").value;
    var replaced_text = input_value.replace(replaceThis, withThis);
 
    var output_div = document.getElementById("output");
    output_div.value = replaced_text;
}
