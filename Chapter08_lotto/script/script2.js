const availablenum2 = [];
for(let i=0;i<45;i++){
  availablenum2.push(i+1);
}
const lottoNum2 = [];
for(let i=0;i<6;i++){
  //리터럴 사용 지양을 위해 45 대신 availablenum2.length를 사용한다.
  let index2 = Math.floor(Math.random()*availablenum2.length);
  const newNum = availablenum2.splice(index2,1);
  lottoNum2.push(newNum[0]);
  //splice는 배열을 반환하기 때문에 0번째 인덱스라 지정해줘야 한다.
}
lottoNum2.sort((a,b)=>a-b);
/**
 * function compare(a,b){
  if(a<b){
    return -1;
  }
  if(a>b){
    return 1;
  }
  return 0;
}
lottoNum2.sort(compare);
대신 사용
 */

//콘솔이 아닌 브라우저에 찍히도록 해보자
for(let i=0;i<6;i++){
  document.write('<span class=ball>'+lottoNum2[i]+' '+'</span>'); //개행도 없고 HTML 문서를 무시하고 맨 위에 찍힌다.
}
//document.write 내부에는 HTML 서식을 사용할 수 있다.

//span에 스타일 먹여보기 -> style.css 파일 생성