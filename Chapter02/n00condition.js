if (true) console.log("Always True");
if (false) console.log("Not Executed");

let open = true;
if(open) console.log("It's opened");
else console.log("It's closed");

open = false;
if(open) console.log("It's opened");
else console.log("It's closed");

let n=1;
if(n>0){
  console.log(`${n} is positive`);
}

/*
if내의 조건식이 참이면 else는 실행되지 않음.
true나 false인 구조니까.
*/

const yoot = "도";
if(yoot==="도"){
  console.log("한칸 전진");
} else if (yoot==="개"){
  console.log("두칸 전진");
} else if (yoot==="걸"){
  console.log("세칸 전진");
} else if (yoot==="윷"){
  console.log("네칸 전진")
} else if (yoot==="모"){
  console.log("다섯칸 전진")
} else if (yoot==="빽도"){
  console.log("한칸 뒤로")
} else {
  console.log("Invalid Input")
}

switch(yoot){
  case "도":
    console.log("한칸 전진");
    break;
  case "개":
    console.log("두칸 전진");
    break;
  case "걸":
    console.log("세칸 전진");
    break;
  case "윷":
    console.log("네칸 전진");
    break;
  case "모":
    console.log("다섯칸 전진");
    break;
  case "빽도":
    console.log("한칸 뒤로");
    break;
  default:
    console.log("Invalid Input");
}

/**
 * switch 문 주의사항
 * switch의 () 내에는, string, number 모두 올 수 있다.
 * 그 값이 무엇에 해당하는 지에 따라 case에 입력할 수 있다.
 * case "도" -> 가능
 * case 1 -> 가능
 * default의 경우에는 해당하는 case가 없을 때 실행된다.
 * break; 없으면 case에 한번 통과되어도 그 다음 case도 실행이 된다.
 */