declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(6, 7)).toBe(42);
  });

  it("returns 0 when one operand is 0", () => {
    expect(window.multiply(8, 0)).toBe(0);
  });

  it("returns a negative result with mixed signs", () => {
    expect(window.multiply(-4, 5)).toBe(-20);
  });

  it("returns a positive result with two negatives", () => {
    expect(window.multiply(-4, -5)).toBe(20);
  });
});

export {};
