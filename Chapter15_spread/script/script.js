// let boardInputDatas = {
//   id: 0,
//   title: "제목",
//   content: "내용",
//   writer: "작성자",
// };
// //비어있는 배열 생성
// let boardDatas = [];
// boardDatas.push(boardInputDatas);

// //객체의 title 속성을 변경
// boardInputDatas.title="제목2";

// //배열 확인
// console.log(boardDatas); //제목 3으로 출력된다.

// boardInputDatas.title="제목3";

let boardInputDatas = {
  id: 0,
  title: "제목",
  content: "내용",
  writer: "작성자",
};
//비어있는 배열 생성
let boardDatas = [];
boardDatas.push({...boardInputDatas});

//객체의 title 속성을 변경
boardInputDatas.title="제목2";

//배열 확인
console.log(boardDatas);
//결과: [{id: 0, title: "제목", content: "내용", writer: "작성자"}]

boardInputDatas.title = "제목3";

console.log(boardInputDatas);

let nestedObject = {
  id: 1,
  data: {
    title: "메모 제목"
  }
}

let copy = {...nestedObject}
copy.data.title = "수정된 제목"

console.log(copy);
//실행 결과: {id: 1, data: {title: '수정된 제목'}}
console.log(nestedObject);
//실행 결과: {id: 1, data: {title: '수정된 제목'}}
