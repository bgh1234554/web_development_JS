let comScore = 0;
let userScore = 0;
let userRemain = 15;
let isComputerTurn = true;

//여기에 리팩토링의 첫번째 단계 진행 -> 반복되는데 짧아서 대체가능한 애

function showText(s){
  let textElement = document.getElementById('text');
  textElement.innerHTML = s; //sentence or string
}

function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;
  comScoreElement.innerHTML = comScore;  
}

function updateUserScore(score){
  let userScoreElement = document.getElementById('user-score');
  userScore += score;
  userScoreElement.innerHTML = userScore;  
}

function disableComButton(flag){
  let computerButtons = document.getElementsByClassName('btn-computer');
  if(userRemain!==0){
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

//리팩토링이 적용되는 부분
function onComputerShoot(){
  let shootType = Math.random() < 0.5 ? 2:3;
  if(!isComputerTurn){
    alert("사용자의 차례입니다.");
    return;
  }
  if(shootType === 2){
    if(Math.random() < 0.5){
      showText("컴퓨터가 2점 슛을 성공했습니다!");
      updateComScore(2);
    }
    else{
      showText("컴퓨터가 2점 슛을 실패했습니다!");
    }
  }
  else{
    if(Math.random()<0.333){
      showText('<b>컴퓨터가 3점 슛을 성공했습니다!</b>');
      updateComScore(3);
    }
    else{
      showText("컴퓨터가 3점 슛을 실패했습니다!");
    }
  }
  isComputerTurn=false;

  disableComButton(true);
  disableUserButton(false);
}

function onUserShoot(shootType){
  let userRemainElement = document.getElementById('shots-left');
  if(isComputerTurn){
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
  userRemain--;
  userRemainElement.innerHTML = userRemain;
  isComputerTurn=true;

  disableComButton(false);
  disableUserButton(true);
  if(userRemain===0){
    if(comScore>userScore){
      //alert ('컴퓨터가 승리하였습니다!');
      showText('컴퓨터가 승리하였습니다!');
    }
    else if(comScore<userScore){
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