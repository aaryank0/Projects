function calculate(){
  const output = "$"+eval("("+$("#totalBill").val()+"+"+(($("#totalBill").val()/100)*$("#tip").val())+")/"+$("#peopleAmount").val()).toFixed(2);
  $("#output").val("Each person should pay");
  $("#moneyOutput").val(output);
}
