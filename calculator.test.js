import { add, sub, div, mul} from "./calculator.js";

test("1 add test", () => {
    expect(add(0,0)).toBe(0);
})

test("2 add test", () => {
    expect(add(1,1)).toBe(2);
})

test("3 add test", () => {
    expect(add(-1, -1)).toBe(-2);
})

test("1 sub test", () => {
    expect(sub(0, 0)).toBe(0);
})

test("2 sub test", () => {
    expect(sub(2, 1)).toBe(1);
})

test("3 sub test", () => {
    expect(sub(-2, -10)).toBe(8);
})

test("1 div test", () => {
    expect(div(0, 0)).toBe(NaN);
})

test("2 div test", () => {
    expect(div(2, 1)).toBe(2);
})

test("3 div test", () => {
    expect(div(-10, -2)).toBe(5);
})

test("1 mul test", () => {
    expect(mul(0, 0)).toBe(0);
})

test("2 mul test", () => {
    expect(mul(2, 1)).toBe(2);
})

test("3 mul test", () => {
    expect(mul(-10, -2)).toBe(20);
})
