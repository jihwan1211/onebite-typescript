// object
let user: object = {
  id: 1,
  name: "jihwan",
};
// object로 type을 명시할 경우 user.id로 접근이 불가능

// 객체 리터럴 타입으로 정의해야함
let user2: { id?: number; name: string } = {
  id: 1,
  name: "jihwan",
};

let dog: { name: string; color: string } = {
  name: "doldol",
  color: "brown",
};
// 구조적 타입 시스템 -> property based type system

//  선택적(optional) property
user2 = {
  name: "sumin",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API KEY",
};
