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
