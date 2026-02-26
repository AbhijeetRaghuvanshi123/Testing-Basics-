import stringReverse from "./stringreverse.js";

test('1 reverse a string' , () => {
    expect(stringReverse("abc")).toBe("cba");
})

test('2 reverse a string' , () => {
    expect(stringReverse("123")).toBe("321");
})

test('3 reverse a string' , () => {
    expect(stringReverse("abc123")).toBe("321cba");
})