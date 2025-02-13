//스코프 개념 파악하기 Local vs Global

let comScore2=0;

function onComputerShoot2(){
  let comScore2=0;
  console.log('함수 안', comScore2);
}

onComputerShoot2();
console.log('함수 밖', comScore2);

