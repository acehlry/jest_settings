const example = require('./index');

test('1은 1이다.', () => {
    expect(1).toBe(1);
});

// test('3초 후에 받아온 이름은 Char1ey', () => {
//     function callback(name) {
//         expect(name).toBe('Char1ey');
//     }

//     example.getName(callback);
// });

// done을 사용하여 해당 함수가 끝나기를 기다린다.
// 비동기 함수를 테스트 할 때 사용한다.
// 만약 done을 사용하지 않으면, 테스트를 실패한다.
// test('3초 후에 받아온 이름은 Char1ey', (done) => {
//     function callback(name) {
//         try {
//             expect(name).toBe('Mike');
//             done();
//         } catch (error) {
//             done();
//         }
//     }

//     example.getName(callback);
// });

// test('3초 후에 받아온 나이는 31', () => {
//     return example.getAge().then((age) => {
//         expect(age).toBe(31);
//     });
// });

// test('3초 후에 받아온 나이는 31', () => {
//     return expect(example.getAge()).resolves.toBe(31);
//     // return expect(example.getAge()).rejects.toBe(31);
// });

// test('3초 후에 받아온 나이는 31', async () => {
//     const age = await example.getAge();
//     expect(age).toBe(31);
// });

// test('3초 후에 받아온 나이는 31', async () => {
//     await expect(example.getAge()).resolves.toBe(31);
// });
