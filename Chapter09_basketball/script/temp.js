//스코프 개념 파악하기 Local vs Global

let comScore2=0;

function onComputerShoot2(){
  let comScore2=0;
  console.log('함수 안', comScore2);
}

onComputerShoot2();
console.log('함수 밖', comScore2);

//onComputerShoot 내에서는
//comScore2라는 변수가 없음에도 불구하고 아무런 문제 없이 0란 값이 찍힌다.

// function onComputerShoot() {
//   let comScore = 0;
  
//   console.log('함수 안', comScore);
// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 그리고 이상의 코드는 오류가 발생함을 확인할 수 있다.
// 함수 내에 선언된 지역 변수인 comScore를 main단계에서 확인할 수가 없기 때문이다.

let dog={
  name: "해피",
  age: 5,
  gender: "M",
  friends: ["나비","삐삐","엘리"]
}; //변수에 값 대입한거라 끝에 세미콜론을 붙여야 한다.

console.log(dog.friends);