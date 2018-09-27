var num1 = +prompt("Введите число", "");
var fibBinet = function (n) {
  var f = (1 + Math.sqrt(5)) / 2;
  var fib = (Math.pow(f,n))/Math.sqrt(5);
  return Math.round(fib);
}
alert(fibBinet(num1));
