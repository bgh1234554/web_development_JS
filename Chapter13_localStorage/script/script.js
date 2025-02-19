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
    //newTodo=''; //newTodo 초기화
    input.value=''; //입력 창 초기화
  }
}

//2. 할 일 목록 렌더링
function renderTodos(todos){
  const list = document.getElementById('todo-list');
  list.innerHTML = ''; //리스트 초기화
  todos.forEach((todo, index) => {
    const li = document.createElement('li'); //요소 생성, 태그 지정
    li.textContent = todo; //텍스트 지정

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제'; //각 todo 리스트를 지우기 위해 삭제 버튼을 내부에 만드는 것.

    //삭제 버튼은 renderTodos()를 호출했을 때 <li>가 만들어지고, <button>이 생성되기 떄문에
    //기능과 관련한 부분이 없다. -> renderTodos() 내부에 button의 삭제 기능을 구현해야 한다.

    deleteBtn.onclick = () => removeTodo(index); //삭제 버튼 클릭 시 removeTodo() 호출
    //deleteBtn.addEventListener('click', removeTodo(index)); //위와 같은 기능을 하는 코드
    //deleteBtn.addEventListener('click', function(){removeTodo(index)}); //위와 같은 기능을 하는 코드
    deleteBtn.classList.add('deleteBtn');
    li.appendChild(deleteBtn); //li에 (list 내에) 삭제 버튼 추가
    list.appendChild(li); //list에 li 추가
    // ul > li > button 과 같은 구조가 된다.
  });
}
//2에서 element가 추가되면 다시 1파트의 addEventListener가 동작하여,
//localStorage에서 해당 요소를 get해온다.

//3. 할 일 삭제
function removeTodo(index){
  //splice 함수는 20250212.md 참조
  /*
  배열의 요소를 추가, 제거, 교체할 수 있는 강력한 메서드이다.

    * 인수 목록
    * `start`: 배열의 변경을 시작할 인덱스
    * `deleteCount`: 배열에서 제거할 요소의 수
    * `items`: 배열에 추가할 요소 수 (삭제만 할 경우 필요 없음.)
  */
  todos.splice(index,1); 
  //배열에서만 삭제해봤자, localStorage에는 삭제되지 않는다.
  //다시 읽어오게 된다면 삭제된 요소가 다시 나타난다.
  //따라서 localStorage에서도 삭제해야 한다.
  //삭제한 배열로 다시 세팅.
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos); //이후 다시 불러온다.
}