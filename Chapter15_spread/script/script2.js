// students 배열을 선언 및 초기화
let students = [];

//새로운 학생 추가
function addStudent(name, age, gender, grade){
  const newStudent = {
    id: students.length+1,
    // 객체의 키와 값이 동일할 때 사용하는 축약 문법
    name, // 객체의 키와 값이 동일할 때 사용하는 축약 문법
    age,
    gender,
    grade,
  };

  //원본 객체가 아닌 복사본을 배열에 추가
  //id가 순서대로 정렬되어야 하니까 위치를 고정시킴.
  students = [...students, {...newStudent}];
  console.log(`학생 추가 완료: ${newStudent.name}`);
}

//학생 성적 업데이트 - PK를 기준으로 새로운 성적 업데이트
function updateGrade(studentId, newGrade){
  students = students.map(student => 
    //객체 깊은 복사시 데이터 업데이트 할 때, 뒤에 내용 업데이트 가능
    //우리가 article_service.java에서 handleBoardInputOnChange 함수로 글 업데이트 했듯이
    student.id === studentId ? { ...student, grade: newGrade } : student
  );
  console.log(`학생 성적 업데이트 완료: Id - ${studentId}`);
}

//전체 학생 목록 출력
function printStudents(){
  console.log("학생 목록: ")
  //students 안에 있는 각 요소 하나하나를 출력하라.
  //console.log 안에서 forEach문을 수행하면 마지막에 undefined가 나온다.
  students.forEach(student=>console.log(student.name));
}

//80점 이상인 성적 우수 학생 걸러내는 필터링 적용 함수
function getTopStudents(){
  const topStudents = students.filter(student => student.grade >= 80);
  console.log("우수 학생 명단");
  topStudents.forEach(topStudent => console.log(`이름: ${topStudent.name} 성적: ${topStudent.grade}점`))
}
//그냥 console.log(topStudent)로 하면 객체가 전부 출력되기 때문에 가독성이 떨어져 보일 수 있다.

addStudent("홍길동", 20, "남자",100);
addStudent("김철수",22,"남자",65);
addStudent("박영희",19,"여자",52);
addStudent("정지원",23,"여자",89);

console.log(students);
printStudents();

updateGrade(2,75);

console.log(students);
printStudents();

getTopStudents();