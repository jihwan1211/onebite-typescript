//배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "jihwan"];
let boolArr = [true, false, true];
//배열에 들어가는 요소들의 타입이 다양할경우
let multiArr = [1, "hello"];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플 only for typescript
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; //error
let tup2 = [1, "2", true];
// 사실 튜플은 별도의 자료형이 아니고 배열이다.
// push, pop 등 배열 메서드 가능(주의해서 사용 필요)
// 이렇게 사용 가능 인덱스에 위치를 지키는 것이 중요할 때
const users = [
    ["lee", 1],
    ["kim", 2],
    ["park", 3],
    ["choi", 4],
];
export {};
