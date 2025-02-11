const ROCK = '바위';
const SCISSORS = '가위';
const PAPER = '보';

//가위 버튼에 적용할 click Handler
function onScissorsClick(){
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
}

//바위 버튼
function onRockClick(){
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
}

//보 버튼
function onPaperClick(){
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
}

//공통으로 사용할 click Handler
function onButtonClick(userInput) {
  let comInput;
  let randomNum = Math.random();
  if (randomNum < 0.33) {
    comInput = SCISSORS;
  } else if (randomNum < 0.66) {
    comInput = ROCK;
  } else {
    comInput = PAPER;
  }
  //출력문 리팩토링 해보기
  let result = `컴퓨터는 ${comInput}를 냈습니다. `;
  if (userInput === comInput) {
    result+='비겼습니다.'
  } else if (
    (userInput === SCISSORS && comInput === PAPER) ||
    (userInput === ROCK && comInput === SCISSORS) ||
    (userInput === PAPER && comInput === ROCK)
  ) {
    result+='사용자가 이겼습니다!';
  } else {
    result+='컴퓨터가 이겼습니다!';
  }
  //이렇게 하면 alert 함수를 한번만 사용해도 된다.
  alert(result);
}
//컴퓨터는 ${comInput}를 냈습니다. 부분이 반복된다 -> 리팩토링

/**
getElementById를 사용하여 더 깔끔하게 만든 버전

const ROCK = '바위';
const SCISSORS = '가위';
const PAPER = '보';

// 공통으로 사용할 click Handler
function onButtonClick(userInput) {
  let comInput;
  let randomNum = Math.random();
  if (randomNum < 0.33) {
    comInput = SCISSORS;
  } else if (randomNum < 0.66) {
    comInput = ROCK;
  } else {
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

// 이벤트 리스너 설정
document.getElementById('scissors').addEventListener('click', function() {
  onButtonClick(SCISSORS);
});
document.getElementById('rock').addEventListener('click', function() {
  onButtonClick(ROCK);
});
document.getElementById('paper').addEventListener('click', function() {
  onButtonClick(PAPER);
});

addEventListener 함수는 JavaScript에서 이벤트 리스너를 등록하는 데 사용됩니다. 이 함수는 특정 이벤트가 발생할 때 실행될 함수를 지정할 수 있습니다. addEventListener 함수는 다음과 같은 인자를 받습니다:

event: 문자열로, 이벤트의 유형을 지정합니다.
  예를 들어, "click", "mouseover", "keydown" 등이 있습니다.
listener: 이벤트가 발생했을 때 호출될 함수입니다.
  이 함수는 이벤트 객체를 인자로 받을 수 있습니다.
options (선택적): 이벤트 리스너의 옵션을 지정하는 객체입니다.
  이 옵션은 capture, once, passive 등의 속성을 가질 수 있습니다.

event: "click" - 클릭 이벤트를 지정합니다.
listener: function(event) { ... } - 클릭 이벤트가 발생했을 때 실행될 함수입니다.
  이 함수는 이벤트 객체를 인자로 받을 수 있습니다.

addEventListener를 사용할 때, 이벤트 리스너 함수는 다양한 형식으로 작성할 수 있습니다.
function(event) { ... } 형식 외에도 화살표 함수(arrow function)를 사용할 수 있습니다.
또한, 이미 정의된 함수를 직접 참조할 수도 있습니다.
```
document.getElementById('scissors').addEventListener('click', function(event) {
  onButtonClick(SCISSORS);
});
```
```
document.getElementById('scissors').addEventListener('click', (event) => {
  onButtonClick(SCISSORS);
});
```
```
function handleScissorsClick(event) {
  onButtonClick(SCISSORS);
}

document.getElementById('scissors').addEventListener('click', handleScissorsClick);
```
options (선택적): { capture: true, once: true, passive: true } - 이벤트 리스너의 옵션을 지정하는 객체입니다.

capture: true로 설정하면 캡처링 단계에서 이벤트를 처리합니다. 기본값은 false로, 버블링 단계에서 이벤트를 처리합니다.
once: true로 설정하면 이벤트 리스너가 한 번만 실행된 후 자동으로 제거됩니다.
passive: true로 설정하면 이벤트 리스너가 preventDefault()를 호출하지 않음을 나타냅니다. 스크롤 성능을 향상시키기 위해 사용됩니다.

 */