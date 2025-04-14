const example = require('./index');

test('1은 1이다.', () => {
    expect(1).toBe(1);
});

// test('이름과 나이를 전달하여 객체를 반환', () => {
//     expect(example.makeUser('char1ey', '31')).toBe({
//         name: 'char1ey',
//         age: '31',
//     });
// });

// test('이름과 나이를 전달하여 객체를 반환', () => {
//     expect(example.makeUser('char1ey', '31')).toEqual({
//         name: 'char1ey',
//         age: '31',
//     });
// });

// test('이름과 나이를 전달하여 객체를 반환', () => {
//     expect(example.makeUser('char1ey', '31')).toStrictEqual({
//         name: 'char1ey',
//         age: '31',
//     });
// });
