function convert() {
  var ft = document.getElementById("feetInput").value;
  var ftmtr = ft / 3.2808;
  
  var inches = document.getElementById("inchInput").value;
  var inchesmtr = inches / 3.2808;
  
  var height = ftmtr + inchesmtr;
  var heightSquared = height * height;
  
  var weight = document.getElementById("weightInput").value;
  
  var bmi = weight / heightSquared;
  
  if (bmi < 18.5) {
    document.getElementById("outputBox").value = bmi + " - Underweight";
  }
  if (bmi > 18.51 && bmi < 24.99) {
    document.getElementById("outputBox").value = bmi + " - Normal weight";
  }
  if (bmi > 25 && bmi < 29.99) {
    document.getElementById("outputBox").value = bmi + " - Pre-obesity";
  }
  if (bmi > 30 && bmi < 34.99) {
    document.getElementById("outputBox").value = bmi + " - Obesity class 1";
  }
  if (bmi > 35 && bmi < 39.99) {
    document.getElementById("outputBox").value = bmi + " - Obesity class 2";
  }
  if (bmi >= 40) {
    document.getElementById("outputBox").value = bmi + " - Obesity class 3";
  }
  console.log(heightInches);
}
