declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("returns 0 when a is 0", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("works with negative numbers", () => {
    expect(window.divide(-10, 2)).toBe(-5);
  });

  it("throws when dividing by zero", () => {
    expect(() => window.divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});

export {};
