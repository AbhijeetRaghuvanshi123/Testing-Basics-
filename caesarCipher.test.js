import caesarCipher from "./caesarCipher.js";

test('1 test of shifting sting', () => {
    expect(caesarCipher("abc", 2)).toBe("cde");
})

test('2 test of shifting sting', () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
})

test('3 test of shifting sting', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test('4 test of shifting sting', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test('5 test of shifting sting', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})