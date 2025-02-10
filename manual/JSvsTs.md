# JavaScript VS TypeScript
## JavaScript의 단점
JavaScript는 웹 개발에서 널리 사용되는 언어이지만, 몇 가지 단점이 있다:

1. **동적 타입 언어**: JavaScript는 동적 타입 언어로, **변수의 타입이 런타임에 결정**된다. 이는 타입 오류를 사전에 방지하기 어렵게 만든다.
2. **컴파일 단계 없음**: JavaScript는 인터프리터 언어로, 브라우저에서 직접 실행된다. 이는 코드의 안정성과 최적화를 어렵게 만든다.
3. **객체 지향 프로그래밍 지원 부족**: JavaScript는 프로토타입 기반의 객체 지향 언어로, **클래스와 상속 개념이 부족**하다.
4. **개발 도구 지원 제한**: JavaScript는 타입 정보가 부족하여 코드 완성, 리팩토링, 디버깅 등의 개발 도구 지원이 제한적이다.
5. **대규모 프로젝트에서의 유지보수 어려움**: JavaScript는 대규모 코드베이스에서 코드의 유지보수성과 확장성을 높이는 데 어려움이 있다.

## TypeScript란?
TypeScript는 Microsoft에서 개발한 오픈 소스 프로그래밍 언어로, JavaScript의 상위 집합이다. TypeScript는 이러한 JavaScript의 단점을 보완하기 위해 만들어졌으며, 정적 타입 검사와 최신 JavaScript 기능을 지원하여 코드의 안정성과 가독성을 높일 수 있다.

### TypeScript의 주요 특징
1. **정적 타입 검사**: TypeScript는 **컴파일 타임에 타입 오류를 잡아내어** 런타임 오류를 줄이는 데 도움이 된다. 이를 통해 더 안전하고 신뢰할 수 있는 코드를 작성할 수 있다.
2. **최신 JavaScript 기능 지원**: TypeScript는 최신 ECMAScript 표준을 기반으로 하며, 최신 JavaScript 기능을 사용할 수 있다. 또한, 구형 브라우저에서도 사용할 수 있도록 트랜스파일링을 지원한다.
3. **객체 지향 프로그래밍 지원**: TypeScript는 **클래스, 인터페이스, 상속, 접근 제어자 등 객체 지향 프로그래밍(OOP) 개념을 지원**한다.
4. **개발 도구 통합**: TypeScript는 Visual Studio Code와 같은 IDE에서 강력한 코드 완성, 리팩토링, 디버깅 기능을 제공한다.
5. **대규모 프로젝트에 적합**: TypeScript는 대규모 코드베이스에서 코드의 유지보수성과 확장성을 높이는 데 도움이 된다.

### TypeScript와 JavaScript의 차이점
1. **타입 시스템**: JavaScript는 동적 타입 언어인 반면, TypeScript는 정적 타입 언어로, 변수와 함수의 타입을 명시적으로 지정할 수 있다.
2. **컴파일 단계**: JavaScript는 인터프리터 언어로, 브라우저에서 직접 실행된다. 반면, TypeScript는 컴파일 언어로, JavaScript로 트랜스파일된 후 브라우저에서 실행된다.
3. **객체 지향 프로그래밍**: JavaScript는 프로토타입 기반의 객체 지향 언어로, 클래스와 상속 개념이 부족하다. TypeScript는 클래스, 인터페이스, 상속, 접근 제어자 등 객체 지향 프로그래밍 개념을 지원하여 더 구조적이고 유지보수하기 쉬운 코드를 작성할 수 있다.
4. **개발 도구 지원**: JavaScript는 타입 정보가 부족하여 코드 완성, 리팩토링, 디버깅 등의 개발 도구 지원이 제한적이다. TypeScript는 강력한 타입 시스템 덕분에 이러한 개발 도구 지원이 더 강력하다.

