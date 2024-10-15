function char_count(str, letter){
    var letter_Count = 0;
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == letter){
            letter_Count += 1;
        }
    }
    return letter_Count;
}
function CheckWords(stringInput){
  var count = 0;
  var splitted = stringInput.split(" ");
  for(var i = 0; i < splitted.length; i++){
    if(splitted[i] == ""){
      count++;
    }
  }
  return splitted.length - count;
}
function count(obj){
    let vowels = 0;
    if (document.getElementById("removeSpace").checked){
        var spaces = char_count(obj.value, " ");
        document.getElementById("chars").innerHTML = `${obj.value.length - spaces} Characters`;
        document.getElementById("words").innerHTML = `${CheckWords(obj.value)} Words`;
        document.getElementById("lines").innerHTML = `${obj.value.split("\n").length} Lines`;
        document.getElementById("sentences").innerHTML = `${obj.value.split('. ').length - 1} Sentences`;
    }
    else {
        document.getElementById("words").innerHTML = `${CheckWords(obj.value)} Words`;
        document.getElementById("chars").innerHTML = `${obj.value.length - ((obj.value.split("\n").length)-1)} Characters`;
        document.getElementById("lines").innerHTML = `${obj.value.split("\n").length} Lines`;
        document.getElementById("sentences").innerHTML = `${obj.value.split('. ').length - 1} Sentences`;
        for (i = 0; i < obj.value.split('').length; i++){
            if (["A","E","I","O","U","a","e","i","o","u"].includes(obj.value.split('')[i])){
                vowels++;
            }
        }
        document.getElementById("vowels").innerHTML = `${vowels} Vowels`;
            if (obj.value.length === 0){
                document.getElementById("words").innerHTML = `${obj.value.split(" ").length} Words`;
            }
      }
}
