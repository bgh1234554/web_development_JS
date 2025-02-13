let comScore = 0; //매번 초기화되면 안되니까 전역변수로 지정.
let userScore = 0;
let comRemain = 15;
let userRemain = 15;
let isComputerTurn = true;
function onComputerShoot(){
  let shootType = Math.random() < 0.5 ? 2:3;
  let textElement = document.getElementById('text');
  let comScoreElement = document.getElementById('computer-score');
  //점수 총합을 대입할 변수 선언
  if(userRemain===0){
    let comScore2 = Number(document.getElementById('computer-score').innerHTML);
    let userScore2 = Number(document.getElementById('user-score').innerHTML);
    if(comScore2>userScore2){
      alert("컴퓨터가 승리하였습니다!")
    }
    else if(comScore2<userScore2){
      alert("당신이 승리하였습니다!")
    }
    else{
      alert("비겼습니다!")
    }
    return;    
  }
  if(!isComputerTurn){
    alert("사용자의 차례입니다.");
    return;
  }
  if(comRemain === 0){
    alert("컴퓨터가 슛을 마쳤습니다.");
    return;
  }
  if(shootType === 2){
    if(Math.random() < 0.5){
      // 2점 슛을 1/2확률로 성공시킨다고 하자.
      textElement.innerHTML = "컴퓨터가 2점 슛을 성공했습니다!";
      comScore += 2;
      comScoreElement.innerHTML = comScore;
    }
    else{
      //실패한 경우
      textElement.innerHTML = "컴퓨터가 2점 슛을 실패했습니다!";
    }
  }
  else{
    if(Math.random()<0.333){
      //3점슛 성공한 경우
      textElement.innerHTML = "<b>컴퓨터가 3점 슛을 성공했습니다!</b>";
      comScore +=3;
      comScoreElement.innerHTML = comScore;
    }
    else{
      //실패한 경우
      textElement.innerHTML = "컴퓨터가 3점 슛을 실패했습니다!";
    }
  }
  comRemain--;
  isComputerTurn=false;

  let computerButtons = document.getElementsByClassName('btn-computer');
  for(let i=0;i<computerButtons.length;i++){
    computerButtons[i].disabled = true;
  }
  let userButtons = document.getElementsByClassName('btn-user');
  for(let i=0;i<userButtons.length;i++){
    userButtons[i].disabled = false;
  }
}

function onUserShoot(shootType){
  let userScoreElement = document.getElementById('user-score');
  let userRemainElement = document.getElementById('shots-left');
  let textElement = document.getElementById('text');
  if(isComputerTurn){
    alert("컴퓨터의 차례입니다.");
    return;
  }
  if(shootType === 2){
    if(Math.random() < 0.5){
      // 2점 슛을 1/2확률로 성공시킨다고 하자.
      textElement.innerHTML = "2점 슛을 성공했습니다!";
      userScore += 2;
      userScoreElement.innerHTML = userScore;
    }
    else{
      //실패한 경우
      textElement.innerHTML = "2점 슛을 실패했습니다!";
    }
  }
  else{
    if(Math.random()<0.333){
      //3점슛 성공한 경우
      textElement.innerHTML = "<b>3점 슛을 성공했습니다!</b>";
      userScore +=3;
      userScoreElement.innerHTML = userScore;
    }
    else{
      //실패한 경우
      textElement.innerHTML = "3점 슛을 실패했습니다!";
    }
  }
  userRemain--;
  userRemainElement.innerHTML = userRemain;
  isComputerTurn=true;

  let computerButtons = document.getElementsByClassName('btn-computer');
  for(let i=0;i<computerButtons.length;i++){
    computerButtons[i].disabled = false;
  }
  let userButtons = document.getElementsByClassName('btn-user');
  for(let i=0;i<userButtons.length;i++){
    userButtons[i].disabled = true;
  }
}