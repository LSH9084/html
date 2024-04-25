/*
자바 스크립트는 객체(object)기반 언어
객체 => 기능과 속성을 가진 형태 => 변수+함수

객체 종류
-내장객체 : String, Date, Array,....
-부라우저 객체 모델 : window.screen, location, navigator
-문서 객체모델 : HTML 문서 구조
*/

var product = {
    name: '망고' , 
    type: '당절임',
    desc: '망고 ,설탕,..',
    other: '필리핀'
}

console.log(product)
console.log(product.name)
console.log(product.type)
console.log(product.desc)
console.log(product['other'])

// 확장 for
for (var key in product) {
    console.log(product[key])
}

var person = {
    //멤버변수(속성)
    name: '홍길동',
    age: 10,
    score:[100,80,20],
    other:{addr:'부산시', gender: '여자'},
    //멤버함수(메서드)
    eat: function(food) {
        console.log(food + '을 먹었습니다.')
    },
    myPrint: (a,b) => {
        name2 ='강감찬',
        console.log(`거주지:${a},성별:${b},${this.name2}`) //화살표 함수에는 this.key가 적용 안됨 (호환불가)
    }
}

console.log(person.name)
console.log(person.age)
person.eat('바나나')
console.log(person.score[2])

for (var key in person) {
    console.log(person[key])
}

console.log(person.myPrint('서울시','남자'))