// for, while, do...while

// let i = 0;

// while(i < 10){
//   console.log(i++)
//   // i++;
// }

// let i = 0;

// while( i < 10 ){

//   console.log(i++);

// }

const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
  hasOwnProperty() {
    return "a";
  },
};

// const log = data => console.log(data);

// data객체에 website라는 키가 있어?  -> if...

console.log("valueOf" in data);

// 자신의 프로퍼티를 가지고 있는지 확인하는 방법
console.log(data.hasOwnProperty("toString"));

// in문 객체 안에 해당 키가 있는지?
console.log(Object.prototype.hasOwnProperty.call(data, "toString"));

console.clear();

// 빌려쓴다. 누가       어떤 능력을         누구에게서   빌려쓴다.
//       (data)  (hasOwnProperty)   (Object)    (call)

// 버튼을 클릭하면    offCanvas메뉴가 등장한다.
// btn   addE...   menu         ???

// for...in   => 객체한테 쓸 수 있다.

// 왜 써야 하는가?  모든 객체의 key값 | value값을 조회하기 위해

// 'website' in data

for (const key in data) {
  const L1 = data[key];
  if (typeof L1 === "object") {
    for (const key in L1) {
      // console.log(L1[key])
    }
  }
  // console.log(L1)
}

// 배열은 for...in을 사용하지 못할까?  공식문서에서 하지말래요
// 순서가 중요한 배열 자료는 for..in으로 조회했을때 순서를 보장해주지 않습니다.

const arr = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

// iterable
// for...of => 반복 가능한 요소들

const smallArray = ["a", "b", "c", "d"];

// for..in / for..of 몇번 반복? 길이만큼

const str = "안녕하세요 저는 심선범입니다.";

for (const value of arr) {
  // console.log(value);
}

// 객체를 for...of를 사용하려면,,,, iterable  => 객체를 배열로

const user = {
  name: "tiger",
  age: 40,
  address: "서울시 중랑구 면목동",
};

// const keys = Object.keys(user); // 객체의 키를 모아서 새로운 배열로 반환

const values = Object.values(user); // 객체의 값들을 모아서 새로운 배열로 반환

const entries = Object.entries(user); // 객체의 키와 값들을 모은 하나의 쌍 배열 [key,value] 을 묶은 [[key,value],[key,value],[key,value]] 새로운 배열로 반환

Object.prototype.nickName = 1500;

for (const key in user) {
  // console.log(key);
}

// 객체는 for...in  &  for...of

for (const keyValue of entries) {
  let key = keyValue[0];
  let value = keyValue[1];

  // console.log(key, value);
}

const salaries = {
  심호영: 150,
  곽도희: 250,
  김경미: 153,
  전희선: 175,
};

// 선범이는 회사를 운영하는 대표이다. 선범이는 모든 직원들의 월급을 고민하게된다. 월급의 합을 구하여 한번에 처리할 수 있는 코드의 흐름을 파악하여 총 월급의 합을 구하시오.
// for, for..of, for..in

// 객체를 for..of를 사용하여 모든 월급의 합을 구하시오.

// let total = 0;

// for(const keyValue of Object.entries(salaries)){
//   const value = keyValue[1];
//   total += value;
// }

// console.log( total );

// 객체를 for..in을 사용하여 모든 월급의 합을 구하시오.

// let total = 0;

// for(const key in salaries){

//   if(Object.prototype.hasOwnProperty.call(salaries,key)){

//     total += salaries[key];

//   }
// }

// console.log(total);

// Array.prototype forEach, reduce, map, filter, find, findIndex ....

const value = Object.values(salaries);

let total = 0;

value.forEach((item, index) => {
  console.log(`${index + 1}번째 : ${item}`);

  total += item;
});

console.log(total);
