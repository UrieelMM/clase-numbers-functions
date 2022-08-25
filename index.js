class NumberFunction {
  constructor(number) {
    this.number = number;
  }
  fibonacci() {
    let result = [];
    result[0] = 0;
    result[1] = 1;
    for (let i = 2; i < this.number; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result;
  }
  primesNumbers() {
    let result = [];
    let i = 2;
    for (; i < this.number; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    function isPrime(number) {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return number !== 1;
    }
    return result;
  }
  triangleNumber() {
    let result = [];
    for (let i = 1; i < this.number; i++) {
      result.push((i * (i + 1)) / 2);
    }
    return result;
  }
}

const fibonacciInstance = new NumberFunction(10).fibonacci();

const primesInstance = new NumberFunction(100).primesNumbers();

const triangleInstance = new NumberFunction(5).triangleNumber();
