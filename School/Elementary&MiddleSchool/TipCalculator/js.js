function calculate(){
    var money = parseFloat(document.getElementById("moneys").value);
    var tip1 = parseFloat(document.getElementById("tips").value);

    if (!isNaN(money) && !isNaN(tip1)) {
        var tip = money * (tip1 / 100);
        var bill = tip + money;

        var tipBox = document.getElementById("outputBox");
        var billBox = document.getElementById("outputBox1");

        tipBox.value = "Tip: $" + tip.toFixed(2);
        billBox.value = "Total Bill: $" + bill.toFixed(2);
    } else {
        alert("Please enter valid numbers for both the bill and the tip percentage.");
    }
}
