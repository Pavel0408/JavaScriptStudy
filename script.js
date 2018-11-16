var max = +prompt('введите максимальное значение', '');
var arrPrime = function (maxNumber) {
    var start = [];
    for (var i = 0; i < maxNumber; i++) {
        start.push(i);
    }
    console.log(start);
    for (var k = 2; k <= maxNumber; k++) {
        for (var j = k; j <= maxNumber; j = j + k) {
            if (j != k) {
                delete start[j];
            }
        }
    }    
    var primeNumbers = [];
    var summ = 0;
    for (i = 2; i < maxNumber; i++) {
        if (start[i]) {
            primeNumbers.push(start[i]);
            summ+=start[i];
        }
    }
    
    return primeNumbers;
}

alert(arrPrime(max));