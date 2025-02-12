//방법 1 - 가능한 번호 배열에서 랜덤으로 뽑아와 로또 번호 배열에 넣고 출력
const availablenum = [];
for(let i=0;i<45;i++){
  availablenum[i]=i+1;
}
const lottoNum = [];
for(let i=0;i<6;i++){
  //리터럴 사용 지양을 위해 45 대신 availablenum.length를 사용한다.
  let index = Math.floor(Math.random()*availablenum.length);
  const newNum = availablenum.splice(index,1);
  lottoNum.push(newNum[0]);
  //splice는 배열을 반환하기 때문에 0번째 인덱스라 지정해줘야 한다.
}
console.log(lottoNum.sort());

/*
방법 2 - Set 자료구조 사용해서 중복 제거하기
const numbers = new Set();
while (numbers.size < 6) {
  let int = Math.floor(Math.random() * 45) + 1;
  numbers.add(int);
}
console.log(Array.from(numbers));

Set 주요 메서드
.size - 크기 반환 O(1)
add(value) 평균적으로 O(1)
has(value) 평균적으로 O(1)
delete(value) 평균적으로 O(1)
clear() - 모든 값 제거 O(n)
forEach(람다 함수) - JAVA에서 stream의 map과 같은 함수. O(n)
values() - Iterator 객체 반환. O(n)
const set = new Set([1, 2, 3]); O(n)

const iterator = set.values();
for (let value of iterator) {
  console.log(value);
}
// 1
// 2
// 3

entries() - Set의 각 값에 대한 [value, value] 쌍을 포함하는
새로운 Iterator 객체를 반환합니다. Map 객체와의 호환성을 위해 제공됩니다

const set = new Set([1, 2, 3]);
const iterator = set.entries();
for (let entry of iterator) {
  console.log(entry);
}
// [1, 1]
// [2, 2]
// [3, 3]

*/