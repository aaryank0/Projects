function makeChange() {
    var totalValue, totalCents, fromValue, fromCents;
 
    totalValue = $("#totalPrice").val();
    if ( $("#totalPrice").val().includes('.') ){
        if ( $("#totalPrice").val().split('.')[1].length == 1 ){
            totalCents = totalValue.split('.').join('') * 10;
        } else if ( $("#totalPrice").val().split('.')[1].length == 2 ){
            totalCents = totalValue.split('.').join('');
        } 
    } else {
        totalCents = totalValue.split('.')[0] * 100;
    }
  
    fromValue = $("#from").val();
    if ( $("#from").val().includes('.') ){
        if ( $("#from").val().split('.')[1].length == 1 ){
            fromCents = fromValue.split('.').join('') * 10;
        } else if ( $("#from").val().split('.')[1].length == 2 ){
            fromCents = fromValue.split('.').join('');
        } 
    } else {
        fromCents = fromValue.split('.')[0] * 100;
    }
  
    var cents = fromCents - totalCents;
    var hundred = parseInt(cents / 10000);
    cents = cents % 10000;
    var fifty = parseInt(cents / 5000);
    cents = cents % 5000;
    var twenty = parseInt(cents / 2000);
    cents = cents % 2000;
    var ten = parseInt(cents / 1000);
    cents = cents % 1000;
    var five = parseInt(cents / 500);
    cents = cents % 500;
    var one = parseInt(cents / 100);
    cents = cents % 100;
    var quarters = parseInt(cents / 25);
    cents = cents % 25;
    var dimes = parseInt(cents / 10);
    cents = cents % 10;
    var nickels = parseInt(cents / 5);
    cents = cents % 5;
    var pennies = parseInt(cents / 1);
    line1 = `${hundred} $100 bills,${fifty} $50 bills,${twenty} $20 bills,${ten} $10 bills,${five} $5 bills,${one} $1 bills,${quarters} Quarters,${dimes} Dimes,${nickels} Nickels,${pennies} Pennies
    `
    line1arr = line1.split(',');
    fArr = line1.split(',').filter(function(val){
        return val.split('')[0] != '0';
    });
    var ds = "$"
    if ((fromValue-totalValue) < 0){
        alert("Total Cost cannot be larger than From Customer!")
        document.location.reload()
    } else {
        $("#output").val(`
Total Return: 
${ds}${(fromValue-totalValue).toFixed(2)}

Change: 
${fArr.join('\n').split('-').join('')}
`);
}
    }
