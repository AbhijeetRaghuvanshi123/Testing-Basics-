import analyzeArray from "./analyzeArray.js";

const object1 = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};

test('1 analze aaray test', () => {
    expect(analyzeArray([1,8,3,4,2,3])).toEqual(object1);
})


const object2 = {
   average: 4,
   min: 1,
   max: 6,
   length: 6
};

test('2 analze aaray test', () => {
    expect(analyzeArray([1,2,3,4,5,6])).toEqual(object2);
})