### TypeScript의 장점
- **코드 안정성**: 정적 타입 검사를 통해 코드의 오류를 사전에 방지할 수 있다.
- **가독성**: 명시적인 타입 선언을 통해 코드의 의도를 명확히 할 수 있다.
- **생산성**: 강력한 개발 도구 통합을 통해 개발 생산성을 높일 수 있다.
- **호환성**: 기존 JavaScript 코드와 호환되며, 점진적으로 TypeScript로 마이그레이션할 수 있다.

TypeScript는 JavaScript 개발자에게 익숙한 문법을 유지하면서도, 정적 타입 검사와 객체 지향 프로그래밍 기능을 추가하여 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있게 해준다.

### TypeScript를 HTML과 연동시키는 방법
1. TypeScript 파일 생성: index.ts 파일을 생성한다.
1. TypeScript 코드 작성: index.ts 파일에 TypeScript 코드를 작성한다.\
터미널에서 다음 명령어를 실행하여 TypeScript 파일을 JavaScript로 컴파일한다.
```cmd
tsc index.ts
```
이렇게 하면 index.js 파일이 생성된다.
3. TypeScript 컴파일: TypeScript 코드를 JavaScript로 컴파일한다.
4. HTML 파일에 JavaScript 포함: 컴파일된 JavaScript 파일을 HTML 파일에 포함시킨다.

## 배열 선언 방법
* JS
```javascript
  const myArray = [true, 3.14, 123, "Hello", { name: "김철수", age: 25 }];
  console.log(myArray);
```

* TS
```typescript
  const numbers: number[] = [1, 2, 3, 4, 5];
  console.log(numbers);
```

### 객체의 배열
```typescript
interface Person {
  name: string;
  age: number;
  address: string;
  married: boolean;
}

const personArray: Person[] = [
  { name: "김철수", age: 25, address: "부산광역시 연제구", married: false },
  { name: "홍길동", age: 30, address: "서울특별시 강남구", married: true }
];
console.log(personArray);
```

## TS에서의 함수
```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

### 선택적 매개변수
#### JavaScript에서
JavaScript에서는 선택적 매개변수를 직접 지원하지 않지만, 기본값을 사용하거나 undefined를 체크하는 방식으로 유사한 기능을 구현할 수 있다.
##### 기본값 사용
```javascript
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("World")); // "Hello, World!"
console.log(greet("World", "Hi")); // "Hi, World!"
```
##### `undefined` 체크
```javascript
function greet(name, greeting) {
  greeting = greeting || "Hello";
  return `${greeting}, ${name}!`;
}

console.log(greet("World")); // "Hello, World!"
console.log(greet("World", "Hi")); // "Hi, World!"
```
#### TypeScript에서
TypeScript에서 선택적 매개변수는 ? 기호를 사용하여 지정할 수 있다.

```typescript
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

console.log(greet("World"));
console.log(greet("World", "Hi"));
```
어떻게 보면 두 언어 모두에서 지원하는 기능이다, TS 쪽이 가독성과 유지보수성에서 유리한 면이 있다.
### 함수 타입을 인터페이스로 정의
함수 타입을 인터페이스로 정의할 수도 있다.

```typescript
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;

