/*
프로그램 정의
1. 할 일 추가: 로컬 스토리지에 새로운 데이터 추가
2. 할 일 목록 렌더링: 로컬 스토리지에 저장된 데이터가 있는 경우 불러오기
3. 할 일 삭제: 로컬 스토리지에 해당 데이터 삭제
*/

// JSON.parse, JSON.stringify를 제일 많이 사용한다.

//1. 할 일 목록을 저장할 빈 배열 선언하기
let todos = [];

document.addEventListener('DOMContentLoaded',()=>{
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
})

function addTodo(){
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();
  if(newTodo){
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value='';
  }
}

//2. 할 일 목록 렌더링
function renderTodos(todos){
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.onclick = () => removeTodo(index);
    deleteBtn.classList.add('deleteBtn');
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

//3. 할 일 삭제
function removeTodo(index){
  todos.splice(index,1); 
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}