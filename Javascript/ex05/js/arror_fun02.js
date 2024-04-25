// 화살표 함수 
let fun01 = (name, age) => `이름:${name}, 나이:${age}`
let fun02 = (num1) => num1*100

console.log(fun01('홍길동', 20))
console.log(fun02(3))


myPrint(fun01)

function myPrint(f01){
    let name = prompt("이름:","")
    let age = prompt("나이","")

    let prn_str = f01(name,age)
    console.log(prn_str)
    
}