//클래스에서 메소드 사용하기
class MyClass {
    constructor(){
        this.name = '홍길순'
        this.age = 13
    }
    myMethod(){
        console.log('이름: ',this.name)
    }
}

const obj1 = new MyClass()
obj1.myMethod()
console.log(obj1)

class MyScore {
    constructor(name, eng, kor, mat){
        this.name = name
        this.eng = eng
        this.kor = kor
        this.mat = mat
        this.tot = 0
        this.avg = 0
    }
    myTot(){
        this.tot = this.eng+this.kor+this.mat
    }
    myAvg(){
        this.avg = (this.tot/3)
    }
    myAA(){
        console.log('이름: '+this.name+'총점: '+this.tot+'평균: '+this.avg)
    }
}
const student = new MyScore('이상훈',100,90,10)
const student2 = new MyScore('홍길동',10,10,10)
student2.myTot()
student2.myAvg()

student.myTot()
student.myAvg()

console.log(student2.myAA(),student.myAA())
student.name = '동길이'
console.log(student2.myAA(),student.myAA())

