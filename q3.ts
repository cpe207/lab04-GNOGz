function primeNumber(a) {
  let isPrime = true;
  for (let i = 2;i < a ; i++){
    if (a%i == 0 && a != 2){
      isPrime = false;
      break;
    }
  }
  if (isPrime){
    return "YES";
  }
  else{
    return "NO";
  }
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
