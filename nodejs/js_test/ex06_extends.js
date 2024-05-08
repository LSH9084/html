console.log('===상위 클래스, 슈퍼클래스===')
class MyParent {
    parentMethod(){
        console.log('MyParent')
    }
}
class MyChild extends MyParent {
    childMethod(){
        console.log('MyChild : MyParent 클래스로부터 상속 받은 자식클래스')
    }
}
const myParent = new MyParent()
const myChild = new MyChild()
console.log('===상위 클래스===')
myParent.parentMethod()
console.log('===자식 클래스에서도 부모클래스에서 정의한 함수를 불러올 수 있다.===')
myChild.parentMethod()
console.log('===자식 클래스===')
myChild.childMethod()

console.log('3.==== class extends')

class Person{
    constructor(a,b){  //생성자는 상속이 안됨
        this.name = a
        this.age = b 
    }
    sayHello(){
        console.log(`sayHello= 이름: ${this.name} | 나이: ${this.age}`)
    }
}
class Sex extends Person {
    constructor(a,b,c){
        super(a,b)
        this.sex = c
    }
    saySex(){
        console.log(`saySex= 이름: ${this.name} | 나이: ${this.age} | 성별: ${this.sex}`)
    }
}
class Student extends Sex {
    constructor(a,b,c,d){
        super(a,b,c)
        this.grade = d
    }
    sayStudent(){
        console.log(`sayStudent= 이름: ${this.name} | 나이: ${this.age} | 성별: ${this.sex} | 성적: ${this.grade}`)
    }
}

const myPerson = new Person('홍길동',123)
const mySex = new Sex('홍길순',27,'남자')

mySex.sayHello()
mySex.saySex()


const myStudent = new Student('강감찬',13,'남자','A')

myStudent.sayStudent()
myStudent.saySex()
myStudent.sayHello()


