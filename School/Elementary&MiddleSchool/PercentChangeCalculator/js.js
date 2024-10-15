const button = document.getElementById("button");
let output = document.getElementById("outputBox");
button.addEventListener('click', function(){
  const oldValue = document.getElementById("old").value;
  const newValue = document.getElementById("new").value;
  const fixPlaces = document.getElementById("places").value;
  output.value =  ((newValue - oldValue)/oldValue*100).toFixed(fixPlaces)+"%";
  console.log(oldInput, newInput);
});
