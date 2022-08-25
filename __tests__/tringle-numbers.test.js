import NumbersFunctions from "../index";

describe("Tests for Class NumbersFunctions - triangleNumbers", () => {
  test("triangleNumbers 1", () => {
    const triangleInstance = new NumbersFunctions(5);
    const numbers = [1, 3, 6, 10];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 2", () => {
    const triangleInstance = new NumbersFunctions(6);
    const numbers = [1, 3, 6, 10, 15];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 3", () => {
    const triangleInstance = new NumbersFunctions(7);
    const numbers = [1, 3, 6, 10, 15, 21];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 4", () => {
    const triangleInstance = new NumbersFunctions(10);
    const numbers = [1, 3, 6, 10, 15, 21, 28, 36, 45];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 5", () => {
    const triangleInstance = new NumbersFunctions(1);
    const numbers = [];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 6", () => {
    const triangleInstance = new NumbersFunctions(11);
    const numbers = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 7", () => {
    const triangleInstance = new NumbersFunctions(13);
    const numbers = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 8", () => {
    const triangleInstance = new NumbersFunctions(14);
    const numbers = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 9", () => {
    const triangleInstance = new NumbersFunctions(15);
    const numbers = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });

  test("triangleNumbers 10", () => {
    const triangleInstance = new NumbersFunctions(20);
    const numbers = [
      1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171,
      190,
    ];
    expect(triangleInstance.triangleNumbers()).toEqual(numbers);
  });
});
