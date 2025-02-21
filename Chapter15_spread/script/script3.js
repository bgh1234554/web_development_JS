let students2 = [
  {id: 1, name: "김일", grade: 85},
  {id: 2, name: "김이", grade: 72},
  {id: 3, name: "김삼", grade: 58},
  {id: 4, name: "김사", grade: 95},
  {id: 5, name: "이오", grade: 88}
];

//1. 성적이 80점 이상인 학생만 추출
const topStudents = students2.filter(student => student.grade >= 80);
console.log(`성적 우수 학생: `);
//console.log(`성적 우수 학생: ${topStudents}`); //Object object 출력
topStudents.forEach(topStudent => console.log(topStudent.name));
//백틱 안에 사용된 $가 객체를 자동으로 Object object로 바꾸는 일을 방지하기 위함
console.log(`성적 우수 학생: ${JSON.stringify(topStudents)}`);

//복잡한 방법
// const topStudents2 = topStudents.map(topStudent => `${topStudent.name} (${topStudent.grade}) `).join(',');
console.log(topStudents2);

//2. 성적이 60점 미만인 학생만 추출
const lowStudents = students2.filter(student=>student.grade<60);
console.log(`성적 미흡 학생: `);
lowStudents.forEach(lowStudent=>console.log(lowStudent.name));

//3. 이름이 김으로 시작하는 학생만 추출 -> startsWith 함수 사용!
// const kimStudents = students2.filter(student=>student.name[0]==="김");
const kimStudents = students2.filter(student=>student.name.startsWith("김"));
console.log(`김씨 성을 가진 학생:`);
kimStudents.forEach(kimStudent=>console.log(kimStudent.name));

//map 함수 연습
let fruits = ['apple','banana','cherry','durian'];

//.toUpperCase 메서드를 사용해 대문자 배열로 변환
let upperCaseFruits = fruits.map(fruit=>fruit.toUpperCase());
console.log(upperCaseFruits);

let nums = [1,2,3,4,5];
//element,index(0~4까지) 2개 인자 사용하는 맵 함수
let result = nums.map((num,index)=>`${index+1}번째 숫자는 ${num}`);
console.log(result);