function hcd(list){
  var hasContinuousDifference = true;
  for (i = 1; i < list.length; i++){
    if ((list[i+1] - list[i]) != (list[i] - list[i-1])) hasContinuousDifference = false;
  } return hasContinuousDifference;
}
function findRule(list){
  let output = [];
  let rule = "";
  if (!hcd(list)){ 
    alert("Your list does not have the same difference all the way.");
    document.location.reload();
  } else{
    var difference = list[1] - list[0];
    if (difference > 0) rule = `An = A(n-1) + ${difference}`
    else if (difference < 0) rule = `An = A(n-1) - ${difference}`
    return rule;
  }
}
$('#btn2').click(() => {
  $('#output2').val(findRule($('#sequence').val().split(' ').join('').split(',')))
})
