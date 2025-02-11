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

const ROCK = '바위';
const SCISSORS = '가위';
const PAPER = '보';

let userInput;
while(true){
  //while루프 안에 변수를 선언하니까 에러가 뜬다.
  userInput = prompt(`${SCISSORS}, ${ROCK}, ${PAPER} 중 하나를 입력해주세요`);
  if(userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER){
    alert('잘못된 입력입니다.');
  }
  else{
    //이 부분이 유효성 검사를 통과한 부분이니 나머지 정상 실행된 로직을 작성하도록 하는 편.
    let comInput;
    let randomNum = Math.random();
    if(randomNum<0.33){
      comInput = SCISSORS;
    }
    else if(randomNum<0.66){
      comInput = ROCK;
    }
    else{
      comInput = PAPER;
    }

    if (userInput === comInput) {
      alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
    } else if (
      (userInput === SCISSORS && comInput === PAPER) ||
      (userInput === ROCK && comInput === SCISSORS) ||
      (userInput === PAPER && comInput === ROCK)
    ) {
      alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
    } else {
      alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
    }
  }
}

// Math.random() - 0 이상 1 미만의 부동소수점 난수를 반환.
// let choices = ['가위', '바위', '보'];
// let randomIndex = Math.floor(Math.random() * choices.length);
// let comInput = choices[randomIndex];

//학원 예제
// if(userInput === SCISSORS){
//   if(comInput===SCISSORS){
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
//   }
//   else if(comInput===ROCK){
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
//   }
//   else{
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
//   }
// } else if (userInput===ROCK){
//   if(comInput===ROCK){
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
//   }
//   else if(comInput===PAPER){
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
//   }
//   else{
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
//   }
// } else{
//   if(comInput===PAPER){
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
//   }
//   else if(comInput===SCISSORS){
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
//   }
//   else{
//     alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
//   }  
// }

//switch 문으로 바꿔보기
userInput = prompt(`${SCISSORS}, ${ROCK}, ${PAPER} 중 하나를 입력해주세요`);
switch(userInput){
  case SCISSORS:
    switch(comInput){
      case SCISSORS:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
        break;
      case ROCK:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
        break;
      case PAPER:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
        break;
    }
    break;
  case ROCK:
    switch(comInput){
      case ROCK:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
        break;
      case PAPER:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
        break;
      case SCISSORS:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
        break;
    }
    break;
  case PAPER:
    switch(comInput){
      case PAPER:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 비겼습니다.`);
        break;
      case SCISSORS:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 컴퓨터가 이겼습니다!`);
        break;
      case ROCK:
        alert(`컴퓨터는 ${comInput}를 냈습니다. 사용자가 이겼습니다!`);
        break;
    }  
    break;  
  default:
    alert('잘못된 입력입니다.');
    break;
}