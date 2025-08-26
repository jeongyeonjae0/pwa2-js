class MyClass {
  // public : 클래스 내외부 어디서든 접근 가능, 캡슐화가 깨짐
  name; // 프로퍼티(기본) 
  // private : 클래스 내부에서만 접근 가능 
  #age; 
  // protected : 나(객체 내부)와 그리고 상속관계에서 자식클래스들은 접근이 가능, 사용에 주의(자바 스크립트에서는 없음), 자바 스크립트에서는 pubilc처럼 나온다.  
  _addr; 
  static gender = 'M'; // 클래스 정적 변수(프로퍼티), 메소드 앞에 붙여서 사용 가능 : new 안해도 접근이 가능, 메모리 문제(리소스 낭비가 큼), 캡슐화 문제 

  // 생성자 메소드 
  // 'new' 키워드로 객체를 인스턴스화 할 때 딱 한번 실행되는 메소드 
  constructor(name, age, addr) {   // 기본이 생략 , 초기 값 생성 하기 위해 
    this.name = name;
    this.#age = age;
    this._addr = addr; 
  }
  // getter / setter  
  // 주의할 점 : 메소드지만 사용할 때 프로퍼티 사용 하듯이 동작한다. 
  get age() {
    return this.#age;
  } 
  set age(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  // 인스턴스 메소드 
  add(a, b) {
    return a + b;
  }
}
// string, array는 인스턴스화 되어있음. 
const myClass = new MyClass('홍길동', 20, '조선');  // 객체를 인스턴스화(해당 클래스를 메모리에 공간을 할당, 준비 단계) 하기 위해서는 new(키워드)로 해야 함   
const myClass2 = new MyClass('갑순이', 10, '한국'); 
let addNum = myClass.add(5, 10); // 점을 통해 메소드와 객체의 프로퍼티에 접근 
console.log(addNum);
console.log(MyClass.gender); // static에 접근 
console.log(myClass.name);   // public, private는 인스턴스화 -> 상수나, 변수에 저장 한 후에 접근해야함. 
console.log(myClass.getAge());
console.log(myClass.age);
myClass.age = 40; 
console.log(myClass.age); // age = getter 메소드명 -> 캡슐화와 개방폐쇄 원칙 
console.log(myClass2.name);
