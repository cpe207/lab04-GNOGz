function primeNumber(a) {
    var isPrime = true;
    for (var i = 2; i < a; i++) {
        if (a % i == 0 && a != 2) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        return "YES";
    }
    else {
        return "NO";
    }
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
