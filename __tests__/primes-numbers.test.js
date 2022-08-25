import NumbersFunctions from "../index";

describe("Tests for Class NumbersFunctions - primesNumbers", () => {
  test("primesNumbers 1", () => {
    const primesInstance = new NumbersFunctions(10);
    const numbers = [2, 3, 5, 7];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 2", () => {
    const primesInstance = new NumbersFunctions(20);
    const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 3", () => {
    const primesInstance = new NumbersFunctions(15);
    const numbers = [2, 3, 5, 7, 11, 13];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 4", () => {
    const primesInstance = new NumbersFunctions(11);
    const numbers = [2, 3, 5, 7];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 5", () => {
    const primesInstance = new NumbersFunctions(13);
    const numbers = [2, 3, 5, 7, 11];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 6", () => {
    const primesInstance = new NumbersFunctions(27);
    const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 7", () => {
    const primesInstance = new NumbersFunctions(30);
    const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 8", () => {
    const primesInstance = new NumbersFunctions(50);
    const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 9", () => {
    const primesInstance = new NumbersFunctions(70);
    const numbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    ];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });

  test("primesNumbers 10", () => {
    const primesInstance = new NumbersFunctions(100);
    const numbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];
    expect(primesInstance.primesNumbers()).toEqual(numbers);
  });
});
