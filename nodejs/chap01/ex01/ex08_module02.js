console.log('====같은 폴더 다른 파일의 부모요소에서 상속받기===')
//export 선언한 데이터를 모듈로 공개 

// export class MyClass2 {
//     myMethod2(){
//         return 'MyClass2 메서드가 실행되었습니다.'
//     }
// }

// export const Pi = 3.1415292
// export const myObj = {name:'홍길동',age:10}
// export function myPrn(){
//     console.log('======myPrn')
// }


//한번에 다 보내기
export {MyClass2,Pi,myObj,myPrn,myPrn2}
class MyClass2 {
    myMethod2(){
        return 'MyClass2 메서드가 실행되었습니다.'
    }
}

const Pi = 3.1415292
const myObj = {name:'홍길동',age:10}
function myPrn(){
    console.log('======myPrn')
}

function myPrn2(name,age){
    console.log(`name: ${name}, age: ${age}`)
}