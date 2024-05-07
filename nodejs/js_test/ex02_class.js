//클래스 = 멤버변수 + 함수(메서드) 구성
// - 사용자가 정의한 자료형 타입
// 카멜 케이스 표기법 - 클래스명
class MyClass {
    // constructor(){
    //     console.log('클래스 생성될 때 1번 수행됩니다.')
    // }
    //인자가 있는 생성자
    // constructor(a,b,c){
    //     console.log(a,b,c)
    // }
    // 생성자로 멤버변수 정의
    constructor(a='황',b=13,c='blue'){
        this.name = a
        this.age = b
        this.color = c
    }
}

// const obj1 = new MyClass()
const obj2 = new MyClass()
const obj3 = new MyClass('홍길동',17,'red')
const obj4 = new MyClass(this.name,this.age, 'white')
const obj5 = new MyClass('호랑이',this.age, 'orange')
console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)
