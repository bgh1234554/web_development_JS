for(let i=1;i<=5;i++){
  console.log(i);
}

for(let i=10;i>=2;i-=2) {
  console.log(i);
}

//중첩 for문
for(let i=2;i<=9;i++){
  for(let j=1; j<=9; j++){
    console.log(`${i}*${j}=${i*j}`);
  }
}

for(let i=0;i<100;i++){
  if(i%3==0){
    continue;
  }
  if(i>10) break;
  console.log(i+"는 3의 배수가 아닙니다.")
}

const newArray = [11,22,33,44,55];

for(const element of newArray){
  console.log(element);
}
/**
 * JAVA에서와 마찬가지로, 중요한 점은
 * 향상된 for문의 작성 때문에 배열처럼 다수의 데이터를 다루는
 * collections에 해당하는 자료형은 변수(상수)명을 복수형으로 짓는 편이다.
 * 
 * ex - for(const name of names)
 */

const person03 = {
  name: "김곰곰",
  age: 38,
  isMarried: true
};

for(const key in person03){
  console.log(key, typeof(key));
  console.log(person03[key]);
}

/**
 * for in 문은 키-값 쌍으로 이루어져있는 객체에서 key를 순서대로 반환.
 * value를 출력하기 위해서는 객체명[키이름]으로 하면 됨.
 */

let i=2;
let j=1;
while(i<10){
  while(j<10){
    // console.log(i+"*"+j+"="+i*j);
    //파이썬의 f-string (f'문자열 {변수} 문자열') 같은거임.
    console.log(`${i}*${j}=${i*j}`)
    j++;
  }
  i++;
  j=1;
}

let a = 0;
while (a<100){
  //toPrint에 a를 대입한 뒤에 a에 1을 추가하니까
  //처음에는 toPrint가 첫번째 if문을 만나 다시 위로 올라간다.
  const toPrint=a++;
  if(toPrint%3===0) continue;
  if(toPrint>10) break;
  console.log(toPrint);
}
console.log("\n")
//do-while 문
let b = 12;
do{
  console.log(b++);
} while(b<1){
  console.log(b)
}

//일반 while문의 경우 조건식을 확인한 후 조건식이
//true라면 실행하지만, do-while문의 경우에는
//일단 실행 한번을 한 후에 진행한다.

// 이상의 코드에서 b=12라면 일단 출력 후 1을 더한 뒤
//while문의 조건을 검사한다.