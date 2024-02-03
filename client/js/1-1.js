function checkUser() {
  let userName = prompt("사용자의 아이디를 입력해주세요", "");

  // 만약 userName === null 이면 아래 코드 실행하지마..

  if (userName === null || userName === undefined)
    return "해당 정보가 없습니다.";
  // if(isNull(userName) || isUndefined(userName)) return '해당 정보가 없습니다.';

  userName = userName.toLowerCase(); // 재할당

  if (userName === "tiger") {
    console.log("환영합니다");
  } else if (userName === "bear") {
    console.log("반갑습니다!");
  } else if (userName === "" || userName.replace(/\s*/g, "") === "") {
    console.log("빈문자를 입력하셨습니다.");
  } else {
    console.log("안녕히가세요");
  }
}

checkUser();
