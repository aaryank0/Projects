function convert() {
    var height = document.getElementById("inchInput").value;
    var heightSquared = height * height;
    var weight = document.getElementById("weightInput").value;
    var bmi1 = weight / heightSquared;
    var bmi2 = bmi1 * 703;
    var bmi = bmi2.toFixed(2);
    var output = document.getElementById("outputBox");

    if (bmi < 18.5) {
        output.value = `${bmi} - Underweight`;
    } if (bmi > 18.51 && bmi < 24.99) {
        output.value = `${bmi} - Normal Weight`;
    } if (bmi > 25 && bmi < 29.99) {
        output.value = `${bmi} - Pre-Obesity`;
    } if (bmi > 30 && bmi < 34.99) {
        output.value = `${bmi} - Obesity Class 1`;
    } if (bmi > 35 && bmi < 39.99) {
        output.value = `${bmi} - Obesity Class 2`;
    } if (bmi >= 40) {
        output.value = `${bmi} - Obesity Class 3`;
    }

    if (ft == "" || inches == "" || weight == "") {
        alert("Fields cannot be empty");
        output.value = "";
    } if (ft == 0 || inches == "" || weight == 0) {
        alert("Numbers cannot be zero");
        output.value = "";
    }
}
