function countTo(to){
  for(let i=0;i<to+1;i++){
    console.log(i);
  }
}

countTo(5);

function sumTo(to){
  let sum=0;
  for(let i=1;i<=to;i++){
    sum+=i;
  }
  return sum;
}

console.log(sumTo(5));

//실행문이 한줄일 경우
const multiply = (x,y) => x*y;
console.log(multiply(2,3));

//실행문이 여러줄일 경우
const multiply2 = (x,y) => {
  console.log(`Multiplying ${x} and ${y}`); //백틱을 활용한
  console.log(`The answer is ${x*y}`);
  return x*y;
}
multiply2(2,7);