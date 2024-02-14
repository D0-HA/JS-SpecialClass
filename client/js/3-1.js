/* ------------------------------------ 1 ----------------------------------- */

// 자바스크립트의 함수는 값이다. 일급함수.

// 함수 선언문
// 함수 선언문은 함수를 선언하기도 전에 호출 가능
function sumA(value) {
  return "a";
}

sumA(10); // 'a'

const a = new sumA(); // constructor 내장하기때문에 가능

// 함수 표현식
// 함수 표현식에서는 sumB만 호이스팅되어서 함수 선언 전 호출 불가
const sumB = function (value) {
  return "b";
};

sumB(20); // 'b'

const B = new sumB(); // constructor 내장하기때문에 가능

// 화살표 함수(표현식의 또다른 방법으로 이해하면 좋음)
const sumC = (value) => "c"; // 소괄호 생략 가능

sumC(30); // 'c'

/* ------------------------------------ 2 ----------------------------------- */

// 1. 실행부 작성
// 2. 매개변수
// 3. 리턴 유무
// 4. validation

// 자바스크립트의 함수는 값입니다. 일급함수 => javascript,python

// callback

// 1. 실행부 작성
// 2. 매개변수
// 3. 리턴 유무
// 4. validation

// context
// node 변수가 문자가 아니면 에러를 발생
//                    default parameter

function getNode(node, context = document) {
  if (typeof node !== "string") {
    throw new Error("getNode의 첫 번째 인수는 문자 타입 이어야 합니다!");
  }

  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

// h1.classList.add('hello')

function addClass(node, className) {
  // const node = 'h1';
  // const className = 'hello';

  // node 문자일때만

  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    throw new TypeError(
      "addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  node.classList.add(className);
}

addClass("h1", "hello");
addClass("h1", "kind");
addClass("h1", "tiger");

// removeClass

// 리액트 코드 vs 자바스크립트 코드

function removeClass(node, cn) {
  if (typeof node === "string") node = getNode(node);

  if (typeof cn !== "string" && cn !== undefined) {
    throw new TypeError(
      "removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  if (!cn) {
    node.className = "";
    return;
  }

  node.classList.remove(cn);
}

removeClass("h1");

// toggleClass

const h1 = getNode("h1");

// getCss

// CSSStyleDeclaration => TS

function getCss(node, prop) {
  if (typeof node === "string") node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new TypeError(
      "getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다."
    );
  }

  return getComputedStyle(node)[prop];
}

const result = getCss("h1", "fontSize"); // 32px

// CSSStyleDeclaration

// setCss

function setCss(node, prop, value) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new TypeError(
      "setCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다."
    );
  }
  if (!value)
    throw new SyntaxError("setCss 함수의 세 번째 인수는 필수 입력값 입니다.");

  node.style[prop] = value;
}

setCss("h1", "fontSize", "100px");

// css

// getAttr

// setAttr

// attr
