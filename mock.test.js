const mock = require('./mock');

let num = 0;

beforeEach(() => {
    num = 0;
});

afterEach(() => {
    num = 0;
});

test('0 더하기 1은 1', () => {
    num = mock.add(num, 1);
    expect(num).toBe(1);
});

test('0 더하기 2는 2', () => {
    num = mock.add(num, 2);
    expect(num).toBe(2);
});

test('0 더하기 3는 3', () => {
    num = mock.add(num, 3);
    expect(num).toBe(3);
});
