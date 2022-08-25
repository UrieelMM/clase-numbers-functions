import NumbersFunctions from "../index";

describe("Tests for Class NumbersFunctions - fibonacci", () => {
  test("Fibonacci 1", () => {
    const fibonacciInstance = new NumbersFunctions(10);
    const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 2", () => {
    const fibonacciInstance = new NumbersFunctions(5);
    const numbers = [0, 1, 1, 2, 3];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 3", () => {
    const fibonacciInstance = new NumbersFunctions(3);
    const numbers = [0, 1, 1];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 4", () => {
    const fibonacciInstance = new NumbersFunctions(20);
    const numbers = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 5", () => {
    const fibonacciInstance = new NumbersFunctions(7);
    const numbers = [0, 1, 1, 2, 3, 5, 8];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 6", () => {
    const fibonacciInstance = new NumbersFunctions(1);
    const numbers = [0, 1];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 7", () => {
    const fibonacciInstance = new NumbersFunctions(11);
    const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 8", () => {
    const fibonacciInstance = new NumbersFunctions(16);
    const numbers = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
    ];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 9", () => {
    const fibonacciInstance = new NumbersFunctions(4);
    const numbers = [0, 1, 1, 2];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });

  test("Fibonacci 10", () => {
    const fibonacciInstance = new NumbersFunctions(9);
    const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21];
    expect(fibonacciInstance.fibonacci()).toEqual(numbers);
  });
});
