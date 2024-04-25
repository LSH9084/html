
//변수 선언 키워드 : var, E56(2015) 이후 let, const

// const myFruit = prompt("과일을 입력해주세요")

// switch(myFruit) {
//     case '귤' :
//     case '사과' :
//         console.log("사과입니다.")
//         break
//     case '배' :
//     console.log("배입니다.")
//     break
//     default :
//         console.log ("사과도 배도 아닙니다.")
// }
// Math.floor():소수점 이하 버림


var score
score = prompt("점수",0)
S = (score/10)-(score%10*0.1)
M = Math.floor(score/10)    //S의 내장함수가 Math.floor << 소수점 버림

switch(S){
    case 10 :
    case 9 :
        console.log("A학점 입니다.")
        break
    case 8 :
        console.log("B학점 입니다.")
        break
    case 7 :
        console.log("C학점 입니다.")
        break
    case 6 : 
        console.log("D학점 입니다.")
        break
    default :
        console.log("F학점 입니다.")
}