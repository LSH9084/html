//배열 요소 추가
const arr1 = ['사과','귤']
console.log(arr1)
arr1.unshift('바나나')  //배열 요소를 추가하고싶은데 맨 앞에 넣고싶을떄

console.log('unshift():',arr1)

arr1.push('배')  //배열 요소를 추가하고 싶은데 맨 뒤에 넣고싶을떄
console.log('push():',arr1) 

//배열 요소 삭제
const shifteValue = arr1.shift()  //배열 요소를 삭제하고 싶은데 맨 앞의 것을 삭제하고싶을때
console.log('삭제된 요소:',shifteValue)
console.log('삭제 후 배열:',arr1)

const popValue = arr1.pop() //배열 요소를 삭제하고 싶은데 맨 뒤의 것들을 삭제하고 싶을때
console.log('삭제된 요소:',popValue)
console.log('삭제 후 배열:',arr1)


//배열 요소 삭제 및 추가
const arr2 = ['홍길동','동길이','홍길순']
arr2.splice (1,0,'동길이홍')  //(1번째 요소로 가서, 0개의 요소를 삭제하고, 추가)
console.log(arr2)

arr2.splice(1,1,'test')   //(1번째 요소로 가서, 1개의 요소를 삭제하고, 추가하라)
console.log(arr2)

const arr3 = [1,0,2,4]
console.log(arr3.slice(1))

//배열 결합
const arr4 = ['홍','길']
const arr5 = ['동순이']
const arr6 = arr4.concat(arr5)  //arr4와 arr5가 바뀌면 순서바뀜
console.log('arr3.concat(arr5):',arr6)

// const arr7 = [{id:1,name:곰},{id:3,name:참치}]
// const arr8 = [{id:3,name:참치},{id:4,name:꽁치}]

// const arr9 = arr7.concat(arr8)
// console.log(arr9)

//스프레드 연산자 : (...)
const ar1 = ['곰','사자']
console.log(ar1)
console.log(...ar1)
console.log('스프레드연산:',([...arr4,...arr5])) //concat 과 같음

// 배열 요소를 결합해서 문자열 출력
const ar2 = [2,4,8]
console.log('join:',ar2.join()) //모든 배열이 나옴

const ar3 = ['a','b','c']
console.log('join:',ar3.join(''))
console.log('join:',ar3.join('-'))

//배열 요소 검색
const ar4 = ['사과','배','참외']
console.log('indexOf():',ar4.indexOf('사과')) //있으면 배열요소위치
console.log('indexOf():',ar4.indexOf('귤')) //없으면 -로 false
console.log('includes():',ar4.includes('사과')) // 있으면 true
console.log('includes():',ar4.includes('귤')) //없으면 false

console.log('lastIndexOf():',ar4.lastIndexOf('참외'))


arrr1 = [
    {
        "fruit":"fruit1",
        "vegetable" : "vege1"
    },
    {
        "fruit":"fruit2",
        "vegetable":"vege2"
    },
]

arrr2 = [
    {
        "req":"req1",
        "snack":"snack1"
    },
    {
        "req":"req2",
        "snack":"snack2"
    },
    {
        "req":"req2",
        "snack":"snack2"
    },
]

arrr3=[]

for(let i = 0; i<arrr1.length; i++){
    arrr3.push(Object.assign({},arrr1[i],arrr2[i]))
}

console.log(arrr3)
