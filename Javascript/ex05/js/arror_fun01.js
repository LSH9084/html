//화살표 함수 : "=>"
//함수를 간략히 기술, 
//this를 묶을 수 있음, 
//콜백함수처리 가능
//함수자체를 인자값으로 사용 가능
//익명 함수

//1.인자가 있고, 반환 값이 없는 함수
const fun01 = ()=> {
    console.log('화살표함수 01')
} 

console.log(fun01())


const fun02 = ()=> {
    for (i=1; i<=3; i++){
        console.log(i)
    }
}

console.log(fun02())

// 2. 인자가 있고, 반환값이 없는 함수
const fun03 = (name, age)=>{
    console.log(`당신의 이름은${name}, 나이는${age}`)
}

fun03("홍길동",12)

const fun04 = (start,end) =>{
    for (i=start; i<=end; i++){
        console.log(i)
    }
}

fun04(10,12)

const fun05 =(num1,num2) => num1+num2

// console.log(fun05(1000,500))

fun06 = (num1, num2)=> {
    return (num1+num2)
}
//3. 인자가 있고, 반환값이 있는 함수
let result = fun05(100,50)
let result2 = fun06(1000,500)

console.log(result, result2) 
// 익명 함수는 먼저 선언부터 해야함

//4.가변 인자
let fun07 = (...values) => console.log(values)
let fun08 = (...values) => {
    for (const value of values){
        console.log(value)
    }
}
fun07(10)
fun07(10,30)
fun07(10,20,30)

fun08(10,30,40,50)
fun08(10,3,4,5,6,7,8)


