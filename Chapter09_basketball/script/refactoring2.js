// let computer.score = 0;
// let userScore = 0;
// let userRemain = 15;
// let isComputerTurn = true;
// // 농구 컴퓨터 AI 성능 개선 부분 관련 변수 선언
// let comPercent2 = 0.5;
// let comPercent3 = 0.333;
// // 코드 내에 리터럴 데이터가 있는 것은 바람직하지 않으므로, userPercent2와 3도 정의한다.
// let userPercent2 = 0.5;
// let userPercent3 = 0.333;
// //여기에 리팩토링의 첫번째 단계 진행 -> 반복되는데 짧아서 대체가능한 애

//컴퓨터 관련 오브젝트
let computer={
  score: 0,
  percent2: 0.5,
  percent3: 0.333
};

let user={
  score: 0,
  percent2: 0.5,
  percent3: 0.333
};

let game = {
  userRemain: 15,
  isComputerTurn: true
};

function showText(s){
  let textElement = document.getElementById('text');
  textElement.innerHTML = s; //sentence or string
}

function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  computer.score += score;
  comScoreElement.innerHTML = computer.score;  
}

function updateUserScore(score){
  let userScoreElement = document.getElementById('user-score');
  user.score += score;
  userScoreElement.innerHTML = user.score;  
}

function disableComButton(flag){
  let computerButtons = document.getElementsByClassName('btn-computer');
  if(game.userRemain!==0){
    for(let i=0;i<computerButtons.length;i++){
      computerButtons[i].disabled = flag;
    }
  }
}

function disableUserButton(flag){
  let userButtons = document.getElementsByClassName('btn-user');
  for(let i=0;i<userButtons.length;i++){
    userButtons[i].disabled = flag;
  }
}

function updateAI(diff){
  //if 조건문 순서 햇갈리지 않기.
  //범위가 좁은거부터 작성해야 한다.
  if(diff>=10){
    computer.percent2 = 0.30;
    computer.percent3 = 0.23;
  }
  else if(diff>=6){
    computer.percent2 = 0.4;
    computer.percent3 = 0.28;
  }
  else if(diff<=-10){
    computer.percent2=0.7;
    computer.percent3=0.43;
  }
  else if(diff<=-6){
    computer.percent2 = 0.6;
    computer.percent3 = 0.38;
  }
  else{
    computer.percent2 = 0.5;
    computer.percent3 = 0.333;
  }
}

//리팩토링이 적용되는 부분
function onComputerShoot(){
  let shootType = Math.random() < 0.5 ? 2:3;

  updateAI(computer.score-user.score);

  if(!game.isComputerTurn){
    alert("사용자의 차례입니다.");
    return;
  }
  //computer[percent2], computer[percent3]가 나온다.
  //중요한 부분!
  if(Math.random()<computer['percent'+shootType]){
    showText('컴퓨터가 '+shootType+"점 슛을 성공했습니다");
    updateComScore(shootType);
  }
  else{
    showText('컴퓨터가 '+shootType+"점 슛을 실패했습니다");
  }
  // if(shootType === 2){
  //   if(Math.random() < computer.percent2){
  //     showText("컴퓨터가 2점 슛을 성공했습니다!");
  //     updateComScore(2);
  //   }
  //   else{
  //     showText("컴퓨터가 2점 슛을 실패했습니다!");
  //   }
  // }
  // else{
  //   if(Math.random()<computer.percent3){
  //     showText('<b>컴퓨터가 3점 슛을 성공했습니다!</b>');
  //     updateComScore(3);
  //   }
  //   else{
  //     showText("컴퓨터가 3점 슛을 실패했습니다!");
  //   }
  // }
  game.isComputerTurn=false;

  disableComButton(true);
  disableUserButton(false);
}

function onUserShoot(shootType){
  let userRemainElement = document.getElementById('shots-left');
  if(game.isComputerTurn){
    alert("컴퓨터의 차례입니다.");
    return;
  }
  if(shootType === 2){
    if(Math.random() < 0.5){
      showText("2점 슛을 성공했습니다!");
      updateUserScore(2);
    }
    else{
      showText("2점 슛을 실패했습니다!");
    }
  }
  else{
    if(Math.random()<0.333){
      showText("<b>3점 슛을 성공했습니다!</b>");
      updateUserScore(3);
    }
    else{
      showText("3점 슛을 실패했습니다!");
    }
  }
  game.userRemain--;
  userRemainElement.innerHTML = game.userRemain;
  game.isComputerTurn=true;

  disableComButton(false);
  disableUserButton(true);
  if(game.userRemain===0){
    if(computer.score>user.score){
      //alert ('컴퓨터가 승리하였습니다!');
      showText('컴퓨터가 승리하였습니다!');
    }
    else if(computer.score<user.score){
      //alert("당신이 승리하였습니다!")
      showText('당신이 승리하였습니다!');
    }
    else{
      //alert("비겼습니다!")
      showText('비겼습니다!');
    }
    return;
  }
}