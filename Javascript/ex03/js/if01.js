/*
제어문 : 흐름의 방향을 제어
if, switch, while, for,.......

1.if 문 : 
-if (조건식) 참인경우 처리
-if (조건식)
    참인경우
    -if (조건식) {
        참인경우
    }

2.if else 

*/
//1.
const myPrice = 1000

if(myPrice>=50) {
    console.log("50보다 같거나 크다")
    console.log("단순 if문입니다.")
}

console.log("다음 문장 수행....")

// if (조건식) 참인 경우 else 거짓인 경우
// if (조건식)
//     참인 경우
// else
//     거짓인 경우

// if (조건식 {
//     참인경우
// }   else {
//     거짓인 경우
// })
/*
const num1 = 0

if (num1>0) 
    console.log("0보다 크다")
else
    console.log("0이거나 작다")

console.log("d")

let num2 = prompt("숫자1:",0)
console.log(`입력한 숫자는 ${num2}`)

if (num2 % 2 == 0)
    // console.log(`입력한 숫자는 ${num2}는짝수`)
    document.write(`<h1>입력한 숫자는 ${num2}는짝수</h1>`)
else
    document.write(`<h1>입력한 숫자는 ${num2}는홀수</h1>`)
    // console.log(`입력한 숫자는 ${num2}는홀수`)
*/

/*
3.else if
if(조건식1)
    참인 경우1
else if(조건식2)
    참인 경우2
else if (조건식3)
    참인 경우3
else if (조건식n)
      .............

*/

let score
score = prompt("점수:",0)
console.log("점수=",score+"점")

if (score>=90)
    document.write(`<h1>A학점</h1>`)
else if (score>=80)
document.write(`<h1>B학점</h1>`)
else if (score>=70)
document.write(`<h1>C학점</h1>`)
else if (score>=60)
document.write(`<h1>D학점</h1>`)
else
document.write(`<h1>F학점</h1>`)





