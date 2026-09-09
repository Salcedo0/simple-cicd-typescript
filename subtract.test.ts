declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(9, 4)).toBe(5);
  });

  it("returns a negative result when b is larger", () => {
    expect(window.subtract(4, 9)).toBe(-5);
  });

  it("works with 0", () => {
    expect(window.subtract(7, 0)).toBe(7);
  });

  it("works with negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });
});

export {};
