class Mammal {
  _name;
  _residence;

  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐호흡합니다.`);
  }
}

class Whale extends Mammal {
  constructor(name, residence) {
    super(name, residence);
  }

  // 오버라이딩 : 다형성의 일부분이기도 하다. 부모에게 상속받은 메소드를 자식이 재정의
  breath() {
    console.log(`눈누난나`);
  }

  swimming() {
    console.log(`${this._name}가 헤엄칩니다.`);
  }
}

class FlyingSquirrel extends Mammal {
   constructor(name, residence) {
    super(name, residence);
  }

  flying() {
    console.log(`${this._name}가 날아갑니다.`);
  }
}

const whale = new Whale('고래', '바다');
whale.breath();