var num1=+prompt("Введите число","");

function fib(num) {
  return (num<=1)?num: fib(num-1)+fib(num-2);
}
var x=fib(num1)

alert(x);
