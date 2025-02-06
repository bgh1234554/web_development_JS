//alert("Hello World");
console.log("Hello World!");

let darkModeOn = true;
//TypeScript에서는 let darkModeOn: boolean = true;
//와 같이 형식 주석을 이용해 변수에 타입을 명시적으로 지정할 수 있다.
const PI = 3.141592;
//index.html 파일 생성하기

let a = 1;
a = 2;
console.log(a);

let b=a;
console.log(a,b);

//Java와의 차이점
a = "안녕하세요"
b = true
console.log(a,b);
//파이썬처럼 변수 타입에 대한 엄격한 기준이 없다.

const A = 5;
console.log(A);

// A = 10; //Assignment to constant variable.
// console.log(A);

let bool01 = true;
let bool02 = false;
console.log(bool01,bool02);
console.log(typeof(bool01), typeof(bool02));

let z = 1;
console.log(typeof(z))
//int가 아니라 number가 반환된다.

let bool03 = !true;
console.log(bool03);

//JS를 VSCode의 Extension인 Code Runner로 돌리려면, Node.js가 설치되어 있어야 한다. 인코딩의 문제가 아니다.

let num = 10 //정수
let num2 = 10.1 //실수

console.log(typeof(num),typeof(num2));
//변수 이름 잘못 입력하면 undefined가 나온다.

console.log(1+2)
console.log(1-2)
console.log(1*2)
console.log(1/2)
console.log(1%2)

const num3 = (num+num2)*10;
console.log(num3);

const str1 = "Hello"
const str2 = 'World'
console.log(str1,str2);
console.log(typeof(str1),typeof(str2), typeof('1'));

let str03 = str1+str2;
console.log(str03);

str03 += "💕😂😍";
console.log(str03);

/*
undefined VS null
*/
let x;
console.log(x,typeof(x));
//출력 결과 - undefined 'undefined'
//typeof가 반환하는 값은 문자열이라 따옴표로 감싸져서 나온다.

const a1 = 1;
const a2 = 1;
const a3 = '1';
const a4 = 2;

console.log(a1==a2, a1!=a2);
console.log(a1==a3, a1!=a3); //true false
console.log(a1==a4, a1!=a4);

console.log(a1===a3, a1!==a3); //false true
console.log(a1>a2,a1>=a2,a1<=a2);
//false true true
console.log(a1>a3,a1>=a3,a1<=a3);
//false true true

//상수가 너무 많아질 경우에는 소문자로 상수 변수를 만들 때도 있다.
const str01 = "ABC";
const str02 = "DEF";
console.log(str01==="ABC"); //true, 나머지는 false
console.log(str01>str02);
console.log(str01==str02);
console.log(str01===str02);
//문자열의 경우 알파벳 순서상 뒤에 올 경우 크다고 판단한다.

//삼항연산자 관련
let b1 = true;
let result = b1 ? "참" : "거짓";
console.log(result);

let num05 = 26;
console.log(
  "num05는 03의 배수" + (num05%3===0 ? "입니다." : "가 아닙니다."))

//객체, 프로퍼티 관련
const person01 = {
  name: "김철수",
  age: 25,
  address: "부산광역시 연제구",
  married: false
}
//key에 큰따옴표가 없기 때문에 JSON이 아니다. JSON하고 비슷하게 생긴 것 뿐이다.

console.log(typeof(person01));
console.log(person01);
/*
{
    "name": "김철수",
    "age": 25,
    "address": "부산광역시 연제구",
    "married": false
}
개발자 도구에 우클릭해서 copy object를 클릭하니, JSON 형태로 복사되었다.
*/

//객체 접근 방법 -> Java와 동일
//1. 인스턴스 변수처럼 접근하는 방법.
console.log(person01.name);
//2. Java에서의 Map 자료형과 같은 방식.
console.log(person01["name"]);
console.log(person01.age);
console.log(person01.address);
console.log(person01.married);

const personAge = person01.age;
const isMarried = typeof(person01["married"])

console.log(personAge,isMarried)

//객체를 통해서 지정한 value를 상수에 저장하여 (#1와 #2 이용)
//특정 값만 산출한 후에, 걔네만 console에 출력하였다.

//객체에 프로퍼티를 추가하는 방식. JAVA보다 자유롭다.
//JAVA에서는 새로운 인스턴스를 바로바로 만들거나, public private을 이용해서
//getter, setter을 사용해야 하는데, JS는 그냥 편하게 출력된다.
//그냥 객체를 출력해도 toString() 메서드 정의 없이 알아서 출력한다.
person01.job = "programmer";
person01["bloodtype"]="O";
console.log(person01.job,person01.bloodtype);
/*
{
    "name": "김철수",
    "age": 25,
    "address": "부산광역시 연제구",
    "married": false,
    "job": "programmer",
    "bloodtype": "O"
}
*/
//기존 프로퍼티 수정 방식
person01.age++;
person01["job"]="teacher";
console.log(person01.age,person01.job);