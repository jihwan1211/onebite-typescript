// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "jihwan",
  nickname: "kimchi",
  birth: "1998",
  location: "bucheon city",
};

// 인덱스 시그니처
// 키와 벨류의 규칙을 기준으로 객체의 타입을 정의
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};