console.log(add(2, 3));
```

### 제네릭
TS는 제네릭을 지원한다.
```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));
```

## 클래스와 모듈
JavaScript에서는 클래스 멤버의 접근 제어자를 명시적으로 지정할 수 없다. 모든 멤버는 기본적으로 public이다.\
TypeScript에서는 클래스의 생성자와 접근 제어자를 사용하여 클래스 멤버의 가시성을 제어할 수 있다. Java와 마찬가지로 public, private, protected 접근 제어자를 사용할 수 있으며, 상속도 지원한다.\
생성자를 만들 때 `constructor` 키워드를 사용한다는 것이 특이하다.
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("김철수", 25);
console.log(person.greet());
```
```typescript
class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public greet(): string {
    return `Hello, my name is ${this.name}`;
  }

  private getAge(): number {
    return this.age;
  }

  protected getAddress(): string {
    return this.address;
  }
}

const person = new Person("김철수", 25, "부산광역시 연제구");
console.log(person.greet());
// console.log(person.age); // 오류: 'age'는 private 멤버입니다.
// console.log(person.getAge()); // 오류: 'getAge'는 private 멤버입니다.
// console.log(person.address); // 오류: 'address'는 protected 멤버입니다.
```
### 추상클래스, 인터페이스, 상속
TypeScript에서도 Java와 유사하게 추상클래스와 인터페이스를 정의하고 클래스를 통해 구현할 수 있다. 똑같이 `extends`와 `implements` 키워드를 사용한다. 
```typescript
// 인터페이스 정의
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// 추상 클래스 정의
abstract class PersonImpl implements Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 추상 메서드
  abstract greet(): string;
}

// Employee 클래스는 PersonImpl 추상 클래스를 상속받아 구현
class Employee extends PersonImpl {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // 추상 메서드 구현
  greet(): string {
    return `Hello, my name is ${this.name} and I am a ${this.jobTitle}`;
  }
}

const employee = new Employee("홍길동", 30, "Software Engineer");
console.log(employee.greet());
```
1. 인터페이스
 * Person 인터페이스는 name, age 속성과 greet 메서드를 정의한다. 이 인터페이스를 구현하는 클래스는 이 속성과 메서드를 반드시 포함해야 한다.
2. 추상 클래스
 * PersonImpl 추상 클래스는 Person 인터페이스를 구현하며, name과 age 속성을 정의합니다.
 * greet 메서드는 추상 메서드로 정의되어 있으며, 이 클래스를 상속받는 클래스에서 반드시 구현해야 한다.
3. Employee 클래스
 * Employee 클래스는 PersonImpl 추상 클래스를 상속받아 구현한다.
 * jobTitle 속성을 추가하고, greet 메서드를 구현한다.
4. 객체 생성 및 메서드 호출
 * Employee 클래스의 인스턴스를 생성하고, greet 메서드를 호출하여 결과를 출력한다.
### `constructor` 키워드
TypeScript에서는 클래스에 여러 개의 생성자를 직접 정의할 수 없다. 그러나, **생성자 오버로딩을 구현하는 방법으로 여러 개의 생성자와 유사한 기능을 제공할 수 있다.** 이를 위해 생성자 내부에서 조건문을 사용하여 매개변수의 타입과 개수에 따라 다른 초기화 로직을 수행할 수 있다.
```typescript
class Person {
  public name: string;
  public age: number;
  public address: string;

  // 단일 생성자 정의
  constructor(name: string);
  constructor(name: string, age: number);
  constructor(name: string, age: number, address: string);
  constructor(name: string, age?: number, address?: string) {
    this.name = name;
    //undefined가 아닌게 참이면 그대로 대입, 아니면 뒤의 기본값이 적용됨.
    this.age = age !== undefined ? age : 0;
    this.address = address !== undefined ? address : "Unknown";
  }
  //여러 개의 생성자 시그니처를 정의하여 다양한 매개변수 조합을 지원한다.
  //실제 구현은 마지막 생성자에서 조건문을 사용하여
  //매개변수의 타입과 개수에 따라 다른 초기화 로직을 수행한다.
  public greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I live in ${this.address}`;
  }
}

const person1 = new Person("김철수");
const person2 = new Person("홍길동", 30);
const person3 = new Person("이영희", 25, "서울특별시 강남구");

console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
```
## 유니온 타입 지원
TypeScript는 여러개의 타입을 받을 수 있는 유니온 타입을 지원한다.
```typescript
type StringOrNumber = string | number;

function printValue(value: StringOrNumber) {
  if (typeof value === "string") {
    console.log(`String: ${value}`);
  } else {
    console.log(`Number: ${value}`);
  }
}
```