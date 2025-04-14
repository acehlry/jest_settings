// const mockFn = jest.fn();

// test('테스트', () => {
//     /**
//      * mockFn.mock.calls를 통해서
//      * 몇 번 실행되었는지,
//      * 인수가 무엇이었는지, 알 수 있다.
//      */
//     console.log(mockFn.mock.calls);
//     expect('dd').toBe('dd');
// });

// function forEachAdd(arr) {
//     arr.forEach((num) => {
//         mockFn(num + 1);
//     });
// }

// forEachAdd([10, 20, 30]);

// test('함수 3번 호출', () => {
//     expect(mockFn.mock.calls.length).toBe(3);
// });

// test('전달된 값은 각각, 11, 21, 31', () => {
//     expect(mockFn.mock.calls[0][0]).toBe(11);
//     expect(mockFn.mock.calls[1][0]).toBe(21);
//     expect(mockFn.mock.calls[2][0]).toBe(31);
// });

const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test('10에서 1 증가한 값이 반환', () => {
    expect(mockFn.mock.results[0].value).toBe(11);
});

test('20에서 1 증가한 값이 반환', () => {
    expect(mockFn.mock.results[1].value).toBe(21);
});

test('30에서 1 증가한 값이 반환', () => {
    expect(mockFn.mock.results[2].value).toBe(31);
});
