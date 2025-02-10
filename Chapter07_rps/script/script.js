let userInput;
while(true){
  //while루프 안에 변수를 선언하니까 에러가 뜬다.
  userInput = prompt("가위, 바위, 보 중 하나를 입력해주세요");
  if(userInput !== "가위" && userInput !== "바위" && userInput !== "보"){
    alert("잘못된 입력입니다.");
  }
  else{
    break;
  }
}

// Math.random() - 0 이상 1 미만의 부동소수점 난수를 반환.
// let choices = ["가위", "바위", "보"];
// let randomIndex = Math.floor(Math.random() * choices.length);
// let comInput = choices[randomIndex];

let comInput;
let randomNum = Math.random();
if(randomNum<0.33){
  comInput = "가위";
}
else if(randomNum<0.66){
  comInput = "바위";
}
else{
  comInput = "보";
}

if (userInput === comInput) {
  alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
} else if (
  (userInput === "가위" && comInput === "보") ||
  (userInput === "바위" && comInput === "가위") ||
  (userInput === "보" && comInput === "바위")
) {
  alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
} else {
  alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
}

/**
 * 특정 범위의 정수 난수 생성
let min = 1;
let max = 10;
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt);
  * 특정 범위의 부동소수점 난수 생성
let min = 1;
let max = 10;
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt);
 */