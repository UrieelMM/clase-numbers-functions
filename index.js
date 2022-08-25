class NumbersFunctions {
  constructor(number) {
    this.number = number;
  }

  triangleNumbers() {
    let result = [];
    for (let i = 1; i < this.number; i++) {
      result.push((i * (i + 1)) / 2);
    }
    return result;
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
}

export default NumbersFunctions;
