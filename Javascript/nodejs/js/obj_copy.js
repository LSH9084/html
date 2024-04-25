//객체 복사하기
const obj1 = {
    result: true,
    members: [
        {id:1,name:'여우'},
        {id:2,name:'호랑이'},
        {id:3,name:'사자'}
    ]
}



console.log("일반:",obj1)
console.log(obj1.result)
console.log(obj1.members)
console.log(obj1.members[0])
console.log(obj1.members[0].id)
console.log(obj1.members[0].name)

const copiedObj1 = Object.assign({},obj1)
console.log("copied:",copiedObj1)

//스프레드 연산자를 이용하여 객체 복사
const copiedObj2 = {...obj1}
console.log(copiedObj2)

//객체 속성확인

const userData = {
    //데이터를 저장하는 장소 : 멤버변수,속성
    id: 1,
    name: '길순이',
    age: 10,
    //함수 정의 : 멤버함수(메서드(java)), 기능
    mess: function(){alert('hello')},
    test1: null,
    test2: undefined

}

var isOk = userData.hasOwnProperty('id')
console.log(isOk)

var isOk = userData.hasOwnProperty('address')
console.log(isOk)

console.log('name' in userData)

console.log(userData)

//속성에 값 여부 확인
console.log(userData.id != null)
console.log(userData.test1 != null)
console.log(userData.undefined != null)

const arr = [10,20,30]
const arr_isNull = arr.filter((v)=> v >100)
console.log(arr_isNull,arr_isNull != null)

console.log(Object.keys(userData)) 
console.log(Object.values(userData))
console.log(Object.entries(userData))

//객체 요소 분할 대입
const userData2 = {
    id: 100,
    name: '김길동',
    age: 10,
}

const {id, name1, age} = userData2
console.log(id,age,name1)

const {name: myName} = userData2
console.log(myName)

//객체 수정 제한하기
const num1 = 100
'user strict';
const objData = {
    id: 100,
    name: '길순'
}
Object.freeze(objData)

objData.id = 200
console.log(objData)


const number = [10,20]
Object.freeze(number)
number[0] = 200
console.log(number)


