for (var i = 1; i < 25; i++) {
  var x = '';
  if (i % 3 == 0) x += 'Fizz';
  if (i % 5 == 0) x += 'Buzz';
  if (!x) x = i;
  console.log(x);
}
