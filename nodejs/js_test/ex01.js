// 1. 사용자 객체 만들기
var Picture = new Object()
Picture.name = "길순이"
Picture.age = 10
Picture.info = function(){
    console.log("당신의 이름은 "+this.name+"입니다")
}
console.log(Picture.name , Picture.age , Picture.info())
console.log(Picture)

// 리터럴 방식으로 객체 만들기
var Picture2 = {
    name : '강감찬',
    age : 11,
    info : function(){
        console.log("당신의 이름은 "+ this.name+"입니다")
    }, 
    info2 : function(name ,age){
        console.log('이름: '+name+", 나이: "+age)
    }
}
Picture2.height = 100
console.log(Picture2)
console.log(Picture2.name , Picture2.age, Picture2.info(), Picture2.info2("강감찬",12))

// 객체와 배열의 차이는 객체에는 기억장소의 이름이 있지만 배열에는 없다.

var student = {
    name : '홍길동',
    age : 20,
    mat : 100,
    eng : 50,
    kor : 30,
    tot : function(){
        return (" 총점은 : " + (this.eng + this.mat + this.kor) +"입니다")
    },
    avg : function(){
        return (" 평균은 : "+ (this.eng+this.mat+this.kor)/3 + "입니다")
    }
}

console.log("학생의 이름은 : "+student.name+student.tot()+student.avg())

// 객체 생성자 함수 : 객체 초기치 설정할 때 사용
// 객체 생성 시점에 1번 수행하는 함수

var arr1 = new Array()
arr1[0] = 10
arr1[1] = 20
console.log(arr1)

function Person(a,b,c){
    this.userName = a,
    this.age = b,
    this.weight = c
}
Person.prototype.getInfo = function(){
    console.log(`이름:${this.userName}, 나이:${this.age}, 몸무게:${this.weight}`)
}

var jang = new Person("강감찬",18,70)
var lii = new Person("이순신",1800,570)   //클래스라고 함
jang.getInfo()
lii.getInfo()   //이건 옛날방식 지금은 클래스만 만들어 쓰는 함수를 지원해줌