let boardInputDatas = {
  id: 0, //PK 같은 것
  title: '',
  content: '',
  writer: '',
}; //변수 선언이니까 ;으로 마무리

function setInputsEvent(){
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)');
  const contentInput = document.querySelector('.main-article > textarea');
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)')
  //onkeyup 사용자가 키보드를 눌렀다가 뗄 때 발생하는 이벤트.
  //사용자가 입력 필드에 텍스트를 입력할 때마다 특정 함수를 호출하여 입력된 값을 처리할 수 있습니다.
  titleInput.onkeyup = handleBoardInputOnChange;
  contentInput.onkeyup = handleBoardInputOnChange;
  writerInput.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent(){
  const submitButton = document.querySelector('.write-submit-button')
  submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick(){
  saveBoard();
  clear();
}

function handleBoardInputOnChange(e){
  boardInputDatas = {
    ...boardInputDatas,//기존의 것은 그대로 불러오고
    [e.target.name]: e.target.value,// 이벤트가 발생한 요소의 name 속성과 value 값을 가져와서 업데이트
  };
}

//localStorage에 데이터 저장
function saveBoard(){
  let boardDatas = !!localStorage.getItem('boardDatas')
  ? JSON.parse(localStorage.getItem('boardDatas'))
  : [];

  //왜 나는 이걸 넣어줘야 되는거지? -> 다시 지워도 에러가 발생하지 않는다. 
  // if (!Array.isArray(boardDatas)) {
  //   boardDatas = [];
  // }

  if(boardDatas.length > 0){
    //마지막 인덱스의 아이디에 1 추가
    boardInputDatas.id = boardDatas[boardDatas.length-1].id+1;
  }

  //boardDatas.map is not a function 오류 수정 -> 괄호를 중괄호에서 대괄호로 변경
  boardDatas = [
    ...boardDatas,
    boardInputDatas,
  ]
  localStorage.setItem('boardDatas',JSON.stringify(boardDatas));
  alert('게시글 작성 완료');
  location.href = "./list.html";
}

//boardInputDatas 객체를 초기화한다.
function clear(){
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)');
  const contentInput = document.querySelector('.main-article > textarea');
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)');
  const inputs = [titleInput,contentInput,writerInput];
  //데이터를 비워준다.
  inputs.forEach(input => input.value='');
  boardInputDatas = {
    title: '',
    content: '',
    writer: '',
  };
}

setInputsEvent();
setButtonEvent();