const person01 = {
  name: "김철수",
  age: 25,
  address: "부산광역시 연제구",
  married: false
}

const myArray = [true, 3.14, 123, "Hello", person01];

console.log(myArray,myArray.length)
//java하고는 달리 length 뒤에 괄호가 없다.

console.log(!myArray[0],myArray[1],myArray[2],myArray[3],myArray[4])
/*
배열 내부에 있는 각 element들의 자료형을 감안하는 것이 중요하다.
여기서는 배열 안에 다른 자료형의 원소들이 들어갈 수 있기 때문이다.

파이썬처럼 하나의 배열 내에서도 다양한 방식의 데이터 조작이 가능하다.
*/

console.log(myArray[1]*10);

myArray.pop();
console.log(myArray)

myArray.push("Hello World");
console.log(myArray);

myArray.push(123);
console.log(myArray);
console.log(myArray.length);
const popped = myArray.pop();
//매개변수로 아무것도 없으면 가장 뒤에 있는 데이터 삭제
//myArray에서는 123이 삭제된다. 그 삭제된 123을 popped라는 상수에 대입함.
console.log(myArray);
console.log(popped); //123

//객체와 배열의 중첩 사용 관련 코드

const person02 = {
  //Property (Key: value)
  name: "홍길동",
  age: 30,
  languages: ["Korean", "English", "Japanese"],
  education: {
    school: "백제대",
    major: ["컴퓨터공학","영어교육과"],
    graduated: true
  }
};

console.log(person02.education.major);
console.log(person02.languages[2]);