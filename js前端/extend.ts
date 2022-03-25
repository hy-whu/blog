interface IPerson {
  name: string;
  getName: () => void;
}
class Person implements IPerson {
  public name: string
  public constructor (name: string) {
    this.name = name
  }

  // 原型方法
  // 即 Person.prototype.getName = function() { }
  // 下面可以简写为 getName() {...}
  getName = function () {
    console.log('Person:', this.name)
  }
}

class Gamer extends Person {
  public age: number
  constructor (name, age) {
    // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
    super(name)
    this.age = age
  }
}
const asuna = new Gamer('Asuna', 20)
asuna.getName() // 成功访问到父类的方法
