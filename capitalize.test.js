import capitalize from "./capitalize.js"

test('1 capitalize string', () => {
    expect(capitalize("abc")).toBe('Abc');
})

test('2 capitalize string', () => {
    expect(capitalize("monkey")).toBe('Monkey');
})

test('3 capitalize string', () => {
    expect(capitalize("tEkken")).toBe('TEkken');
})