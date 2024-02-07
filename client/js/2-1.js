const data = [
  {
    productName: "간장게장",
    price: 25_000,
    saleRadio: 10,
    quantity: 5,
  },
  {
    productName: "장어구이",
    price: 28_500,
    saleRadio: 24,
    quantity: 3,
  },
  {
    productName: "고추잡채",
    price: 17_500,
    saleRadio: 13,
    quantity: 0,
  },
  {
    productName: "안심 스테이크",
    price: 22_900,
    saleRadio: 23,
    quantity: 0,
  },
];

const arr = ["가희", "지성", "도희", "우중", "호영"];

// forEach: 반복만 처리, 값 반환 x => 배열 반복하려고 사용
const forEach = arr.forEach((item, index) => {
  return item;
});

// map: 새로운 배열 값 반환 o => 새로운 배열 데이터를 만들기 위해 사용
const map = arr.map((t, i) => {
  return "hello-" + t;
});

// filter: 새로운 배열 값 반환 o => 새로운 배열 데이터를 만들기 위해 사용
const filter = arr.filter((t, i) => {
  return t === "호영";
});

/* ----------------------------------- 예제 ----------------------------------- */

// forEach -> price의 총합
let totalPrice = 0;
data.forEach((t, i) => {
  totalPrice += t.price;
});

// map -> productName만 가지고 있는 배열 데이터 생성
const productName = data.map((t) => {
  return t.productName;
});

// map -> [[간장게장,25000],[장어구이,28500]]을 가지고 있는 배열 데이터 생성
const menuInformation = data.map((t) => {
  return [t.productName, t.price];
});

// reduce -> price의 총합
const result = data.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);

// filter -> 수량이 남아있는 항목듦만 배열 데이터 생성
const p = data.filter((t) => {
  return t.quantity !== 0;
});

// 세일 가격이 적용된 price만 배열로 생성
const sale = data.map((t) => {
  return `<li>할인된 가격: ${
    t.price - t.price * (t.saleRadio * 0.01)
  } 남은 상품 수량: ${t.quantity > 0 ? t.quantity : "재고없음"}</li>`;
});

sale.forEach((t) => {
  document.body.insertAdjacentHTML("beforeend", t);
});

// function render(text) {
//   document.body.insertAdjacentHTML("beforeend", text);

/* ------------------------------- 객체 구조 분해 할당 ------------------------------ */

// 객체는 순서가 중요하지않음, 배열은 중요
// 구조 분해 할 때도 순서가 상관없음

const salaries = {
  호영: 150,
  도희: 250,
  경미: 153,
  희선: 175,
};

// const 경미 = salaries.경미;
// const 도희 = salaries.도희; 매번 변수를 선언하고 갖다쓰면 불편함

// 기본 문법 const {salaries에서 뽑아낼 것} = salaries;

const { 경미: a, 도희 } = salaries;

console.log(도희, a);
