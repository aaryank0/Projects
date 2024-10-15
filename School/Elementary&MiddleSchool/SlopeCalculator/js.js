function getSlope(point1, point2){
  var x1 = point1.split(' ').join('').split(',')[0];
  var y1 = point1.split(' ').join('').split(',')[1];
  var x2 = point2.split(' ').join('').split(',')[0];
  var y2 = point2.split(' ').join('').split(',')[1];
  const slope = ((y2-y1)/(x2-x1));
  if (y2-y1 == 0 || x2-x1 == 0){
    alert('Cannot divide by/from 0. Please try again.');
    document.location.reload();
  } if ((point1.split(' ').join('') == (point2.split(' ').join('')))){
    alert('These 2 points are the same! Please try again.')
    document.location.reload();
  } else{
    return slope;
  }
}
$('button').click(() => {
  var point1v = $('#point1').val();
  var point2v = $('#point2').val();
  $('#output').val(getSlope(point1v, point2v));
});
