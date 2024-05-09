console.log('===파일에 있는 모듈 가져오기===')
import { MyClass1 } from './ex08_module.js' 
// import { MyClass2 , Pi , myObj , myPrn } from './ex08_module02.js' 파일 내 특정 모듈 가져오기
import * as m from './ex08_module02.js' // 파일 내 모든 모듈 가져오기


const message1 = new MyClass1().myMethod1()
console.log(message1)

const obj = new m.MyClass2()
// console.log(obj.myMethod2())
// console.log('Pi값:'+Pi+'.......')
// console.log(myObj)
// myPrn()

//별칭일 경우
console.log(m.myObj, m.Pi, obj.myMethod2())
m.myPrn()
m.myPrn2('오태식',30)
