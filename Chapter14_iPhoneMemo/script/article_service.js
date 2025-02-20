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
  titleInput.onkeyup = handleBoardInputChange;
  contentInput.onkeyup = handleBoardInputChange;
  writerInput.onkeyup = handleBoardInputChange;
}

function setButtonEvent(){
  const submitButton = document.querySelector('.write-submit-button')
  submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick(){
  saveBoard();
  clear();
}

function handleBoardInputChange(e){
  boardInputDatas = {
    ...boardInputDatas,//기존의 것은 그대로 불러오고
    [e.target.name]: e.target.value,
  };
}

//localStorage에 데이터 저장
function saveBoard(){
  let boardDatas = !!localStorage.getItem('boardDatas')
  ? JSON.parse(localStorage.getItem('boardDatas')) : [];
  if(boardDatas.length > 0){
    //마지막 인덱스의 아이디에 1 추가
    boardInputDatas.id = boardDatas[boardDatas.length-1].id+1;
  }

  boardDatas = {
    ...boardDatas,boardInputDatas,
  }
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