/*
프로그램 정의
1. 할 일 추가: 로컬 스토리지에 새로운 데이터 추가
2. 할 일 목록 렌더링: 로컬 스토리지에 저장된 데이터가 있는 경우 불러오기
3. 할 일 삭제: 로컬 스토리지에 해당 데이터 삭제
*/

// JSON.parse, JSON.stringify를 제일 많이 사용한다.

//1. 할 일 목록을 저장할 빈 배열 선언하기
let todos = [];

//DOMContentLoaded - 비동기 함수를 사용할 때 쓰는 표현
document.addEventListener('DOMContentLoaded',()=>{
  //todos 데이터를 JSON 형태로 파싱하고, 값이 없으면 빈 배열을 사용하도록 한다.
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos); //호이스팅을 이용해 밑에 정의할 예정
})

function addTodo(){
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();
  if(newTodo){ //값이 있기만 하면 true
    todos.push(newTodo); //새로운 할일 배열에 저장
    //localStorage에 저장
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    newTodo=''; //newTodo 초기화
  }
}
//2에서 element가 추가되면 다시 1파트의 addEventListener가 동작하여,
//localStorage에서 해당 요소를 get해온다.