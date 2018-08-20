var num=+prompt("Введите число","");
var power=+prompt("Введите степень","");
function pow(num,power) {
  if(power==1){
    return num;
  }
  else {
    return num*pow(num,power-1);
  }
}
alert(pow(num,power));
