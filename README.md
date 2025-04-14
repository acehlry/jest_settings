# Jest

JavaScript Test

-   zero configuration
    -   별도의 세팅없이 테스트 가능

## Install

```sh
npm install jest -D
```

## Settings

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

## Using

jest는 프로젝트 내의 다음 파일을 읽어 테스트를 진행

-   `*.test.js`
-   `__test__`

```sh
# Settings에서 설정한 package.json 파일 참고
npm test
```

### Matcher

toBe에서 사용하는 값을 Matcher라고 한다

```js
test('2 더하기 3은 5다.', () => {
    expect(example.add(2, 3)).toBe(5);
});
```

**Matcher의 종류**

아래에 있는 Matcher 외에도 많은 Matcher가 있으니,

공식문서(https://jestjs.io/)를 확인하여 진행한다.

1. toBe
2. toEqual
3. toStrictEqual
4. toBeNull: 예측값이 `null`인지 판별
5. toBeUndefined : 예측값이 `undefined`인지 판별
6. toBeDefined: 예측값이 정의되었는지 판별
7. toBeTruthy: 예측값이 `Truthy`인지 판별
8. toBeFalsy: 예측값이 `Falsy`인지 판별

### 비동기 테스트

```js
// 테스트 대상 코드
const example = {
    getName: (callback) => {
        const name = 'Char1ey';

        setTimeout(() => {
            callback(name);
            // throw new Error('서버 에러');
        }, 3000);
    },

    getAge: () => {
        const age = 31;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
            }, 3000);
        });
    },
};
```

테스트 케이스 작성

-   done을 이용해서 함수가 끝날 때를 기다려야함. 그렇지 않으면, 테스트에서 그냥 통과 될 수 있음

```js
test('3초 후에 받아온 이름은 Char1ey', () => {
    function callback(name) {
        expect(name).toBe('Char1ey');
    }

    example.getName(callback);
});

// done을 사용하여 해당 함수가 끝나기를 기다린다.
// 비동기 함수를 테스트 할 때 사용한다.
// 만약 done을 사용하지 않으면, 테스트를 실패한다.
test('3초 후에 받아온 이름은 Char1ey', (done) => {
    function callback(name) {
        try {
            expect(name).toBe('Mike');
            done();
        } catch (error) {
            done();
        }
    }

    example.getName(callback);
});

test('3초 후에 받아온 나이는 31', () => {
    return example.getAge().then((age) => {
        expect(age).toBe(31);
    });
});

test('3초 후에 받아온 나이는 31', () => {
    return expect(example.getAge()).resolves.toBe(31);
    // return expect(example.getAge()).rejects.toBe(31);
});

test('3초 후에 받아온 나이는 31', async () => {
    const age = await example.getAge();
    expect(age).toBe(31);
});

test('3초 후에 받아온 나이는 31', async () => {
    await expect(example.getAge()).resolves.toBe(31);
});
```

### 테스트 훅

-   `beforeEach` : `각 테스트` 전에 실행
-   `afterEach` : `각 테스트` 후에 실행
-   `beforeAll` : `전체 테스트` 전에 실행
    -   ex) DB를 연결해서 테스트 하는 경우 커넥션
    -   ex) 생성자 주입(백엔드 테스트 시)
-   `afterAll` : `전체 테스트` 후에 실행
    -   ex) DB 연결 해제

```js
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
```

### Mock 함수

테스트 하기 위한 가짜 함수
